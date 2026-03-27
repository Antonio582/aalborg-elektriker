export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: 'Jakob Nielsen',
      jobTitle: 'Autoriseret el-installatør',
      worksFor: {
        '@type': 'Organization',
        name: 'Aalborg El-Service',
        url: 'https://aalborg-elektriker.dk',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aalborg El-Service',
      url: 'https://aalborg-elektriker.dk',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
