import React from 'react';
import './Filtro.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductBox } from '../Card/Card';
import { getDocs } from 'firebase/firestore';
import BBDD from "../../config/firebase";
import { collection } from 'firebase/firestore';

function Filtro (){
    const path = useParams()
    const filtro = path.color

    const [data, setData] = useState([])

    useEffect(() => {
        const collectionsRef = collection(BBDD.db, "productos");
        getDocs(collectionsRef).then((snaps)=> {
            const { docs } = snaps
            const list = docs.map((doc) => ({...doc.data(), id:doc.id}))
            const filtrados = list.filter((p) => p.color === filtro)
            setData(filtrados)
        })
    }, [filtro]);

    if(data.length===0){
        return(
            <p className="loading">Cargando...</p>
        )
    }


    return(
        <>
            {data && data.map((producto)=>{
                return(
                    <ProductBox key={producto.id} producto={producto}></ProductBox>
                )
            })} 
        </>
    );
}
export default Filtro