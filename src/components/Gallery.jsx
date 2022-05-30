import styles from './Gallery.module.css';
import { getImageIndex } from '../utils/utils';
import MyContainer from './UI/container/MyContainer';

const Gallery = ({ images, setImageIndex, openModal }) => {
  const handleClick = (id) => {
    const index = getImageIndex(images, id);
    setImageIndex(index);
    openModal(true);
  };

  return (
    <div className={styles.myGallery}>
      <MyContainer>
        <div className={styles.myGalleryGrid}>
          {images.map((image) => (
            <img
              className={styles.myGalleryImage}
              key={image.id}
              {...image}
              onClick={() => handleClick(image.id)}
            />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default Gallery;
