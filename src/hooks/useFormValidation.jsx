import React, { useState, useCallback } from 'react'

// Validation rules
const validators = {
  required: (value) => {
    if (typeof value === 'string') return value.trim().length > 0
    return value !== null && value !== undefined
  },

  email: (value) => {
    if (!value) return true // Only validate if there's a value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  },

  phone: (value) => {
    if (!value) return true // Only validate if there's a value
    // Allow various phone formats: (515) 555-0123, 515-555-0123, 5155550123, +1-515-555-0123
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/
    return phoneRegex.test(value.replace(/\s/g, ''))
  },

  minLength: (min) => (value) => {
    if (!value) return true
    return value.length >= min
  },

  maxLength: (max) => (value) => {
    if (!value) return true
    return value.length <= max
  },

  number: (value) => {
    if (!value) return true
    return !isNaN(Number(value))
  },

  min: (min) => (value) => {
    if (!value) return true
    return Number(value) >= min
  },

  max: (max) => (value) => {
    if (!value) return true
    return Number(value) <= max
  }
}

// Error messages
const defaultMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (min) => `Must be at least ${min} characters`,
  maxLength: (max) => `Must be no more than ${max} characters`,
  number: 'Please enter a valid number',
  min: (min) => `Must be at least ${min}`,
  max: (max) => `Must be no more than ${max}`
}

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Validate a single field
  const validateField = useCallback((name, value) => {
    const rules = validationRules[name]
    if (!rules) return null

    for (const rule of rules) {
      let isValid = true
      let message = ''

      if (typeof rule === 'string') {
        // Simple rule like 'required' or 'email'
        isValid = validators[rule](value)
        message = defaultMessages[rule]
      } else if (typeof rule === 'object') {
        // Rule with options like { type: 'minLength', value: 10 }
        const validator = validators[rule.type]
        if (typeof validator === 'function') {
          const validatorFn = rule.value !== undefined ? validator(rule.value) : validator
          isValid = validatorFn(value)
          message = rule.message || (
            typeof defaultMessages[rule.type] === 'function'
              ? defaultMessages[rule.type](rule.value)
              : defaultMessages[rule.type]
          )
        }
      }

      if (!isValid) {
        return message
      }
    }

    return null
  }, [validationRules])

  // Validate all fields
  const validateAll = useCallback(() => {
    const newErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name])
      if (error) {
        newErrors[name] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(Object.keys(validationRules).reduce((acc, key) => ({ ...acc, [key]: true }), {}))

    return isValid
  }, [values, validationRules, validateField])

  // Handle field change
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }, [errors])

  // Handle field blur (validate on blur)
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))

    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }, [validateField])

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  // Set a single value
  const setValue = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }))
  }, [])

  // Get field props for easy spreading
  const getFieldProps = useCallback((name) => ({
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur
  }), [values, handleChange, handleBlur])

  // Check if field has error and was touched
  const getFieldError = useCallback((name) => {
    return touched[name] ? errors[name] : null
  }, [errors, touched])

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    validateField,
    resetForm,
    setValue,
    setValues,
    getFieldProps,
    getFieldError,
    isValid: Object.values(errors).every(e => !e)
  }
}

// FormField component for consistent styling with accessibility support
export const FormField = ({ label, name, error, required, children }) => {
  const errorId = `${name}-error`

  // Clone children to add aria-describedby and aria-invalid attributes
  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        'aria-describedby': error ? errorId : undefined,
        'aria-invalid': error ? 'true' : undefined,
        'aria-required': required ? 'true' : undefined
      })
    }
    return child
  })

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
          {required && <span className="sr-only">(required)</span>}
        </label>
      )}
      {enhancedChildren}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600 flex items-center gap-1" role="alert">
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  )
}

export default useFormValidation
