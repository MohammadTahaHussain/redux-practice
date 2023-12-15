const initialState = {
    products: [
        {
            id: 1,
            title: 'Xyz',
            price: 606,
            qty: 1
        }
    ]
};

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             let x = state.ids
//             let find = x.find(item => action.payload === item)
//             if (!find) {
//                 x.push(action.payload)
//             }
//             console.log("Mai bhi chal gaya", x)
//             return {
//                 ...state,
//                 ids: [...x],
//             };
//         // Add other cases for different actions if needed
//         default:
//             return state;
//     }
// };



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let x = state.products
            let find = x.find((item) => item.id == action.payload.id)
            if (!find) {
                x.push(action.payload)
            } else {
                let index = x.findIndex((item) => item.id == action.payload.id)
                x[index].qty = x[index].qty + 1 || 1
            }
            return {
                ...state,
                products: [...x],
            };
        // Add other cases for different actions if needed
        default:
            return state;
    }
};


export default rootReducer;
