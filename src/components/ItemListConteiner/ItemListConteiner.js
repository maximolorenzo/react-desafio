import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import products from "../../utils/products";
import fetchProducts from "../../utils/fetchProduct"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListConteinter = (props) => {

    const [ listProduct , setListProduct] = useState([])
    const [loading , setLoading] = useState (true)
    
    const {category} = useParams ()

    useEffect (() => {
        
        setLoading (true)
        fetchProducts (products)
            .then (res =>{
                 
                if (category) {
                    
                    setListProduct(res.filter (produ => produ.category === category))
                    setLoading(false)
                }else {
                    setListProduct(res)
                    setLoading(false)
                }
            })
    }, [category] )

        return(
            <>
            <h1>{props.greetings}</h1>
            

            {!loading ? <div className="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 gap-4"><ItemList listProduct ={listProduct} /> </div> : <p>cargando...</p> }
           
            {/*<ItemCount initial={1} stock={10} onAdd = {()=>{}} />*/}
            </>
    )
}

export default ItemListConteinter