import Link from 'next/link'
import LanguagesMenu from './LanguagesMenu'
import useTranslation from 'next-translate/useTranslation'

export const Navbar = () => {
  const { t } = useTranslation('common')
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link href="/">EasyRent</Link>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" href="#hero">
                {t('navbar.home')}
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                {t('navbar.about')}
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                {t('navbar.services')}
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                {t('navbar.contact')}
              </a>
            </li>
            <li>
              <LanguagesMenu />
            </li>
            <li>
              <Link href="/signup">
                <a className="getstarted">{t('navbar.signup')}</a>
              </Link>
            </li>
          </ul>
          <div className="mobile-nav-toggle">
            <LanguagesMenu />
            <Link href="/signup">
              <a className="getstarted">{t('navbar.signup')}</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
