import React, { useContext, useEffect, useState } from 'react'
import { ContextApp } from '../context/Content'
import "./Cart.css"
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const navigate = useNavigate()  
  
  const {cartItem,addToCart,setCartItem} = useContext(ContextApp)

  const [totalAmount, setTotalAmount] = useState(0)
  
  //pre vypočet položiek v košíku ak sa pridavaju položky 
  useEffect(()=>{
    let total = 0

    cartItem.forEach((item)=>{
      total += Number(item.price * item.count)
    })
    setTotalAmount(total)
  },[cartItem])

  //Tlačidlo pre vymazanie produktu z košíka
  // tu sa deje aj to že ak sa pridaju nejaké veci do košíka tak sa po ich vymazaní mínusom odstrania z košíka
  const removeItem = (id) => {
  const updateCart =  cartItem.map((item)=>{
      if(item.id === id && item.count > 1){
        return{
          ...item,
          count: item.count - 1,
        }
      } else if (item.id === id && item.count <= 1){
        return null;
      }
      return item
    })

   const filterdCart = updateCart.filter((item)=> item !== null)

    setCartItem(filterdCart)
  } 




  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>
 {/* ak sa v košíku nič nenachadza tak v tej zmene to je že sa napíše Your Cart is empty a 
 ak tam niečo je tak sa zobrazia tie produkty */}
      {cartItem.length === 0 ? "Your Cart is empty!" : (
        <div className='cart-wrapper'>
        {//a ked sa klikne tak tlačidlo objednať jedlo tak to do košíka prida dané jedlo s vypísom informácií(cena,tlačidlo + -, nazov)
         //Tlačidlo pre vymazanie produktu z košíka
         cartItem.map((item)=>(
            <div key={item.id} className='cart'>
              <img src={item.image} alt="" className='image' />
              <div className="det">
                <p>{item.name}</p>
                <div className="add-remove-button"> 
                  <button onClick={()=>removeItem(item.id)}>-</button>
                  <input type="text" value={item.count}/>
                  <button onClick={()=>addToCart(item)}>+</button>
                </div>
                <p>${item.price}</p>
              </div>
            </div>
          ))
        }
        <p>Total Price ${totalAmount}</p>
    </div>
      )}  

     {/* ide o to ked tam sa nachadza niečo v košíku tak to vypíše tlačidlo check out
a ten druhy button sa stale zobrazuje */}

        <div className="buttons">
          {cartItem.length !== 0 && (<button className="check-out-btn">Check Out</button>)}
          <button onClick={()=>navigate("/")} className="back-btn">Continue Shopping</button>
        </div>
       
    </div>
  )
}

export default Cart



































