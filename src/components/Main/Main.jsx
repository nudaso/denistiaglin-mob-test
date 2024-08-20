import styles from './Main.module.scss'
import prevNews from './prevNews.png'


const Main = () => {
  return (
    <section className={styles.Main} style={{marginBottom: "50px"}}>
      <div className={styles.BackImage} />
      <div className={styles.Wrapper}>
        <div className={styles.Text}>
          <div className={styles.LogoWrapper}>
            <div className={styles.Logo}/>
          </div>
          <h2>Wind Energy Technology
          Era Renewable</h2>
          <hr />
          <p>Здание, способное обеспечить себя электрической энергией с помощью ветра</p>
        </div>

        <div className={styles.News}>
          <div className={styles.Content}>
            <div className={styles.ContentWrapper}>
              <div className={styles.NewsHeader}>
                <span>06 Декабря</span>
                <span>16:24</span>
              </div>
              <div className={styles.MainContent}>
                <div className={styles.PrevNewsImageContainer}>
                  <img src={prevNews} alt="text" />
                </div>
                <div className={styles.PrevNewsTextContainer}>
                  <p>Бизнес-встреча в Дубаи</p>
                </div>
              </div>
              <div className={styles.InfoPanel}>
                <div className={styles.InfoBar}>
                  <div className={styles.ViewingInfo}>
                    <span className={styles.ViewingIcon} />
                    18k
                  </div>
                  <div className={styles.LikesInfo}>
                    <span className={styles.LikesIcon} />
                    3974
                  </div>
                </div>
                <button className={styles.Read}>
                  Читать
                  <span className={styles.ReadIcon} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.ControlBlock}>
            <button className={styles.PrevContorl}>
              <span className={styles.PrevIcon} />
              Предыдущая
            </button>
            <span className={styles.ControllersSep}></span>
            <button className={styles.NextContorl}>
              Следующая
              <span className={styles.NextIcon} />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Main;