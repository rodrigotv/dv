import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import DivContainer from './DivContainer'
import Gallery from './Gallery'
import ReadMore from './ReadMore'
import StatBox from './StatBox'
import ConsultingContactForm from './consulting-contact-form'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  DivContainer,
  Gallery,
  ReadMore,
  StatBox,
  ConsultingContactForm
}
