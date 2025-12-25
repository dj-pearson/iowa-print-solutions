/**
 * Schema.org structured data components
 * Centralized exports for all schema-related functionality
 */

export { default as SchemaGenerator } from './SchemaGenerator'

// Re-export for backwards compatibility with existing components
// These can be gradually removed as pages are updated to use SchemaGenerator
export { default as StructuredData } from '../StructuredData'
export { default as OrganizationSchema } from '../OrganizationSchema'
