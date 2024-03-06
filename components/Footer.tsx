import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import DivContainer from './DivContainer'

export default function Footer() {
  return (
    <footer id="site-footer" className="w-full bg-gradient-to-l from-dvFooterRight to-dvFooterLeft m-0 py-4 px-0 sm:py-5">
      <DivContainer classAddition='bg-footer bg-contain bg-no-repeat bg-right text-gray-100'>
        <ul>
          <li>Daniela Viscarra</li>
          <li>
            <a href="tel:+59172022424" className="text-gray-100 hover:text-dvOrangeGold1">+591 72022424</a>
          </li>
          <li className="flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          </li>
          <li>La Paz - Bolivia</li>
        </ul>
        <div className="mt-6 mb-2 flex space-x-4 text-sm text-gray-300">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </DivContainer>
    </footer>
  )
}
