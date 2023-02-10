import {Header} from "../Header";
import {Card} from "../Card";
import {Banner} from "../Banner";
import {Menu} from "../Menu";
import React, { useEffect, useState } from "react";




function App() {
  const [cartItem, setItems] = useState([])
  const [isMenuOpen, setMenuStatus] = useState(false)
  const [itemsInMenu, setItemsInMenu] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const changeMenuStatus = () => setMenuStatus(!isMenuOpen)

  
  useEffect(() => {
    fetch('https://63e0786e65b57fe606435e40.mockapi.io/item').then(res => res.json()).then(json => {
    setItems(json)
    })
  }, [])


  // User Functions
  const addToMenu = (item) => {
    return !itemsInMenu.includes(item) ? setItemsInMenu(prev => [...prev, item]) : null
  }

  const onChangeSearchInput = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }



  return (
    <div className="app">
      <Header onShowMenu={changeMenuStatus}/>
      <Banner/>
      {
        isMenuOpen ? 
        <Menu 
          items={itemsInMenu} 
          onHideMenu={changeMenuStatus} 
        /> 
        : null
      }

      <div className="content">
        <div className="container content__wrapper">
          <h1 className="content__title"> {searchValue ? `Ищем по запросу "${searchValue}"` : 'Все кроссовки'} </h1>
          <div className="content__input">
            <input onChange={onChangeSearchInput} className="input" type="text" placeholder="Поиск..." />
          </div>
        </div>

        <section className="sneakers">
          <div className="container">
            <div className="sneakers__grid">
              {cartItem.map((item, i) => {
                return ( 
                  <Card 
                    title={item.title}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    key={i}
                    onPlus={() => addToMenu(item)}
                    addToFavorite={() => {console.log('добавлено в избранное')}}
                  />
                )
                })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export {App};