import React from 'react'

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top text-center">
        <div className="container">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
          EasyRent
        </div>
      </div>
    </footer>
  )
}
