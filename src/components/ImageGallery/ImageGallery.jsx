//import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL }) => (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="/"
        className={styles.ImageGalleryItemImage}
      />
    </li>
  ));

  return <ul className={styles.imageGallery}>{elements}</ul>;
};

export default ImageGallery;
