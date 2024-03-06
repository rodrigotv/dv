import { ReactNode } from 'react'

interface Props {
  children: ReactNode,
  id?: string,
}

export default function SectionContainer({ children, id }: Props) {

  return (
    <section id={id} className="section-container w-full m-0 p-0">{children}</section>
  )
}
