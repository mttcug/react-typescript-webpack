import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Errors from './Errors'

const App: React.SFC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={ Home}/>
        <Route path='/error' component={ Errors}/>
      </BrowserRouter>
    </div>
  )
}
export default hot(App)
