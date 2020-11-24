import React from 'react'
import { Layout } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import Logo from '../../assets/images/logo.png'
import moment from 'moment'

const { Header, Footer } = Layout

export const Headers = () => {
  return (
    <Header style={{ color: '#fff' }}>
      <img src={Logo} className="header-logo" />
    </Header>
  )
}

export const Footers = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      &copy;{moment(new Date()).format('YYYY')} ・ Developed with <HeartTwoTone twoToneColor="#eb2f96" /> by Muhamad Zaky
    </Footer>
  )
}