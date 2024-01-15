//import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL }) => (
    <li key={id} className={styles.galleryItem}>
      <img src={webformatURL} alt="/" />
      <p>test</p>
    </li>
  ));

  return <ul className={styles.gallery}>{elements}</ul>;
};

export default ImageGallery;
