import React,{useState} from 'react'
import './GetInfo.css'
import { Link } from "react-router-dom";

export const GetInfo = ({setInfo, next, pushInfo, screens, number, text, link, setNext}) => {
  const [defaultValue, setDefaultValue] = useState('')
  const [mistake, setMistake] = useState(false)
  const [mistakeMessage, setMessage] = useState('Error')
  const [canLink, setCanLink] = useState(false)

  function numberTest(e) {
    if(+e.target.value < screens) {
      setCanLink(true)
    } else {
      setCanLink(false)
    }
    setInfo(+e.target.value)
    setDefaultValue(e.target.value)
  }

  const checkValue = () => {
    if(number === false) {
      setMistake(true)
      setMessage('Enter numbers')
      return
    } 
    if(!(/^\d+$/).test(number) || +number < 1) {
      setMistake(true);
      setMessage('Only numbers and more than 1');
      return
    }
    if((/^\d+$/).test(number) && +number >= screens) {
      setMistake(true);
      setMessage('Divisions cannot be more than slides');
      setNext(true);
      setDefaultValue('');
      return
    }
    pushInfo(number);
    setDefaultValue('');
    setNext(!next);
  }

  return (
    <div className='getInfo'>
      <div className={mistake ? "getInfo__popUp getInfo__popUp--active" : "getInfo__popUp popUp"}>
        <div className='popUp__body'>
          {mistakeMessage}
          <button className='popUp__btn' onClick={() => {
            setMistake(false)
          }}>Ok</button>
        </div>
      </div>
      <label className='getInfo__title' htmlFor='getInfo__input'>{text}</label>
      <input className='getInfo__input' id='getInfo__input' type="text" value={defaultValue} 
        onChange={e => {
          numberTest(e)
        }}/>
      {link && canLink ? (
        <Link to={`/${link}`}>
        <button type='button' onClick={checkValue} className='getInfo__btn'>Enter2</button>
        </Link>
      ):(
        <button type='button' onClick={checkValue} className='getInfo__btn'>Enter1</button>
      )}
    </div>
  )
}
