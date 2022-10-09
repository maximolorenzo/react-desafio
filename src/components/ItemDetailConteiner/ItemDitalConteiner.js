import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase" 
import {doc, getDocs, collection} from "firebase/firestore"

const  ItemDitalConteiner = () => {

    const [listProduct , setListProduct] = useState(null)
    const [loading , setLoading] = useState (true)

    const {id} = useParams ()

    useEffect (() =>{
        setLoading (true)
        const productsCollection = collection(db, "products")
        const refDoc = doc.get(productsCollection,id)
        console.log(id);
        getDocs(refDoc)
        .then((result) => {
            return setListProduct({
                id: result.id,
                ...result.data()
            })
        })
        .cath((e) => {
            console.log(e);
        })
        .finally(() => { 
            setLoading(false) 
        })
        
    }, [id])

    
    return (
    <>
        {loading || !listProduct ? <p>cargando...</p> :<ItemDetail listProduct = {listProduct}/>  }
    </>
    )
}

export default ItemDitalConteiner