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
import { IHomeProps, IHomeStates } from '@type/home'

// const Home: React.SFC = () => {

//   let currentPage: string = ''

//   const choosePot = (key: string) => {
//     currentPage = key
//     console.log('currentPage:', key, '222:', currentPage)
//   }

//   return (
//     <Layout>
//       <SideComponent choosePot={ choosePot } />
//       <Layout>
//         <HeaderComponent page={ currentPage } />
//         <Content className='content'>
//           <p>{ currentPage }</p>
//           {/* <Switch>
//             <Route path="/frontend/Javascript" exact component={ javascriptComponent }></Route>
//             <Route path="/frontend/React" exact component={ reactComponent }></Route>
//             <Route path="/frontend/Vue" exact component={ vueComponent }></Route>
//           </Switch> */}
//         </Content>
//       </Layout>
//     </Layout>
//   )
// }

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
