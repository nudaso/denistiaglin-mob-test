import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <button className={styles.flex}>
        <span className={styles.BurgerIcon} />
      </button>
      <div className={styles.LanguageSelect}>
        <span>
          ru
        </span>
        <button className={styles.flex}>
          <span className={styles.VectorDownIcon} />
        </button>
      </div>
    </header>
  )
}

export default Header;