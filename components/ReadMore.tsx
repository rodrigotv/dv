import Link from './Link'

const ReadMore = ({ href }: { href: string }) => {
  return (
    <Link href={href} className="home-button">Read More</Link>
  )
}

export default ReadMore