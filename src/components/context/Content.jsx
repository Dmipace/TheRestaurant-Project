import React from 'react'
import { createContext, useState } from 'react'

export const ContextApp = createContext(null);
const Content = (props) => {

    //Vytvorenie tlačidla na nakupovanie.

    const [cartItem, setCartItem] = useState([])  
    const [added, setAdded] = useState(null)  //Zmena textu po pridaní položky
    const addToCart = (dish, key) => {
        //console.log(dish)

        setTimeout(()=>{
          setAdded(null)
        },1000)
        setAdded(key)
        const exItem = cartItem.find((item)=>item.id === dish.id)

        if(exItem){
            setCartItem((prev)=> prev.map((item)=> item.id === dish.id ? {...item, count: item.count +1} : item))
        }else{
            setCartItem([...cartItem, {...dish, count: 1}])
        }
    }

    const values = {addToCart, cartItem, setCartItem, added}
  return (
    <ContextApp.Provider value={values}>{props.children}</ContextApp.Provider>
  )
}

export default Content


























