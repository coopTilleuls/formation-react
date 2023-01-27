import styles from './BookCover.module.css';

export const BookCover = ({alt = '', id, width = '100%'}) => (
    <img src={`https://picsum.photos/seed/${id}/300/400`} width={width} alt={alt} className={styles.cover} />
);
