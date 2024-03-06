import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import SectionContainer from '@/components/SectionContainer'
import { Pages, allPages } from 'contentlayer/generated'
import { components } from '@/components/MDXComponents' 

export default function Page({ params }: { params: { slug: string[] } }) {
  const _1_HomeAbout = allPages.find((p) => p.slug === '1_home_about') as Pages
  const _2_HomeProductDevelopment = allPages.find((p) => p.slug === '2_home_product_development') as Pages
  const _3_HomeBusinessDevelopment = allPages.find((p) => p.slug === '3_home_business_development') as Pages
  const _4_HomeTrainingPrograms = allPages.find((p) => p.slug === '4_home_training_programs') as Pages
  const _5_HomeProjects = allPages.find((p) => p.slug === '5_home_projects') as Pages
  const _6_HomeConsulting = allPages.find((p) => p.slug === '6_home_consulting') as Pages

  return (
    <>
    <div className="home">
      <SectionContainer id="home-about">
        <MDXLayoutRenderer components={components}  code={_1_HomeAbout.body.code} toc={_1_HomeAbout.toc} />
      </SectionContainer>
      <SectionContainer id="home-product-development">
        <MDXLayoutRenderer components={components}  code={_2_HomeProductDevelopment.body.code} toc={_2_HomeProductDevelopment.toc} />
      </SectionContainer>
      <SectionContainer id="home-business-development">
        <MDXLayoutRenderer components={components}  code={_3_HomeBusinessDevelopment.body.code} toc={_3_HomeBusinessDevelopment.toc} />
      </SectionContainer>
      <SectionContainer id="home-training">
        <MDXLayoutRenderer components={components}  code={_4_HomeTrainingPrograms.body.code} toc={_4_HomeTrainingPrograms.toc} />
      </SectionContainer>
      <SectionContainer id="home-projects">
        <MDXLayoutRenderer components={components}  code={_5_HomeProjects.body.code} toc={_5_HomeProjects.toc} />
      </SectionContainer>
      <SectionContainer id="home-consulting">
        <MDXLayoutRenderer components={components}  code={_6_HomeConsulting.body.code} toc={_6_HomeConsulting.toc} />
      </SectionContainer>
    </div>
    </>
  )
}
