import { Pages, allPages } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PageLayout from '@/layouts/PageLayout'
import { coreContent } from 'pliny/utils/contentlayer'
// import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { components } from '@/components/MDXComponents' 

import siteMetadata from '@/data/siteMetadata'
// export const metadata = genPageMetadata({ title: ''})

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const page = allPages.find((p) => p.slug === slug)
  if (!page) {
    return
  }

  let imageList = [siteMetadata.socialBanner]
  if (page.images) {
    imageList = typeof page.images === 'string' ? [page.images] : page.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: page.title,
    description: page.summary,
    openGraph: {
      title: page.title,
      description: page.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      url: './',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.summary,
      images: imageList,
    },
  }
}

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
