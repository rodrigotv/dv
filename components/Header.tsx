import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import DivContainer from './DivContainer'

const Header = () => {
  return (
    <header id="site-header" className="w-full bg-dvHeaderBG m-0 py-4 px-0 sm:py-5 border-b-solid border-b-8 border-b-dvHeaderBorder">
      <DivContainer classAddition='bg-header bg-cover bg-no-repeat'>
        <nav className="flex justify-evenly text-base lg:text-md">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-semibold italic text-white md:block"
              >
                {link.title}
              </Link>
            ))}
          <MobileNav />
        </nav>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="mt-5 mb-5 sm:mt-8 sm:mb-7 md:mt-10 md:mb-7 lg:mt-20 lg:mb-7 py-4 text-center">
            <p className="text-site_title sm:text-site_title_sm md:text-site_title_md lg:text-site_title_lg text-gray-100">{siteMetadata.headerTitle}</p>
            <p className="text-site_description sm:text-site_description md:text-site_description_md lg:text-site_description_lg italic text-dvOrangeGold1 mt-3">{siteMetadata.description}</p>
          </div>
        </Link>
        <div className="text-center">
          <ThemeSwitch />
        </div>
      </DivContainer>
    </header>
  )
}

export default Header
