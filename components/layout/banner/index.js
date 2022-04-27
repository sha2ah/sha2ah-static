import React from 'react'

import useTranslation from 'next-translate/useTranslation'

export const Banner = () => {
  const { t } = useTranslation('common')

  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>{t('banner.title')}</h3>
          <p>{t('banner.subtitle')}</p>
          <a className="cta-btn" href="#">
            {t('banner.button')}
          </a>
        </div>
      </div>
    </section>
  )
}
