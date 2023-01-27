import styles from './BookCard.module.css'
import {Link} from 'react-router-dom';
import {AddToWishlist} from '../Wishlist/AddToWishlist';
import {BookCover} from '../Elements/BookCover';

export const BookCard = ({book}) => (
    <Link to={`/livres/${book.id}`} className={styles.card}>
        <BookCover id={book.isbn} />
        <h3>{book.title}</h3>
        <p>Auteur⋅rice : {book.author}</p>
        <p className={styles.grow}>Isbn : {book.isbn}</p>

        <AddToWishlist id={book.id} className={styles.wishlist}/>
    </Link>
);
