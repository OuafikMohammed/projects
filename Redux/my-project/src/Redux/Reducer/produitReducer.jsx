const initialState = {
    products: [
        {
        id:"1",
        designation:"PC",
        price:9000,
        quantite:10
        }
    ]
    
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRODUCT":

            console.log(action.payload)
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                )
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
}

export default productReducer;
