import styles from './MyContainer.module.css';

const MyContainer = ({ children }) => {
  return <div className={styles.myContainer}>{children}</div>;
};

export default MyContainer;
