import React,{useState,useEffect} from 'react';
import {CarouselItem} from '../CarouselItem/CarouselItem'
import { Link } from 'react-router-dom';
import './Carousel.css'

export const Carousel = ({number, screens}) => {
  const [activeIndex, setIndex] = useState(0)
  const [screensList, setScreens] = useState(false)

  const checkIndex = (index) => {
    if(index > screensList.length - number) {
      setIndex(0)
    }
    if(index <0) {
      setIndex(screensList.length- number)
    }
  }

  const getScreens = (v) => {
    setScreens(Array.from(Array(+v)).map((e,i)=>i+1))
  }

  useEffect(() => {
    checkIndex(activeIndex)
    getScreens(screens)
    return () => {
    }
  },[activeIndex, screens])

  return <div className='carousel' >
    <Link to="../input"><button className='carousel__back'>Back</button></Link>
    <div className="carousel__body">
      <button className='carousel__btn carousel__btn--right' onClick={() => {
        setIndex(activeIndex + 1)
      }}>&#8250;</button>
      <button className='carousel__btn carousel__btn--left' onClick={() => {
        setIndex(activeIndex - 1)
      }}>&#8249;</button>
      <div className="inner" style={{transform:`translate(-${activeIndex * (100/number)}%)`}}>
        {screensList !== false ? (
          <>
            {screensList.map((item,index) => (
              <CarouselItem key={index}  item={item} width={100/number} index={index}/>
            ))}
          </>
        ):null
        }
      </div>
    </div>
  </div>;
};
