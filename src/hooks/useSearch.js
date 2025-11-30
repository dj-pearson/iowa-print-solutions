import { useState, useMemo, useCallback } from 'react'
import { searchIndex, contentTypeLabels } from '../data/searchIndex'

// Simple fuzzy matching function
const fuzzyMatch = (str, pattern) => {
  if (!pattern) return true
  str = str.toLowerCase()
  pattern = pattern.toLowerCase()

  // Direct substring match
  if (str.includes(pattern)) return true

  // Fuzzy match - all characters in pattern appear in order in str
  let patternIdx = 0
  for (let i = 0; i < str.length && patternIdx < pattern.length; i++) {
    if (str[i] === pattern[patternIdx]) {
      patternIdx++
    }
  }
  return patternIdx === pattern.length
}

// Calculate relevance score for ranking results
const calculateScore = (item, query) => {
  if (!query) return 0

  const queryLower = query.toLowerCase()
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 1)
  let score = 0

  // Title exact match (highest priority)
  if (item.title.toLowerCase().includes(queryLower)) {
    score += 100
  }

  // Title word matches
  queryWords.forEach(word => {
    if (item.title.toLowerCase().includes(word)) {
      score += 20
    }
  })

  // Description matches
  if (item.description.toLowerCase().includes(queryLower)) {
    score += 30
  }
  queryWords.forEach(word => {
    if (item.description.toLowerCase().includes(word)) {
      score += 10
    }
  })

  // Keyword exact matches
  item.keywords.forEach(keyword => {
    if (keyword.toLowerCase() === queryLower) {
      score += 50
    } else if (keyword.toLowerCase().includes(queryLower)) {
      score += 25
    }
    queryWords.forEach(word => {
      if (keyword.toLowerCase().includes(word)) {
        score += 15
      }
    })
  })

  // Category match
  if (item.category.toLowerCase().includes(queryLower)) {
    score += 20
  }

  // Recency boost for blog posts
  if (item.type === 'blog' && item.date) {
    const daysOld = (Date.now() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24)
    if (daysOld < 30) score += 10
    else if (daysOld < 90) score += 5
  }

  return score
}

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all'
  })

  // Get unique categories and types for filter dropdowns
  const filterOptions = useMemo(() => {
    const types = new Set(searchIndex.map(item => item.type))
    const categories = new Set(searchIndex.map(item => item.category))

    return {
      types: ['all', ...Array.from(types)],
      categories: ['all', ...Array.from(categories).sort()]
    }
  }, [])

  // Perform search
  const results = useMemo(() => {
    if (!query.trim() && filters.type === 'all' && filters.category === 'all') {
      return []
    }

    let filtered = searchIndex

    // Apply type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(item => item.type === filters.type)
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(item => item.category === filters.category)
    }

    // Apply search query
    if (query.trim()) {
      const queryLower = query.toLowerCase().trim()

      filtered = filtered.filter(item => {
        // Check title
        if (fuzzyMatch(item.title, queryLower)) return true

        // Check description
        if (fuzzyMatch(item.description, queryLower)) return true

        // Check keywords
        if (item.keywords.some(kw => fuzzyMatch(kw, queryLower))) return true

        // Check category
        if (fuzzyMatch(item.category, queryLower)) return true

        return false
      })

      // Score and sort by relevance
      filtered = filtered
        .map(item => ({ ...item, score: calculateScore(item, query) }))
        .sort((a, b) => b.score - a.score)
    }

    return filtered
  }, [query, filters])

  // Search suggestions (for autocomplete)
  const suggestions = useMemo(() => {
    if (!query.trim() || query.length < 2) return []

    const queryLower = query.toLowerCase()
    const seen = new Set()
    const suggestions = []

    // Collect matching keywords
    searchIndex.forEach(item => {
      item.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(queryLower) && !seen.has(keyword.toLowerCase())) {
          seen.add(keyword.toLowerCase())
          suggestions.push({ type: 'keyword', text: keyword })
        }
      })
    })

    // Collect matching titles
    searchIndex.forEach(item => {
      if (item.title.toLowerCase().includes(queryLower) && !seen.has(item.title.toLowerCase())) {
        seen.add(item.title.toLowerCase())
        suggestions.push({ type: 'title', text: item.title, path: item.path })
      }
    })

    return suggestions.slice(0, 8)
  }, [query])

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery('')
    setFilters({ type: 'all', category: 'all' })
  }, [])

  // Update filter
  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }, [])

  return {
    query,
    setQuery,
    filters,
    setFilters,
    updateFilter,
    results,
    suggestions,
    filterOptions,
    clearSearch,
    resultCount: results.length,
    contentTypeLabels
  }
}

// Quick search function for use outside hook
export const quickSearch = (query, limit = 5) => {
  if (!query.trim()) return []

  const queryLower = query.toLowerCase().trim()

  return searchIndex
    .filter(item => {
      if (item.title.toLowerCase().includes(queryLower)) return true
      if (item.description.toLowerCase().includes(queryLower)) return true
      if (item.keywords.some(kw => kw.toLowerCase().includes(queryLower))) return true
      return false
    })
    .map(item => ({ ...item, score: calculateScore(item, query) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

export default useSearch
