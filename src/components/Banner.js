function Banner(){
  return(
    <div className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__grid">
            <div className="banner__item">
              <div className="banner__container">
                <h1 className="banner__title">
                  Stan Smith, <span>Forever!</span>
                </h1>
                <button className="banner__btn">Купить</button>
              </div>
            </div>
            <div className="banner__item">
              <img src="/img/image 6.png" alt="" className="banner-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner