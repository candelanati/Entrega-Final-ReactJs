import React, { useContext, useEffect, useState } from "react";
import "./Cart.css"
import {CartContext} from "../Context/CartContext"

function Cart (){
    const {itemsCarrito, borraCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)

    // console.log('ITEMS CARRITO\n')
    // console.log(itemsCarrito)
    // console.log('---------------\n')

    useEffect(()=>{
        setCantidad(itemsCarrito.length)
    },[itemsCarrito])
    
    if(cantidad >= 1) {
        return(
            <>
                <div className='ticket-class'>
                    <p>* * * Ticket de pedido * * *</p>
                    <hr />
                    <p>{cantidad} items en total</p>
                    <br />
                    {itemsCarrito.map(el => {
                        return <p key={el.id}>{el.titulo} <span className="cuadro-color">({el.color})</span> x{el.cantidad}</p>
                    }) }
                    <hr className="hr-borra-carrito-boton"/>
                    <div className="carrito-botones-continuar">
                        <button className="comprar">comprar</button>
                        <button onClick={borraCarrito} className="borra-carrito-boton">borrar carrito</button>
                    </div>
                </div>
            </>
        )
    }
    
    return(
        <>
            <div className='ticket-class'>
                <p>* * * Ticket de pedido * * *</p>
                <hr />
                <p>{cantidad} items en total</p>
                <br />
                
            </div>
        </>
    )
}

export default Cart