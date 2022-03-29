import React from 'react'
import { Link } from 'react-router-dom'


function Close() {
  const close = () =>{
    document.getElementById('navbar').classList.remove('active')
  }

  return (
    <Link to="#" id="close"><i className="fa-solid fa-xmark"onClick={close} /></Link>
  )
}

export default Close