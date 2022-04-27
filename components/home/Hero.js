import React from 'react'
import {
  LockOutlined,
  RiseOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons'

import useTranslation from 'next-translate/useTranslation'

export function Hero() {
  const { t } = useTranslation('home')

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>{t('hero.title')}</h1>
            <h2>{t('hero.subtitle')}</h2>
          </div>
        </div>
        <div className="text-center">
          <a href="#about" className="btn-get-started scrollto">
            {t('hero.button')}
          </a>
        </div>

        <div className="row icon-boxes">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <LockOutlined />
              </div>
              <h4 className="title">{t('hero.feature1.title')}</h4>
              <p className="description">{t('hero.feature1.description')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <DashboardOutlined />
              </div>
              <h4 className="title">{t('hero.feature2.title')}</h4>
              <p className="description">{t('hero.feature2.description')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <RiseOutlined />
              </div>
              <h4 className="title">{t('hero.feature3.title')}</h4>
              <p className="description">{t('hero.feature3.description')}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <FieldTimeOutlined />
              </div>
              <h4 className="title">{t('hero.feature4.title')}</h4>
              <p className="description">{t('hero.feature4.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
