import {Header} from "../Header";
import {Card} from "../Card";
import {Banner} from "../Banner";
import {Menu} from "../Menu";
import React, { useEffect, useState } from "react";




function App() {
  const [item, setItems] = useState([])
  const [isMenuOpen, setMenuStatus] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const changeMenuStatus = () => setMenuStatus(!isMenuOpen)

  
  useEffect(() => {
    fetch('https://63e0786e65b57fe606435e40.mockapi.io/item').then(res => res.json()).then(json => {
    setItems(json)
    })
  }, [])

  return (
    <div className="app">
      <Header onShowMenu={changeMenuStatus}/>
      <Banner/>
      {isMenuOpen && <Menu items={cartItems} onHideMenu={changeMenuStatus} />}

      <div className="content">
        <div className="container">
          <h1 className="content__title">Все кроссовки</h1>
        </div>

        <section className="sneakers">
          <div className="container">
            <div className="sneakers__grid">
              {item.map((item, i) => {
                return <Card 
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  key={i}
                  // addToFavorite={() => console.log(item)}
                  />
                })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export {App};