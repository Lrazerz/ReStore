const updateCartItem = (book, item = {}, quantity = 1) => {
    const {id = book.id, title = book.title, count = 0, totalPrice = 0} = item;

    return {id, title, count: count+quantity, totalPrice: totalPrice+quantity*book.price};
};

const updateCartItems = (cartItems, cartItem, idx) => {

    // add if have no such item
    if(idx === -1) {
        return [
            ...cartItems,
            cartItem
        ];
    }
    if(cartItem.count < 1) {
        return [
            ...cartItems.slice(0,idx),
            ...cartItems.slice(idx+1)
        ]
    }
    return [
        ...cartItems.slice(0,idx),
        cartItem,
        ...cartItems.slice(idx + 1)
    ]
};

const updateOrder = (state,bookId, quantity = 1) => {
    const {bookList: {books},shoppingCart: {cartItems}} = state;
    const book = books.find(({id}) => id === bookId);
    const cartItemIndex = cartItems.findIndex(({id}) => id === bookId);
    let cartItem = cartItems[cartItemIndex];
    cartItem = updateCartItem(book, cartItem, quantity);

    return {
        ...state.shoppingCart,
        cartItems: updateCartItems(cartItems, cartItem, cartItemIndex)
    };
};

const updateShoppingCart = (state={}, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'BOOK_ADDED_TO_CART': {
            return updateOrder(state,payload);
        }
        case 'BOOK_REMOVED_FROM_CART': {
            return updateOrder(state,payload,-1);
        }
        case 'ALL_BOOKS_REMOVED_FROM_CART': {
            // we also can use updateOrder() with quantity = -cartItem.count
            const {shoppingCart: {cartItems}} = state;
            const cartItemIndex = cartItems.findIndex(el => el.id === action.payload);
            return {
                ...state.shoppingCart,
                cartItems: [...cartItems.slice(0,cartItemIndex),...cartItems.slice(cartItemIndex + 1)]
            };
        }
        default: {
            if(state.shoppingCart === undefined) return {cartItems: []};
            return state.shoppingCart
        }
    }
};

export default updateShoppingCart;