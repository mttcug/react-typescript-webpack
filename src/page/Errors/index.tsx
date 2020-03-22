import * as React from 'react'
// import { Switch, Route, NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout

const Error: React.SFC = () => {
  return (
    <Layout>
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default Error
