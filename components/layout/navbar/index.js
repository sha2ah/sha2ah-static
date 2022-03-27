import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/" locale="en">
        English
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link href="/" locale="ar">
        عربي
      </Link>
    </Menu.Item>
  </Menu>
)

export const Navbar = () => {
  const { t, lang } = useTranslation()
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
            {/* <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li> */}
            {/* <li>
              <a className="nav-link scrollto" href="#pricing">
                Pricing
              </a>
            </li> */}
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li style={{ textTransform: 'uppercase' }}>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                arrow={{ pointAtCenter: true }}
              >
                <a className="nav-link" onClick={(e) => e.preventDefault()}>
                  {lang} <DownOutlined />
                </a>
              </Dropdown>
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
