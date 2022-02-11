import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

export const Welcome = () => {
  return (
    <div className='welcome'>
      <h1 className='welcome__title'>Welcome to custom carousel </h1>
      <Link to="input"><button className='welcome__btn'>Let`s start</button></Link>
    </div>
  )
}
