import React from "react";
import '../styles/Cart.css'

const Cart = ({removeFromCart, toggleCart, cart}) => {
const totalPrice = cart.reduce((total, product) => total + (+product.price), 0)
    return(
        <div className="cart-overlay">
            <div className="cart-container">
                <button onClick={toggleCart}>Закрыть</button>
                <h2>Ваша корзина</h2>
                {cart.length === 0 ? (
                    <p style={{paddingTop: '20px'}}>Корзина пуста</p>
                ): (
                    <ul className="cart-inner">
                        {cart.map((product) => (
                            <li className="cart-product" key={product.id}>
                                <h3>{product.name}</h3>
                                <img width='100px' src={product.image} alt='product.image'/>
                                <p>Цена: {product.price}тг.</p>
                                <button onClick={() => removeFromCart(product.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Общая стоимость: {totalPrice}тг.</h3>
            </div>
        </div>
    )
}

export default Cart;