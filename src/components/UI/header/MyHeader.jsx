import styles from './MyHeader.module.css';
import MyContainer from '../container/MyContainer';

const MyHeader = ({ title }) => {
  return (
    <header className={styles.myHeader}>
      <MyContainer>
        <div className={styles.myHeaderTitle}>{title}</div>
      </MyContainer>
    </header>
  );
};

export default MyHeader;
