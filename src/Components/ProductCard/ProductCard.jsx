import React, { useState } from "react"
import { Link } from "react-router-dom"
import './ProductCard.css'

const ProductCard = ({ id, img, title, final_price, real_price, discount, isadmin }) => {
    const [isBought, setIsBought] = useState(false);

    const handleClickBuyButton = () => {
        alert("¡Gracias por su compra!");
        setIsBought(true);
    };

    return (
        <div className="product-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className="price-info">
                <span className="real-price">${real_price}</span>
                <span className="discount">{discount}% OFF</span>
            </div>
            <span className="final-price">${final_price}</span>
            {isBought ? (
                <button disabled>Comprado</button>
            ) : (
                <button onClick={handleClickBuyButton}>Comprar</button>
            )}
            <Link to={`/product/${id}`}>Ver detalle</Link>
        </div>
    );
};

export default ProductCard