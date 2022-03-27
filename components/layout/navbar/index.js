import Link from 'next/link'
import LanguagesMenu from './LanguagesMenu'

export const Navbar = () => {
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
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <LanguagesMenu />
            </li>
            <li>
              <Link href="/signup">
                <a className="getstarted">Get Started</a>
              </Link>
            </li>
          </ul>
          <Link href="/signup">
            <a className="getstarted mobile-nav-toggle">Get Started</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
