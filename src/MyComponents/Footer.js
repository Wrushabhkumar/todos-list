// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3" >
      <p className="text-center mb-0">
        &copy; {new Date().getFullYear()} My Todos List. All rights reserved.
      </p>
      <p className="text-center mb-0">
        Developed by <a href="#" className="text-light">Wrushabhkumar</a>
      </p>
    </footer>
  )
}

export default Footer
