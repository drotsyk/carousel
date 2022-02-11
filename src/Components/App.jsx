import React,{ useState } from 'react';
import { Carousel } from './Carousel/Carousel'
import { InputNumber } from './InputNumber/InputNumber';
import { Welcome } from './Welcome/Welcome';
import { Routes, Route } from "react-router-dom";
import './App.css'

export const App = () => {
  const [number, setNumber] = useState(null);
  const [screens, getScreens] = useState(null)
  return <div>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="carousel" element={<Carousel number={number} screens={screens}/>} />
      <Route path="input" element={<InputNumber setNumber={setNumber} getScreens={getScreens}/>} />
    </Routes>
  </div>;
};
