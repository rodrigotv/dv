import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs';
import path from 'path';
import DivContainer from '@/components/DivContainer';
import Gallery from '@/components/Gallery';
import StatBox from '@/components/StatBox';
import ReadMore from '@/components/ReadMore';
import Image from '@/components/Image';
import { notFound } from 'next/navigation';
import SectionContainer from '@/components/SectionContainer';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import PageTitle from '@/components/PageTitle';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let content;
  try {
    content = await fs.readFile(path.join(process.cwd(), 'data/pages/training', `${slug}.mdx`), 'utf-8');
  } catch {
    notFound();
  }

  interface Frontmatter {
    title: string;
    date: string;
    tags: string[];
    draft: boolean;
    summary: string;
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true
    },
    components: {
      DivContainer,
      Gallery,
      ReadMore,
      StatBox,
      Image,
    }
  })

  return {
    title: data.frontmatter.title,
    description: data.frontmatter.summary,
  }
}


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let content;
  try {
    content = await fs.readFile(path.join(process.cwd(), 'data/pages/training', `${slug}.mdx`), 'utf-8');
  } catch {
    notFound();
  }

  interface Frontmatter {
    title: string;
    date: string;
    tags: string[];
    draft: boolean;
    summary: string;
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true
    },
    components: {
      DivContainer,
      Gallery,
      ReadMore,
      StatBox,
      Image,
    }
  })

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>{data.frontmatter.title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0">
              <div className="max-w-none pb-8 pt-10">{data.content}</div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}