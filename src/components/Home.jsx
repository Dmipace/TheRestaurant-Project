import React from 'react'
import Pizza from '../assets/img/pizza-1.png'
const Home = () => {
  return ( 
    <div className="container">
      <div className="left">
        <div className="text-content">
          <h1>Pizzaiolo</h1>
          <p>From our oven to your table, nothing but the best</p>
          <button className='btn'>View Menu</button>
        </div>
        </div>
        <div className="right">
          <div className="image-container">
            <img src={Pizza} alt="" className="pizza" />
          </div>
        </div>
      </div>
  )
}

export default Home




























