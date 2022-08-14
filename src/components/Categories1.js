import React from 'react'
import "./Componentcss.css"

function Categories1({item}) {
  return (
    <div key={item.id} className="category-item">
        <img src={item.img} className='category-img' alt='category'></img>
        <div className='category-info'>
            <h1 className='category-title'>{item.title}</h1>
            <button className='category-button'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Categories1