import { useState } from 'react'

import { Count } from './Count'
import { Decrement } from './Decrement'
import { Increment } from './Increment'

export function Counter() {
  // setState, states, props, passing data/function through props
  // props --> Passing down data
  // state --> to that component
  const [data, setData] = useState(0)

  return (
    <main>
      <Count count={data} />
      <Increment count={data} updateData={setData} />
      <Decrement count={data} updateData={setData} />
    </main>
  )
}


