import React from "react"
import NavBar from "../NavBar/NavBar"
import './404.css'

function Error () {
    return(
       <main>
            <NavBar/>
            <div className='error'>
                <img src="/img/error.png" alt="" />
            </div>
        </main> 
    )
    
}
export default Error