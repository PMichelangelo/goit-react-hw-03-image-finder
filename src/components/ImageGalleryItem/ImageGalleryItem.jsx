import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li key={id} className={styles.galleryItem}>
      <img src={webformatURL} alt={largeImageURL} />
    </li>
  );
};

export default ImageGalleryItem;
