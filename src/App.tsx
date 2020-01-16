import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './page/Home'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' component={ Home}/>
                <Switch>
                    <Route exact ></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default hot(App)
