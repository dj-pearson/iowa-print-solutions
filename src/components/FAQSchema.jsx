
import React from 'react'
import { Helmet } from 'react-helmet'

const FAQSchema = ({ faqs }) => {
  // Defensive programming: ensure faqs is an array
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default FAQSchema
