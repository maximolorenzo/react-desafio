import { useState } from "react";

const ItemCount = ({initial , stock, onAdd}) => {
    const [ count , setCount] = useState(initial)
    
    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)
    return (
        
        <div className="flex ">
        <div className="m-5">
        <button className=' pl-3 pr-3 border-2 rounded-full text-blue-500 text-2xl uppercase font-bold ' onClick={decrease}> - </button>
        </div>
        <div className="m-5">
        <h1 className="text-2xl">{count}</h1>
        </div>
        <div className="m-5">
        <button className=' pl-2 pr-2 border-2 rounded-full text-blue-500 text-2xl uppercase font-bold ' onClick={increase}>+</button>
        </div>
        <div className="m-5">
        <button className='p-1 bg-blue-500 rounded-md'> Agregar al carrito  </button>
        </div>
        </div>
        
    )
}
export default ItemCount