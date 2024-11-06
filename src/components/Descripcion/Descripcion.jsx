import React from 'react';
import './Descripcion.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
        <div className='div-descripcion-entera'>
            <div className='div-card-poster'>
                <h1>{producto.titulo}</h1>
                <img src={`/${producto.imagen}`} alt={"portada poster "+producto.titulo} />
                <h2>Detalles:</h2>
                <p>Precio: ${producto.precio}</p>
            </div>
            <div className='descripcion-producto'>
                <p>Descripción: {producto.descripcion}</p>
            </div>
            <button className='boton-comprar'>comprar</button>

        </div>
    )
}

export default Descripcion