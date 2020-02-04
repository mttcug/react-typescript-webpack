import { Suspense, SFC } from 'react'
import * as React from 'react'

const SuspenseCom = (name: string): SFC => {

  const Component = React.lazy(() => import(`@page/${name}`))
  const loading = <div>loading...</div>

  return () => (
    <div>
      <Suspense fallback={ loading }>
        <Component />
      </Suspense>
    </div>
  )
}

export default SuspenseCom