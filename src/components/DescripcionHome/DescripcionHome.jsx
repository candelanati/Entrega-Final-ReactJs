import React from "react"
import Descripcion from "../Descripcion/Descripcion"
import NavBar from "../NavBar/NavBar"

function DescripcionHome () {
    return(
       <main>
            <NavBar/>
            <div className='cards-espacio'>
                <Descripcion/>
            </div>
        </main> 
    )
    
}
export default DescripcionHome