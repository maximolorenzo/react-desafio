import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import products from "../../utils/products";
import fetchProducts from "../../utils/fetchProduct"
import { useState,useEffect } from "react";

const ItemListConteinter = (props) => {

    const [ listProduct , setListProduct] = useState([])
    const [loading , setLoading] = useState (true)

    useEffect (() => {
        setLoading (true)
        fetchProducts (products)
            .then (res =>{ 
                setLoading(false)
                setListProduct(res)
            })
    }, [] )

        return(
            <>
            <h1>{props.greetings}</h1>
            

            {!loading ? <div className="grid grid-cols-4 gap-4"><ItemList listProduct ={listProduct} /> </div> : <p>cargando...</p> }
           
            {/*<ItemCount initial={1} stock={10} onAdd = {()=>{}} />*/}
            </>
    )
}

export default ItemListConteinter