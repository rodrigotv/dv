import Link from './Link'

const ReadMore = ({ href, linkText = 'Read More' }: { href: string, linkText: string }) => {
  return (
    <Link href={href} className="home-button">{linkText}</Link>
  )
}

export default ReadMore