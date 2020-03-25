import * as React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { LayoutOutlined, RocketOutlined } from '@ant-design/icons'
const { Sider } = Layout
import { ISiderProps } from '@type/home'


const SiderComponent: React.SFC<ISiderProps> = (props: ISiderProps) => {

  const choose = (item) => {
    props.choosePot(item.key)
  }
  const frontLearn = [
    { key: 'Javascript', path: '/frontend/Javascript' },
    { key: 'React', path: '/frontend/React' },
    { key: 'Vue', path: '/frontend/Vue' }
  ]

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
          {
            frontLearn.map(item => {
              return (
                <Menu.Item key={ item.key }>
                  <Link to={ item.path }>{ item.key }</Link>
                </Menu.Item>
              )
            })
          }
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