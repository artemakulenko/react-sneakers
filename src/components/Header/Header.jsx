function Header(props) {
  return (
    <header className="header container">
      <div className="header__left">
        <div className="header__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div>
          <h1 className="header__title">React Sneakers</h1>
          <p className="header__sub">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="header__right">
        <div className="header__cart" onClick={props.onShowMenu}>
          <img className="icon" src="/img/cart.svg" alt="" />
          <p className="header__price">0 руб.</p>
        </div>
        <div className="header__like">
          <img src="/img/like.svg" className="icon" alt="" />
        </div>
        <div className="header__user">
          <img className="icon" src="/img/user.svg" alt="" />
        </div>
      </div>
    </header>
  );
}

export {Header};
