import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/products'
import Navbar from '../../Components/Navbar/Navbar'
import './ProductDetailScreen.css'
const ProductDetailScreen = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [Error, setError] = useState(false)
    const {product_id} = useParams()

     const getProductDetail = async () => {
            setLoading(true)
            setTimeout(
                async () => {
                    console.log({product_id})
                    const product_detail_response = await getProductById({product_id})
                    console.log({product_detail_response})
                    if (product_detail_response) {
                        setProduct(product_detail_response)
                    }
                    else {
                        setError('Error al buscar producto')
                    }
                    setLoading(false)
                },
                2000
            )
    
    }

    useEffect(
        () => {
            getProductDetail()
        },
         
    )
    console.log({product})
    let content
    if(loading){
        content = <h2>Cargando...</h2>
    }
    else if(!loading && !product){
        content = <div>No encontrado</div>
    }
  return ( <div>
    <Navbar />
    {product && (
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    )}
  </div>
);
};



  
  
  
  
  



export default ProductDetailScreen