import { ReactNode } from 'react'

interface Props {
  children: ReactNode,
  classAddition?: string
}

const DivContainer = ({ children, classAddition }: Props) => {
  let divClass = classAddition  || ''
  if (divClass.indexOf('max-w-') === -1) divClass += ' max-w-screen-xl'
  if (divClass.indexOf('max-w-full') === -1) {
    divClass += ' my-0 mx-auto px-4 md:px-6'
  } else {
    divClass += ' my-0 mx-0 px-0'
  }
  return (
    <div className={`div-container ${divClass}`}>{children}</div>
  )
}

export default DivContainer