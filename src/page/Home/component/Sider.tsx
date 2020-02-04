import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

const SiderComponent: React.SFC = () => {
  return (
    <Sider trigger={null} collapsible>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>project one</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>project two</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>project three</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SiderComponent