export function addProductAction (newPoduct){
    return({
        type:"ADD_PRODUCT",
        payload: newPoduct
    })
}
export function UpdateProductAction (productItem){
    return({
        type:"MODIFY_PRODUCT",
        payload: productItem
    })
}
export function deleteProductAction (productId){
    return({
        type:"DELETE_PRODUCT",
        payload: productId
    })
}