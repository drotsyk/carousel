import React from 'react';
import './CarouselItem.css'

export const CarouselItem = ({item,width}) => {
  return <div className='carouselItem' style={{width:`${width}%`}}>
    {item}
  </div>;
};
