import React from 'react';

import {BookstoreServiceConsumer} from "../bookstore-service-context";

const WithBookStoreService = () => (Wrapped) => (props) => {
    return (
        <BookstoreServiceConsumer>
            {(bookstoreService) => <Wrapped {...props} bookstoreService={bookstoreService}/>}
        </BookstoreServiceConsumer>
    )
};

export default WithBookStoreService;
