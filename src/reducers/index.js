const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: '$120'
};


const reducer = (state = initialState, action) => {

    console.log('reducer works',action, state.books);

    switch (action.type) {

        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_LOAD':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_ERROR':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };

        case 'BOOK_ADDED_TO_CART':
            const addedBookId = action.payload;

            // item from books
            const item = state.books.find(el => el.id === addedBookId);

            // either index or -1
            const cartItemIndex = state.cartItems.findIndex(el => el.id === item.id);

            // either item of undefined
            let cartItem = state.cartItems[cartItemIndex];

            if(cartItem) {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0,cartItemIndex), // from 0 to cartItem without cartItem
                        {
                            ...cartItem,
                            count: cartItem.count + 1,
                            totalPrice: cartItem.totalPrice + item.price
                        },
                        ...state.cartItems.slice(cartItemIndex + 1) // to end
                    ]
                }

            }
            else {
                cartItem = {
                    id: item.id,
                    title: item.title,
                    count: 1,
                    totalPrice: item.price
                };

                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        cartItem
                    ]
                };
            }



        default:
            return state;




    }
};

export default reducer;