import * as React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { Layout } from 'antd'
const { Content } = Layout
import './index.scss'
import SideComponent from '@page/Home/component/Sider'
import HeaderComponent from '@page/Home/component/Header'
import javascriptComponent from '@page/frontend/javascript'
import reactComponent from '@page/frontend/react'
import vueComponent from '@page/frontend/vue'

const Home: React.SFC = () => {

  const choosePot = (key) => {
    console.log('1')
  }

  return (
    <Layout>
      <SideComponent choosePot={ choosePot }/>
      <Layout>
        <HeaderComponent />
        <Content className='content'>
          <Switch>
            <Route path="/frontend/Javascript" exact component={ javascriptComponent }></Route>
            <Route path="/frontend/React" exact component={ reactComponent }></Route>
            <Route path="/frontend/Vue" exact component={ vueComponent }></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
