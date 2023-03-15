import { useEffect, useState } from 'react'
// useEffect / side Effect

const ApiCall = () => {

  const [api, setApi] = useState([])
  console.log('Before API call: ', api)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/user`)
      .then((response) => response.json())
      .then((data) => {
        setApi(data)
        console.log("After API call", data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>API Call</h1>
      <ol>
        {api.map((post) => {
          return (
            <li key={post.id}>{post.title}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default ApiCall
