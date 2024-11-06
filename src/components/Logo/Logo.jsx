import { Link } from 'react-router-dom'
import './Logo.css'

function Logo(){
    return (
        <>
            <div className='div-logo'>
                <Link to="/"><img  src=" ../../../public/img/logos-16.png" alt="" className='foto-logo'/></Link>
            </div>
        </>
    )
}

export default Logo