import React, { useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/plants/')
        console.log('DATA', data)
      } catch (err) {
      }
    }
    getData()
  }, [])

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}

export default App;
