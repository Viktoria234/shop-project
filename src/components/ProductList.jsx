import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ProductList = ({addToCart}) => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProduct = async() => {
            try{
                const querrySnapshot = await getDocs(collection(db, 'cables'));
                const productsData = querrySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsData);
            } catch (error){
                console.error('Ошибка на сервере', error)
            }
        }
        fetchProduct();
    }, [])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    }

    const filterProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery));

    return(
        <div className="products-container">
            <h1>Список товаров</h1>
            <input style={{padding:'3px', fontSize:'16px', width:'400px', marginTop: '20px'}} type='text' placeholder="Поиск товаров" value={searchQuery} onChange={handleSearchChange}/>
            <ul className="cards">
                {filterProducts.map((product) => (
                    <li className="card" key={product.id}>
                        <img src={product.image} alt='product.image'/>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}тг.</p>
                        <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;