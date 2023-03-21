import { useState, useEffect } from 'react'

const Verify = () => {
  const [hashParams, setHashParams] = useState([])

  useEffect(() => {
    const params = new URL(window.location).hash.substring(1)
    const paramsArray = params.split('&')
    setHashParams(paramsArray)
  }, [])

  return (
    <div>
      { hashParams && hashParams.map((param, index) => (
        <p style={{color: 'white', fontSize: '12px'}} key={index}>{param}</p>
      ))}
    </div>
  )
}

export default Verify
