import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, FileText, MapPin, Briefcase, BookOpen, Wrench, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { quickSearch } from '../hooks/useSearch'
import { contentTypeLabels } from '../data/searchIndex'

// Icons for different content types
const typeIcons = {
  blog: FileText,
  resource: BookOpen,
  location: MapPin,
  industry: Briefcase,
  service: Briefcase,
  tool: Wrench
}

const SearchBar = ({ variant = 'navbar', onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef(null)
  const resultsRef = useRef(null)
  const navigate = useNavigate()

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        const searchResults = quickSearch(query, 8)
        setResults(searchResults)
        setIsOpen(true)
        setSelectedIndex(-1)
      } else {
        setResults([])
        setIsOpen(false)
      }
    }, 150)

    return () => clearTimeout(timer)
  }, [query])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'Enter' && query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`)
        setIsOpen(false)
        onClose?.()
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          navigate(results[selectedIndex].path)
          setIsOpen(false)
          setQuery('')
          onClose?.()
        } else if (query.trim()) {
          navigate(`/search?q=${encodeURIComponent(query)}`)
          setIsOpen(false)
          onClose?.()
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedIndex(-1)
        break
    }
  }, [isOpen, results, selectedIndex, query, navigate, onClose])

  // Handle result click
  const handleResultClick = (path) => {
    navigate(path)
    setIsOpen(false)
    setQuery('')
    onClose?.()
  }

  // Handle view all results
  const handleViewAll = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
      setIsOpen(false)
      onClose?.()
    }
  }

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resultsRef.current && !resultsRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus input on mount for modal variant
  useEffect(() => {
    if (variant === 'modal' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [variant])

  const isNavbar = variant === 'navbar'

  return (
    <div className={`relative ${isNavbar ? 'w-full max-w-xs' : 'w-full'}`}>
      <div className="relative">
        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${isNavbar ? 'h-4 w-4' : 'h-5 w-5'}`} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search resources, blog posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length >= 2 && results.length > 0 && setIsOpen(true)}
          className={`w-full bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors ${
            isNavbar ? 'pl-9 pr-8 py-1.5 text-sm' : 'pl-11 pr-10 py-3 text-base'
          }`}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setIsOpen(false)
              inputRef.current?.focus()
            }}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 ${isNavbar ? 'p-0.5' : 'p-1'}`}
          >
            <X className={isNavbar ? 'h-3 w-3' : 'h-4 w-4'} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden ${
              isNavbar ? 'top-full mt-2 w-96 right-0' : 'top-full mt-2 w-full'
            }`}
          >
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => {
                const Icon = typeIcons[result.type] || FileText
                const isSelected = index === selectedIndex

                return (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result.path)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${
                      isSelected ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 p-1.5 rounded-md ${
                        result.type === 'blog' ? 'bg-blue-100 text-blue-600' :
                        result.type === 'resource' ? 'bg-green-100 text-green-600' :
                        result.type === 'location' ? 'bg-purple-100 text-purple-600' :
                        result.type === 'tool' ? 'bg-orange-100 text-orange-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-500 uppercase">
                            {contentTypeLabels[result.type]}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* View All Results */}
            <button
              onClick={handleViewAll}
              className="w-full px-4 py-3 bg-gray-50 border-t border-gray-200 text-sm font-medium text-blue-600 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              View all results for "{query}"
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results Message */}
      <AnimatePresence>
        {isOpen && query.trim().length >= 2 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-4 ${
              isNavbar ? 'top-full mt-2 w-80 right-0' : 'top-full mt-2 w-full'
            }`}
          >
            <p className="text-sm text-gray-500 text-center">
              No results found for "{query}"
            </p>
            <p className="text-xs text-gray-400 text-center mt-1">
              Try different keywords or browse our{' '}
              <button
                onClick={() => {
                  navigate('/resources')
                  setIsOpen(false)
                  onClose?.()
                }}
                className="text-blue-600 hover:underline"
              >
                resources
              </button>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar
