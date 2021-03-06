import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'

import useTranslation from 'next-translate/useTranslation'

export const Contact = () => {
  const { t } = useTranslation('home')

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <h2>{t('contact.title')}</h2>
        </div>

        {/* <div>
          <iframe
            style="border: 0; width: 100%; height: 270px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div> */}

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <EnvironmentOutlined />
                <h4>{t('contact.location')}:</h4>
                <p>October 6 University, Giza</p>
              </div>

              <div className="email">
                <MailOutlined />
                <h4>{t('contact.email')}:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <PhoneOutlined />
                <h4>{t('contact.phone')}:</h4>
                <p>(+20) 11 544 786 2</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder={t('contact.form.name')}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder={t('contact.form.email')}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder={t('contact.form.subject')}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder={t('contact.form.message')}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">{t('contact.form.button')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
