import { Suspense, SFC } from 'react'
import * as React from 'react'

// 传入组件名称，一般是在page文件夹下
const SuspenseCom = (name: string): SFC => {

  // 懒加载的组件
  const Component = React.lazy(() => import(`@page/${name}`))
  // loading 组件
  const loading = <div>loading...</div>

  // 返回一个suspense的函数组件
  return () => (
    <Suspense fallback={ loading }>
      <Component />
    </Suspense>
  )
}

export default SuspenseCom