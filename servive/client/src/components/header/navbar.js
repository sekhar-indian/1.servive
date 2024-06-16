import './navbar.css';
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className='navbar-container'>
            <h className='navbar-heading'>Survive..</h>
            <div className='nav-bar-item'><Link className='a' to='/'>HOME</Link></div>
            <div className='nav-bar-item'><Link className='a' to='/products'>PRODUCTS</Link></div>
            <div className='nav-bar-item'><Link className='a' to='/vochers'>VOCHERS</Link></div>
            <div className='nav-bar-item'><Link className='a' to='/login'><button className='nav-buttons'>LOGIN</button></Link><Link className='a' to='/signup'><button className='nav-buttons'>SIGNUP</button></Link></div>
            <div className='nav-bar-item navbar-img-container'><Link href='/cart'><img  className='navbar-img' src='https://res.cloudinary.com/muni/image/upload/v1718189347/SURVIVE/download__1_-removebg-preview-removebg-preview_o8cz7v.png'></img></Link></div>
        </div>
    )
}

export default Navbar;