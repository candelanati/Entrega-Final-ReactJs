/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const CartContext = createContext(null)

const CartProvider = ({children}) =>{
    const [itemsCarrito, setItemsCarrito] = useState([])

    const agregarCarrito = (item) =>{
        if(item.cantidad == 0 && !itemsCarrito.some(user => user.id === item.id))
            setItemsCarrito ((prevItems) => [...prevItems, item])
    }

    const borrarItem = (item) =>{
        setItemsCarrito ((prevItems) => 
            prevItems.filter(el => el.id !== item.id)
        )
    }

    const borraCarrito =()=>{
        setItemsCarrito([])
    }

    const value = {
        itemsCarrito,
        setItemsCarrito,
        agregarCarrito,
        borrarItem,
        borraCarrito
    }

    // console.log(itemsCarrito)

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider