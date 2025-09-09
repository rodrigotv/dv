import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc'

import SectionContainer from '@/components/SectionContainer'
import DivContainer from '@/components/DivContainer';
import Gallery from '@/components/Gallery';
import StatBox from '@/components/StatBox';
import ReadMore from '@/components/ReadMore';
import Image from '@/components/Image';

export default async function Page() {
  const pagesDir = path.join(process.cwd(), 'data/pages')
  const filenames = await fs.readdir(pagesDir)
  
  interface Frontmatter {
    title: string;
    date: string;
    id: string;
  }
  
  // Filtrar solo archivos .mdx que empiecen con número y excluir archivos ocultos
  const mdxFiles = filenames.filter(filename => 
    filename.endsWith('.mdx') && 
    !filename.startsWith('.') &&
    !filename.startsWith('_') && // También excluir archivos que empiecen con _
    /^\d/.test(filename) // Solo archivos que empiecen con un número
  )
  
  const sections = await Promise.all(
    mdxFiles.map(async (filename) => {
      const filePath = path.join(pagesDir, filename)
      
      try {
        // Verificar que sea un archivo
        const stats = await fs.stat(filePath)
        if (!stats.isFile()) {
          console.log(`Skipping non-file: ${filename}`)
          return null
        }
        
        const content = await fs.readFile(filePath, 'utf-8');
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
          <SectionContainer key={data.frontmatter.id} id={data.frontmatter.id}>
            {data.content}
          </SectionContainer>
        )
        
      } catch (error) {
        console.error(`Error processing file ${filename}:`, error)
        return null
      }
    })
  )
  
  // Filtrar elementos null (archivos que fallaron al procesarse)
  const validSections = sections.filter(Boolean)
    
  return (
    <>
    <div className="home">
      {
        validSections.map(item => item)
      }
    </div>
    </>
  )
}
