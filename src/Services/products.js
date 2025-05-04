export const getProducts= async() => {
    try{
        const response= await fetch("https://fakestoreapi.com/products",
            {
                method : "get"
            }
        )
        const data=await response.json()
        return data
    }
    catch(error){
        console.error("Error fetching products:", error)
        return null
    }
    }
    export const getProductById = async ({product_id}) => {
        const  products = await getProducts()
        return products.find(product => product.id == product_id)
    }
    export const getProductsByCategory = async ({category}) => {
        const  products = await getProducts()
        return products.filter(product => product.category == category)
    }