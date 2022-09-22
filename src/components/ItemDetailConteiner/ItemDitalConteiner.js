import { useState, useEffect } from "react"
import products from "../../utils/products"
import fetchProducts from "../../utils/fetchProduct"
import ItemDetail from "../ItemDetail/ItemDetail"


const  ItemDitalConteiner = () => {

    const [listProduct , setListProduct] = useState({})
    const [loading , setLoading] = useState (true)


    useEffect (() =>{
        setLoading (true)
    fetchProducts (products)
        .then (res => {
            setLoading(false)
            setListProduct(res.find (item => item.id === 1))})
    } , [])
    
    
    return (
    <>
        {!loading ? <ItemDetail listProduct = {listProduct}/> : <p>cargando...</p> }
    </>
    )
}

export default ItemDitalConteiner