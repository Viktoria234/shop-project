import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Contacts from "../components/Contacts";
import Cart from "../components/Cart";

const AppRouter = () => {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    })
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const toggleCart = () =>{
        setIsCartOpen(!isCartOpen);
    }

    const addToCart = (product) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productID) => {
        localStorage.removeItem('cart');
        setCart((prevCart) => prevCart.filter((product) => product.id !== productID))
    }

    return(
        <Router>
            <nav>
                <Link className="nav-link" to='/'>Главная</Link>
                <Link className="nav-link" to='/things'>Товары</Link>
                <Link className="nav-link" to='/contacts'>Контакты</Link>
                <button style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '42px'}} onClick={toggleCart}>
                    <svg style={{paddingBottom: '20px'}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg> ({cart.length})
                </button>
            </nav>
            {isCartOpen && <Cart removeFromCart={removeFromCart} toggleCart={toggleCart} cart={cart}/>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/things" element={<ProductList addToCart={addToCart}/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;