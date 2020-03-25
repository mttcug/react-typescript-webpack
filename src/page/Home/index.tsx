import * as React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { Layout } from 'antd'
const { Content } = Layout
import './index.scss'
import SideComponent from '@page/Home/component/Sider'
import HeaderComponent from '@page/Home/component/Header'
import javascriptComponent from '@page/Frontend/javascript'
import reactComponent from '@page/Frontend/react'
import vueComponent from '@page/Frontend/vue'
import { IHomeProps, IHomeStates } from '@type/home'

class Home extends React.Component<IHomeProps, IHomeStates> {

  constructor (props) {
    super(props)
    this.state = {
      currentPage: ''
    }
  }

  choosePot = (key: string) => {
    this.setState({
      currentPage: key
    })
  }

  render () {
    return (
      <Layout>
        <SideComponent choosePot={ this.choosePot } />
        <Layout>
          <HeaderComponent page={ this.state.currentPage } />
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
}

export default Home
