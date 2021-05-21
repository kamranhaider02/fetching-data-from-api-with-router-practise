import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
        <div className="brand">
        <Link to="/">Logo</Link>
        </div>
      <div className="menus">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/topheadlines">Top headlines</Link>
      <Link to="/LastMonthNews">Last Month News</Link>
      </div>
    </div>
  )
}

export default Header
