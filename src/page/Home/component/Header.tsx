import * as React from 'react'
import { Layout, Icon } from 'antd'
const { Header } = Layout

const HeaderComponent: React.SFC = () => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type='menu-unfold'
      />
    </Header>
  )
}

export default HeaderComponent