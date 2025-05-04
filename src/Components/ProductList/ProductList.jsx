import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../services/products'
import './ProductList.css'



const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    //Use state sirve para controlar la recarga de un componente
    //Use effect sirve para controlar la recarga de una funcion (o efecto)

    const getProductsList = async () => {
        setLoading(true)
        //El setTimeout no es necesario
        setTimeout(
            async () => {
                const products_list_response = await getProducts()
                if (products_list_response) {
                    setProducts(products_list_response)
                }
                else {
                    setError('Error al obtener productos')
                }
                setLoading(false)
            },
            2000
        )

    }

    useEffect(
        () => {
            getProductsList()
        },
        []
    )

    let isAdmin = true
    const div_props = {
        className: isAdmin ? 'caja-administrador' : 'caja',
        id: 'caja-especial'
    }

    /* Don react nos pide que cada elemento de la lista a renderizar tenga una prop llamada key */
    /* const componentes = [
        <ProductCard {...products[0]} key={products[0].id}/>,
        <ProductCard {...products[1]} key={products[1].id} />,
        <ProductCard {...products[2]} key={products[2].id}/>
    ]
     */






    //EL objetivo seria crear el array de componentes de forma automatica
    const componentes = products.map(
        (product) => {
            console.log('me ejecuto', product)
            return <ProductCard 
                {...product}
                final_price={product.price}
                real_price={product.price * 1.2}
                discount={20}
                img={product.image}
                key={product.id}
                title={product.title}
                is_admin={isAdmin}
            />
        }
    )
    let content
    if (loading) {
        content = <h2>Cargando...</h2>
    }
    else {
        if (error) {
            content = <h2>{error}</h2>
        }
        else {
            content = componentes
        }
    }

    return (
        <div {...div_props}>
            {/* <ProductCard 
                img={producto1.img} 
                title={producto1.title}
                final_price={producto1.final_price}
                real_price={producto1.real_price}
                discount={producto1.discount}
            /> }
            {/* <ProductCard {...producto1}/>
            <ProductCard {...products[1]}/>
            <ProductCard {...products[2]}/> */}

            {content}

        </div>
    )
}
/* Principio DRY: Dont repeat yourself */


export default ProductList