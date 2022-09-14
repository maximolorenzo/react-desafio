

const fetchProducts = (products) => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=> {
            resolve(products)
        },2000)
    })
}
export default fetchProducts