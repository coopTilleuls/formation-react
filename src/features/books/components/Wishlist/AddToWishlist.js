import styles from './AddToWishlist.module.css';
import {useUserContext} from '../../../../contexts';

export const AddToWishlist = ({ className, id }) => {
    const {wishlist, toggleInWishlist} = useUserContext();
    const isInWishlist = wishlist.includes(id);

    const handleWishListClick = (e, id) => {
        e.preventDefault();
        toggleInWishlist(id)
    }

    return (
        <button
            className={`${styles.wishlist} ${isInWishlist ? styles['already-in'] : ''} ${className}`}
            onClick={(e) => handleWishListClick(e, id)}
        >
            <span className={styles.icon}>❤</span>
            {isInWishlist ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </button>
    );
}
