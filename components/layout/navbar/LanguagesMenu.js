import React from 'react'
import { Menu, Dropdown, Space, Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/" locale="en">
        <span>
          <Avatar
            size={16}
            src={`/images/flags/en.svg`}
            style={{ marginRight: '8px' }}
          />
          English
        </span>
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link href="/" locale="ar">
        <span>
          <Avatar
            size={16}
            src={`/images/flags/ar.svg`}
            style={{ marginRight: '8px' }}
          />
          عربي
        </span>
      </Link>
    </Menu.Item>
  </Menu>
)

const LanguagesMenu = () => {
  const { t, lang } = useTranslation()
  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
      arrow={{ pointAtCenter: true }}
    >
      <Space>
        <a className="nav-link" onClick={(e) => e.preventDefault()}>
          <Avatar
            size={16}
            src={`/images/flags/${lang}.svg`}
            style={{ marginRight: '8px' }}
          />
          {lang === 'en' ? 'English' : 'عربي'} <DownOutlined />
        </a>
      </Space>
    </Dropdown>
  )
}

export default LanguagesMenu
