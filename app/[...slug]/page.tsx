import { Pages, allPages } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PageLayout from '@/layouts/PageLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { notFound } from 'next/navigation'
import { components } from '@/components/MDXComponents' 

export const metadata = genPageMetadata({ title: 'About' })

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const page = allPages.find((p) => p.slug === slug) as Pages

  if (!page) {
    return notFound()
  }


  const mainContent = coreContent(page)

  return (
    <>
      <PageLayout content={mainContent}>
        <MDXLayoutRenderer components={components}  code={page.body.code} toc={page.toc} />
      </PageLayout>
    </>
  )
}
