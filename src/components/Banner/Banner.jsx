import styles from './Banner.module.sass'


const Banner = () => {
  return(
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div className={styles.item}>
              <div className={styles.container}>
                <h1 className={styles.title}>
                  Stan Smith, <span>Forever!</span>
                </h1>
                <button className={styles.btn}>Купить</button>
              </div>
            </div>
            <div className={styles.item}>
              <img src="/img/image 6.png" alt="" className={styles.img}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Banner}



