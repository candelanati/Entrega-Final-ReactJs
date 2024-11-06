import React from 'react';
import './Descripcion.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ButtonAddCart from '../ButtonAddCart/ButtonAddCart.jsx'

function Descripcion (){
    const path = useParams()
    const idProducto = parseInt(path.id)
    

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/productos.json')
        .then((res) => res.json())
        .then((data) => {
            
            setData(data.Productos);
        })
        .catch((error) => console.error('Error al cargar el JSON:', error));
    }, []);
    
    const producto = data.find((p) => p.id === idProducto);
    
    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }
    return(
        <>
        <div className='div-titulo'>
            <h1 className='titulo-descripcion'>{producto.titulo}</h1>
        </div>
        <div className='div-descripcion-entera'>
            
            <div className='div-card-poster'>
                
                <img src={`/${producto.imagen}`} alt={"portada poster "+producto.titulo} />
                
            </div>
            <div className='info-descripcion-producto'>
                <h2>Detalles:</h2>
                <p>Precio: ${producto.precio}</p>
                <div className='descripcion-producto'>
                    <p>Descripción: {producto.descripcion}</p>
                </div>
                <ButtonAddCart/>
            </div>
            

        </div>
        </>
        
    )
}

export default Descripcion