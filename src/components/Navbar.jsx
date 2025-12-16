//import css
import '../css/Navbar.css'


//import img en SRC
import logoReact from '../assets/react.svg'
import CartWigdet from './CartWidget'

const Navbar =()=>{
console.log('Navbar')
    return(
            <nav className='nav-container'>
                <a className='anchor-nav' href="">
                    {/* IMAGEN EN SRC */}
                    {/* <img src={logoReact} alt='logo' /> */}
                    {/* IMAGEN EN PUBLIC */}
                    <img src='../img/vite.svg' alt='logo' />
                </a>
                <a className='anchor-nav' href="">Nuevos</a>
                <a className='anchor-nav' href="">Ofertas</a>
                <a className='anchor-nav' href="">Mas Vendidos</a>
                <CartWigdet/>
            </nav>
    )
}

export default Navbar