import React from 'react'
import { Helmet } from 'react-helmet'

const ArticleSchema = ({ 
  headline,
  description,
  author = "Dan Pearson",
  datePublished,
  dateModified = datePublished,
  image = "https://iowaprintsolutions.com/og-image.jpg",
  url,
  keywords = [],
  articleSection = "Print Management",
  wordCount,
  articleBody,
  publisher = {
    name: "Iowa Print Solutions",
    logo: "https://iowaprintsolutions.com/logo.png"
  },
  about = []
}) => {
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': headline,
    'description': description,
    'image': image,
    'url': url,
    'datePublished': datePublished,
    'dateModified': dateModified,
    'author': {
      '@type': 'Person',
      'name': author,
      'jobTitle': 'Print Management Consultant',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Infomax Office Systems'
      }
    },
    'publisher': {
      '@type': 'Organization',
      'name': publisher.name,
      'logo': {
        '@type': 'ImageObject',
        'url': publisher.logo
      }
    },
    'articleSection': articleSection,
    'wordCount': wordCount,
    'articleBody': articleBody,
    'keywords': keywords.join(', '),
    'about': about.map(topic => ({
      '@type': 'Thing',
      'name': topic.name,
      'description': topic.description || topic.name
    })),
    'inLanguage': 'en-US',
    'isAccessibleForFree': true,
    'audience': {
      '@type': 'BusinessAudience',
      'businessFunction': 'IT Management'
    },
    'locationCreated': {
      '@type': 'Place',
      'name': 'Iowa, United States'
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default ArticleSchema