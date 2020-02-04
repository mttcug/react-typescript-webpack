import * as React from 'react'
// import { Switch, Route, NavLink } from 'react-router-dom'
import { Layout } from 'antd'
const { Content } = Layout
import './index.scss'
import SideComponent from '@page/Home/component/Sider'
import HeaderComponent from '@page/Home/component/Header'

const Home: React.SFC = () => {
  return (
    <Layout>
      <SideComponent />
      <Layout>
        <HeaderComponent />
        <Content className='content'>
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
