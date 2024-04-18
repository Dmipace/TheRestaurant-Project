import React, { useEffect, useState, useRef, useContext } from 'react'
import data from "../data/data.json"
import {motion} from "framer-motion"
import {AiOutlineCheck} from '@react-icons/all-files/ai/AiOutlineCheck'
import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose'
import { ContextApp } from './context/Content'
const Menu = () => {

 let menu = Object.getOwnPropertyNames(data);
 const [selected,setSelected] = useState(0)
 const [selectedDish, setSelectedDish] = useState("pizza")
 const [width, setWidth] = useState(0)      // to je na ten posun pri motion
 const slide = useRef(null)
 const innerSlide = useRef(null)


 const {addToCart, cartItem,added} = useContext(ContextApp)
 useEffect(()=>{     
    data[selectedDish].forEach((item)=>{
        item.id = item.id + item.name[0] + item.name[1]
    }) // to je na ten posun pri motion
    setWidth(slide.current.scrollWidth - slide.current.offsetWidth)
    setTimeout(()=>{
        innerSlide.current.style.transform = "translateX(0)"
    },5)
 },[selectedDish])

 console.log(cartItem)

// to je na ten posun pri motion
 const handleClick = (item,key) =>{
    setSelected(key)
    setSelectedDish(item)
    setTimeout(()=>{
        innerSlide.current.style.transform = "translateX(0)"
    },5)
 }
 //vypsiovanie dat do stránky
  return (
    <div className="wrapper">
        <h1 className="title">Menu</h1>
            <div className="menu-list-wrapper">
                <div className="menu-list">
                    {
                        menu.map((item, key)=> (    //Po kliknutí sa vyznačí cele  červeným vyplnením
                           <div 
                           key={key}
                           onClick={()=>handleClick(item,key)} 
                           className={selected === key ? "item-container active" : "item-container"}>
                            <p>{item}</p>
                           </div>
                        ))
                    }
                </div> 
                {/* a toto zobrazí dané položky po klikntí čiže jeho fotky s informaciami +  motion s divmni */}
                <div className="food-wrapper"> 
                    <motion.div ref={slide} whileTap={{cursor: "grabbing"}} className="pizza-wrapper">
                        <motion.div drag="x" dragConstraints={{right:width, left: -width}} className="pizza-container" ref={innerSlide}>
                            {data[selectedDish].map((dish,key)=>(
                                <motion.div key={dish.id} className="pizza-img-container">
                                    <motion.img className='pizza-img' src={dish.image} alt="" />
                                    <h4 className="name">{dish.name}</h4>
                                    <p className="description">{dish.description}</p>
                                    <div className='details'>
                                        <p> spicy:{dish.spicy ?  <AiOutlineCheck style={{color: "green"}}/> : <AiOutlineClose style={{color: "red"}}/>}  </p>
                                        <p> vegetarian:{dish.vegetarin ? <AiOutlineCheck style={{color: "green"}}/> : <AiOutlineClose style={{color: "red"}}/>} </p>
                                      
                                    </div>
                                    <button onClick={()=>addToCart(dish, key)} className="btn btn-add">Add To Cart
                                    {added === key ? "Added" : "Add To Cart"}
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
    </div>
  )
}

export default Menu







































