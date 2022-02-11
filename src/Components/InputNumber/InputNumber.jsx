import React,{useState} from 'react'
import { GetInfo } from './GetInfo'
import { Link } from 'react-router-dom'
import './InputNumber.css'

export const InputNumber = ({setNumber, getScreens}) => {
  const [divisions, setDivision] = useState(false)
  const [next, setNext] = useState(false)
  const [screens, onScreen] = useState(false)

  return (
    <div className='input__body'>
      <Link to='../'>
       <button className='input__back'>Back</button>
      </Link>
      {!next ? (
        <GetInfo next={next} setNext={setNext} setInfo={onScreen} pushInfo={getScreens} number={screens} text='How many slides will be in the slider?'/>
      ):(
        <GetInfo next={next} setNext={setNext} setInfo={setDivision} pushInfo={setNumber} link='carousel' number={divisions} screens={screens} text='How many division will be in slider?(standart 1)'/>
      )}
    </div>
  )
}
