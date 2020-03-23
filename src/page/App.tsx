import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './App.scss'

import SuspenseCom from '@component/suspense-component'

// Home页面
const Home = SuspenseCom('Home')
// error页面
const Errors = SuspenseCom('Errors')

const App: React.SFC = () => {
  return (
    <div className='home'>
      <BrowserRouter>
        <Route path='/' redirect component={ Home }/>
        <Route path='/error' exact component={ Errors }/>
        <Redirect from="/*" to="/frontend/Javascript"></Redirect>
      </BrowserRouter>
    </div>
  )
}
export default hot(App)
