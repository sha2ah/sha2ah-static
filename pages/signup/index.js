import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

import { Navbar, Footer } from '../../components/layout'
import {
  Row,
  Col,
  Layout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
} from 'antd'

import useTranslation from 'next-translate/useTranslation'

import authServices from '../../services/auth'

const { Text, Title } = Typography

const Signup = () => {
  const { t, lang } = useTranslation('auth')
  const router = useRouter()

  const onFinish = async (values) => {
    try {
      const data = await authServices.signup(values)
      console.log(data)
      router.push('https://www.sha2ah.com/estates')
    } catch (err) {
      console.log(err.message)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const CardTitle = (
    <Title level={1} className="title">
      {t('signup.title')}
    </Title>
  )

  return (
    <div
      dir={lang === 'en' ? 'ltr' : 'rtl'}
      className={lang === 'en' ? '' : 'text-right'}
    >
      <Head>
        <title>{t('signup.title')}</title>
        <meta name="description" content={t('signup.description')} />
        <link rel="icon" href="/EASY RENT logo.png" />
      </Head>
      <Navbar />

      <Layout className="layout" id="auth">
        <Row justify="center" align="middle">
          <Col xs={22}>
            <div className="container">
              <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  requiredMark={false}
                  initialValues={{
                    remember: false,
                  }}
                >
                  <Form.Item
                    name="username"
                    label={t('fields.username')}
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder={t('fields.username')} />
                  </Form.Item>
                  <Form.Item
                    name="first_name"
                    label={t('fields.first_name')}
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder={t('fields.first_name')} />
                  </Form.Item>
                  <Form.Item
                    name="last_name"
                    label={t('fields.last_name')}
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder={t('fields.last_name')} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label={t('fields.email')}
                    rules={[{ required: true }]}
                  >
                    <Input
                      size="large"
                      placeholder={t('fields.email')}
                      type="email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label={t('fields.password')}
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="password"
                      placeholder="●●●●●●●●"
                      size="large"
                    />
                  </Form.Item>
                  <Button size="large" htmlType="submit" block>
                    {t('signup.button')}
                  </Button>
                </Form>
                <div style={{ marginTop: 8 }}>
                  <Text style={{ fontSize: 12 }}>
                    {t('fields.noAccount')}{' '}
                    <Link
                      href="https://www.sha2ah.com/login"
                      style={{ fontWeight: 'bold' }}
                    >
                      {t('login.button')}
                    </Link>
                  </Text>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Layout>
      <Footer />
    </div>
  )
}

export default Signup
