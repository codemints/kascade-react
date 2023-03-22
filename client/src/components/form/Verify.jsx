import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
  const [hashParams, setHashParams] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const url = new URL(window.location)
    if ( !url.href.includes('access_token') ) return
    const paramsArray = url.hash.substring(1).split('&')

    const paramsLib = paramsArray.reduce((acc, param, index) => {
      const [key, value] = param.split('=')
      acc[key] = value
      return acc
    }, {})

    navigate('/dashboard')
  }, [])
}

export default Verify
