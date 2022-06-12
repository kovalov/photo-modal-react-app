import React from 'react';
import styles from './Modal.module.css';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import MyIcon from './UI/icon/MyIcon';

const Modal = ({
  images,
  imageIndex,
  setImageIndex,
  isVisible,
  setVisible,
}) => {
  const showPrev = () => {
    if (imageIndex !== 0) setImageIndex((prevIndex) => prevIndex - 1);
  };

  const showNext = () => {
    if (imageIndex !== images.length - 1)
      setImageIndex((prevIndex) => prevIndex + 1);
  };

  const isOpened = isVisible ? styles.myModalOpened : '';

  return (
    <div
      className={`${styles.myModal} ${isOpened}`}
      onClick={() => setVisible(false)}
    >
      <div className={styles.myModalContent}>
        <button className={styles.myModalButton} onClick={showPrev}>
          <MyIcon className={styles.myModalButtonIcon}>
            <FiX />
          </MyIcon>
        </button>
        <div
          className={styles.myModalSlides}
          onClick={(event) => event.stopPropagation()}
        >
          {images.map((image) => (
            <img
              className={styles.myModalImage}
              key={image.id}
              {...image}
              style={{
                transform: `translateX(-${imageIndex * 100}%)`,
              }}
            />
          ))}
          <div className={styles.myModalControls}>
            <button
              className={styles.myModalControlsButton}
              onClick={showPrev}
            >
              <MyIcon className={styles.myModalControlsButtonIcon}>
                <FiChevronLeft />
              </MyIcon>
            </button>
            <button
              className={styles.myModalControlsButton}
              onClick={showNext}
            >
              <MyIcon className={styles.myModalControlsButtonIcon}>
                <FiChevronRight />
              </MyIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
