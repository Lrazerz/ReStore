const updateBookList = (state={},action) => {
    switch(action.type) {
        case 'FETCH_BOOKS_REQUEST': {
            return {
                ...state.bookList,
                books: [],
                loading: true,
                error: null
            };
        }
        case 'FETCH_BOOKS_LOAD': {
            return {
                ...state.bookList,
                books: action.payload,
                loading: false,
                error: null
            };
        }
        case 'FETCH_BOOKS_ERROR': {
            return {
                ...state.bookList,
                books: [],
                loading: false,
                error: action.payload
            };
        }
        default: {
            if(state.bookList === undefined) return {books: [], loading: true, error: false};
            return state.bookList
        }
    }
};

export default updateBookList;