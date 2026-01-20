//import css
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'

//import img en SRC
import logoReact from '../assets/react.svg'
import CartWigdet from './CartWidget'

const Navbar =()=>{
console.log('Navbar')
    return(
            <nav className='nav-container'>
                <NavLink className='anchor-nav' to="/">
                    {/* IMAGEN EN SRC */}
                    {/* <img src={logoReact} alt='logo' /> */}
                    {/* IMAGEN EN PUBLIC */}
                    <img src='../img/vite.svg' alt='logo' />
                </NavLink>
                <NavLink className='anchor-nav' to="/category/nuevos">Nuevos</NavLink>
                <NavLink className='anchor-nav' to="/category/ofertas">Ofertas</NavLink>
                <NavLink className='anchor-nav' to="/category/mas vendidos">Mas Vendidos</NavLink>
                <CartWigdet/>
            </nav>
    )
}

export default Navbar