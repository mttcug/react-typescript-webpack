import * as React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const HeaderComponent: React.SFC = () => {
  return (
    <Header style={{ background: '#fff', padding: '0px 20px' }}>
      我是头部
    </Header>
  )
}

export default HeaderComponent