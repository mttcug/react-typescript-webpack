import * as React from 'react'
import { Layout, Icon } from 'antd'
const { Header } = Layout

const HeaderComponent: React.SFC = () => {
  return (
    <Header style={{ background: '#fff', padding: '0px 20px' }}>
      <Icon
        className="trigger"
        type='menu-unfold'
      />
    </Header>
  )
}

export default HeaderComponent