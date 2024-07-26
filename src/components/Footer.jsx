import React from 'react'

const Footer = () => {
  return (
    <footer className="flex text-white flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6 mx-40">
    <p className="text-normal text-muted-foreground">© 2024 Acme Inc. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <a className="text-normal hover:underline underline-offset-4" href="#">
        Terms of Service
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#"></a>
    </nav>
  </footer>
  )
}

export default Footer