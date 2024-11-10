/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const CartContext = createContext(null)

const CartProvider = ({children}) =>{
    const [itemsCarrito, setItemsCarrito] = useState([])

    
    const borrarItem = (item) =>{
        setItemsCarrito ((prevItems) => 
            prevItems.filter(el => el.id !== item.id)
        )
    }

    const agregarCarrito = (item) =>{
        if(item.cantidad == 0) {
            if(!itemsCarrito.some(user => user.id === item.id)){
                setItemsCarrito ((prevItems) => [...prevItems, item])
            }
        }
    }

    const borraCarrito =()=>{
        setItemsCarrito([])
        itemsCarrito.map( (item) => item.cantidad = 0 )
    }

    const value = {
        itemsCarrito,
        setItemsCarrito,
        agregarCarrito,
        borrarItem,
        borraCarrito
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider