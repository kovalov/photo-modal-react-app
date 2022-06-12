import React from 'react';
import styles from './ImageUploader.module.css';
import { FiPlus } from 'react-icons/fi';
import MyIcon from './UI/icon/MyIcon';

const ImageUploader = ({ add }) => {
  const handleChange = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      add(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <form className={styles.myImageUploaderForm}>
      <label className={styles.myImageUploaderLabel}>
        <button className={styles.myImageUploaderButton}>
          <MyIcon className={styles.myImageUploaderIcon}>
            <FiPlus />
          </MyIcon>
        </button>
        <input
          type='file'
          className={styles.myImageUploaderInput}
          accept='image/*'
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default ImageUploader;
