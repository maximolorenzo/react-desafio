import ItemCount from "../ItemCount/ItemCount"


const ItemListConteinter = (props) => {
    return(
        <>
        <h1>{props.greetings}</h1>
        <ItemCount initial={1} stock={10} onAdd = {()=>{}} />
        </>
    )
}

export default ItemListConteinter