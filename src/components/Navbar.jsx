import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ChatApp</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;