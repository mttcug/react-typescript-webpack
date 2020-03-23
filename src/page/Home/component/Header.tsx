import * as React from 'react'
import { Layout, PageHeader } from 'antd'
const { Header } = Layout
import { IHomeProps } from '@type/home'

const HeaderComponent: React.SFC<IHomeProps> = (props: IHomeProps) => {
  console.log('props:', props)
  return (
    <Header style={{ background: '#fff', padding: '0px 20px' }}>
      <PageHeader
        className="site-page-header"
        title={ props.page }
        subTitle={ props.page }
      />
    </Header>
  )
}

export default HeaderComponent