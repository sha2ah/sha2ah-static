import React from 'react'
import Link from 'next/link'

import useTranslation from 'next-translate/useTranslation'

export const Banner = ({ link }) => {
  const { t } = useTranslation('common')

  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="text-center">
          <h3>{t('banner.title')}</h3>
          <p>{t('banner.subtitle')}</p>
          <Link href={link}>
            <a className="cta-btn">{t('banner.button')}</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
