//import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ items }) => {
  const elemets = items.map(({ id, webformatURL }) => (
    <li key={id} className={styles.galleryItem}>
      <img src={webformatURL} alt="/" />
    </li>
  ));

  return <ul className={styles.gallery}>{elemets}</ul>;
};

export default ImageGallery;
