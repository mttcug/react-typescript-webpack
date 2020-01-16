import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './page/Home'
import Errors from './page/Errors'

const App = () => {
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
