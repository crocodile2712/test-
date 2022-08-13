import React from 'react'
import "./Componentcss.css"
function Slider() {
  return (
    <div className='slider'>
        <div className='slider-items'>
            <img src="https://i.ibb.co/cXFnLLV/3.png" className="slider-img"></img>
        </div>
        <div className='slider-items'>
            <h1 className='slider-header'>LOUNGEWEAR LOVE</h1>
            <p className='slider-des'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <button className='slider-button'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Slider