

import 'react-hot-loader'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// App组件
import App from '@page/App'
// antd样式引入
import 'antd/dist/antd.css'

const wrapper = document.getElementById('app')

ReactDOM.render(
  <App />,
  wrapper
)
