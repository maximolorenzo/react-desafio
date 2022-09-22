import React from 'react'


const ItemDetail =({listProduct}) => {
    console.log (listProduct)
let numeroKey = 1
  return (
    <>
    <div className='grid grid-cols-2'>
        <div>
            <img className='w-auto' src={listProduct.image} alt="" />
        </div>
        <div className=''>
            <div className='text-3xl font-bold mb-5' >{listProduct.product}</div>
            <p className='text-3xl font-bold mb-5'>Precio</p>
            <div className='text-3xl font-bold mb-5' >{listProduct.price} USD</div>
            <p className='text-3xl font-bold mb-5'>Talles</p>
            <div className='flex justify-start gap-2 justify-items-center '>{listProduct.talles.map((talles) => (<button className='bg-transparent w-8  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent rounded' key={numeroKey++}>{talles}</button>))}</div>
            <button class=" w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
  Comprar
</button>
        </div>
        
    </div>
    
    </>
    
  )
}

export default ItemDetail