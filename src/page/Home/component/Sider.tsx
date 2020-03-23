import * as React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { LayoutOutlined, RocketOutlined } from '@ant-design/icons'
const { Sider } = Layout
import { IHomeProps } from '@type/home'


const SiderComponent: React.SFC<IHomeProps> = (props: IHomeProps) => {

  const choose = (id) => {
    console.log('choose', id, props)
    props.choosePot()
  }

  return (
    <Sider trigger={null} collapsible>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultOpenKeys={['frontend']} defaultSelectedKeys={['Javascript']} onClick={ choose }>
        <SubMenu key="frontend"
          title={
            <span>
              <LayoutOutlined />
              <span>前端学习</span>
            </span>
          }
        >
          <Menu.Item key="Javascript">
            <Link to="/frontend/Javascript">Javascript</Link>
          </Menu.Item>
          <Menu.Item key="React">
            <Link to="/frontend/React">React</Link>
          </Menu.Item>
          <Menu.Item key="Vue">
            <Link to="/frontend/Vue">Vue</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="python"
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