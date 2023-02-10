import checkSvg from '../../images/plus.svg'

import { useState } from 'react';
import styles from './Menu.module.sass';






const Menu = ({onHideMenu, items = []}) => { 
  const [menuItems, setMenuItems ] = useState(items)


  const removeItem = (item) => {
    setMenuItems( menuItems.filter(El => El !== item)  )
  }


  return (
    <div className={styles.overlay}>
      <div className={styles.menu}>

        <div className={styles.header}>
          <h2 className={styles.title}>Корзина</h2>
          <div className={`iconBtn ${styles.rotated}`} onClick={onHideMenu}>
            <img src={ checkSvg } alt=""/>
          </div>
        </div>


        {
          menuItems.map((item, i) => {
            return(
              <div className={styles.cart} key={i}>
                <div className={styles.cartItem}>
                  <div className={styles.imageWrapper}>
                    <img src={item.imgUrl} alt=""/>
                  </div>
                  <div className={styles.texts}>
                    <h3 className={styles.shoesTitle}>
                      {item.title}
                    </h3>
                    <p className={styles.price}>{item.price} руб.</p>
                  </div>
                  <div 
                    className={`iconBtn ${styles.rotated}`} 
                    onClick={() => removeItem(item)}
                    >
                    <img src="/img/plus.svg" alt="" />
                  </div>
                </div>
              </div>
            )
          })
        }


        


        <div className={styles.summury}>
          <div className={styles.summBlock}>
            <p> Итого: </p> 
            <div className={styles.summBg}></div>
            <div className={styles.summeryPrice}>
              21 498 руб. 
            </div>
          </div>
          <div className={styles.summBlock}>
            <p> Налог 5%: </p> 
            <div className={styles.summBg}></div>
            <div className={styles.summeryPrice}>
              1074 руб.
            </div>
          </div>

          <button className={styles.btn}>
            Оформить заказ
          </button> 
        </div>
      </div>
    </div>
  )
}

export {Menu}