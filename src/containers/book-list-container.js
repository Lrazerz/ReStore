import React, {Component} from 'react';
import ErrorIndicator from "../components/error-indicator";
import BookList from '../components/book-list'

import WithBookStoreService from '../components/hoc';
import compose from "../utils";
import Spinner from '../components/spinner';

import {connect} from "react-redux";
import {fetchBooks, bookAddedToCart} from '../actions'


class BookListContainer extends Component {

    componentDidMount = () => {
        const {fetchBooks} = this.props;
        fetchBooks();
    };

    render = () => {
        const {books, loading, error, onAddedToCart} = this.props;

        if(loading) return <Spinner/>;
        if(error) return <ErrorIndicator/>;

        return (
            <BookList books={books} onAddedToCart={onAddedToCart}/>
        )
    };
}

const mapStateToProps = ({books, loading, error}) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default compose(WithBookStoreService(),connect(mapStateToProps, mapDispatchToProps))(BookListContainer);