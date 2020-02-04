import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route } from 'react-router-dom'
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
        <Route path='/' exact component={ Home }/>
        <Route path='/error' component={ Errors }/>
      </BrowserRouter>
    </div>
  )
}
export default hot(App)
