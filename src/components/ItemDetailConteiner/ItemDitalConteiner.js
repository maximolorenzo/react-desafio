import { useState, useEffect } from "react"
import products from "../../utils/products"
import fetchProducts from "../../utils/fetchProduct"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const  ItemDitalConteiner = () => {

    const [listProduct , setListProduct] = useState({})
    const [loading , setLoading] = useState (true)

    const {id} = useParams ()
    useEffect (() =>{
        setLoading (true)
    fetchProducts (products)
        .then (res => {
            if(id) {
                setLoading(false)
                console.log(id);
                setListProduct(res.find (item => item.id == id ))
            }})
            
    } , [])
    
    
    return (
    <>
        {!loading ? <ItemDetail listProduct = {listProduct}/> : <p>cargando...</p> }
    </>
    )
}

export default ItemDitalConteiner