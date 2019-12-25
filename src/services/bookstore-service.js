export default class BookstoreService {
    data = [
            {
                id: 1,
                title: 'Effective Java',
                author: 'Joshua Bloch',
                price: 34,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41JLgmt8MlL._SX402_BO1,204,203,200_.jpg'
            },
{
    id: 2,
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    price: 21,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg'
},
{
    id: 3,
        title: 'Core Java',
    author: 'Cay S. Horstmann',
    price: 22,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41Brz5j2rKL._SX381_BO1,204,203,200_.jpg'
},
{
    id: 4,
        title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 57,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51d1qVhmAmL._SX373_BO1,204,203,200_.jpg'
}];


    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    if(Math.random() > 0.85) reject(new Error('error'));
                    resolve(this.data)},
                    1000);
        });
    }
}