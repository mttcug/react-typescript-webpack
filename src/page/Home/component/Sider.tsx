import * as React from 'react'
import { Layout, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { LayoutOutlined, RocketOutlined } from '@ant-design/icons'
const { Sider } = Layout

const SiderComponent: React.SFC = () => {

  const choose = (id) => {
    console.log('choose', id)
  }

  return (
    <Sider trigger={null} collapsible>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} onClick={ choose }>
        <SubMenu key="1"
          title={
            <span>
              <LayoutOutlined />
              <span>前端学习</span>
            </span>
          }
        >
          <Menu.Item key="2">
            javascript
          </Menu.Item>
          <Menu.Item key="3">
            React
          </Menu.Item>
          <Menu.Item key="4">
            Vue
          </Menu.Item>
        </SubMenu>
        <SubMenu key="5"
          title={
            <span>
              <RocketOutlined />
              <span>python学习</span>
            </span>
          }
        >
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SiderComponent