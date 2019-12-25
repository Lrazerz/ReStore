const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksLoaded = ( newBooks ) => {
    return {
        type: 'FETCH_BOOKS_LOAD',
        payload: newBooks
    }
};

const booksError = ( error ) => {
    return {
        type: 'FETCH_BOOKS_ERROR',
        payload: error
    }
};


const fetchBooks = (dispatch,bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};


const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}


export {fetchBooks,bookAddedToCart};