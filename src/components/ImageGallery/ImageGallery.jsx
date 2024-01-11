import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} {...image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
