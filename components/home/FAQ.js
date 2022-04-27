import React from 'react'
import { Collapse } from 'antd'

import useTranslation from 'next-translate/useTranslation'

const { Panel } = Collapse

export const FAQ = () => {
  const { t } = useTranslation('home')

  const data = [
    {
      id: 'q1',
      title: t('faqs.q1.title'),
      description: t('faqs.q1.description'),
    },
    {
      id: 'q2',
      title: t('faqs.q2.title'),
      description: t('faqs.q2.description'),
    },
    {
      id: 'q3',
      title: t('faqs.q3.title'),
      description: t('faqs.q3.description'),
    },
    {
      id: 'q4',
      title: t('faqs.q4.title'),
      description: t('faqs.q4.description'),
    },
    {
      id: 'q5',
      title: t('faqs.q5.title'),
      description: t('faqs.q5.description'),
    },
  ]

  const questions = data.map((question) => {
    return (
      <Panel header={question.title} key={question.id}>
        <p>{question.description}</p>
      </Panel>
    )
  })

  return (
    <section id="faq" className="faq section-bg section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t('faqs.title')}</h2>
        </div>

        <Collapse defaultActiveKey={['q1']}>{questions}</Collapse>
      </div>
    </section>
  )
}

export default FAQ
