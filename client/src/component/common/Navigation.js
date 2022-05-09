import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  
  const handleMenuToggle = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    setIsActive(true)
  }, [])


  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">🌺
          <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <span><Link to="/plants/" onClick={handleMenuToggle}></Link>
            </span>
          </div>
          <div className="navbar-start">
            <div>
              <Link to="/plants" className="navbar-item"></Link>
            </div>
          </div>
          <div className="navbar-end">
              <>
                <div className="buttons">
                  <Link className="button is-dark" to="/home">
                    Home
                  </Link>
                  <Link to="/plants" className="navbar-item">Plants</Link>
                </div>
                <Link className="button is-dark" to="/register">
                  Register
                </Link>
                <Link className="button is-dark" to="/login">
                  Log in
                </Link>
              </>
          </div>
        </div>
      </div>
    </nav>

  )

}


export default Navigation
