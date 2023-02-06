import { useState } from 'react';
import styles from './Card.module.sass';

function Card(props){
  const [counter, setCount] = useState(false)

  const checkFunc = () => setCount(!counter)

  return(
    <div className={styles.sneaker} onClick={props.displayItem}>
      <div className={styles.productContainer}>
        <img src={props.imgUrl} alt={props.title} className={styles.image} />
        <div className={styles.like}>
          <img src="/img/like.svg" alt="" onClick={props.addToFavorite} />
        </div>
      </div>
      <div className={styles.title}>
        {props.title}
      </div>
      <div className={styles.priceTitle}>Цена:</div>
      <div className={styles.priceContainer}>
        <div className={styles.price}>
          {props.price} руб.
        </div>
        <div>
          <div 
            className={`${styles.addtocart} ${counter ? styles.checked : ''}`}
            onClick={checkFunc}
            >
            <img src="/img/plus.svg" alt="" onClick={props.addToBasket}/>
          </div>
        </div>
      </div>
    </div> 
  )
} 

export {Card}