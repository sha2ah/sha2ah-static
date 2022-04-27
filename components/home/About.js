import { CheckOutlined } from '@ant-design/icons'

import useTranslation from 'next-translate/useTranslation'

export function About() {
  const { t } = useTranslation('home')

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t('about.title')}</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>{t('about.description1')}</p>
            <b>{t('about.landloard.title')}</b>
            <ul>
              <li>
                <CheckOutlined /> {t('about.landloard.feature1')}
              </li>
              <li>
                <CheckOutlined /> {t('about.landloard.feature2')}
              </li>
              <li>
                <CheckOutlined /> {t('about.landloard.feature3')}
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>{t('about.description2')}</p>
            <b>{t('about.tenant.title')}</b>
            <ul>
              <li>
                <CheckOutlined /> {t('about.tenant.feature1')}
              </li>
              <li>
                <CheckOutlined /> {t('about.tenant.feature2')}
              </li>
              <li>
                <CheckOutlined /> {t('about.tenant.feature3')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
