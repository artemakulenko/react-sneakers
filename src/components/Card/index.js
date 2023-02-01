import { useState } from 'react';
import styles from './Card.module.sass';

function Card(props){
  
  const [count, setCount] = useState(0)
  console.log(count)
  console.log(setCount)
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
      <div>
        <p> Вы кликнули {count} раз </p>
        <button onClick={() => setCount(count + 1)}> click me </button>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.preprice}>Цена:</div>
        <div className={styles.price}>
          {props.price} руб.
        </div>
        <div className={styles.addtocart}>
          <img src="/img/plus.svg" alt="" onClick={props.addToBasket}/>
        </div>
      </div>
    </div> 
  )
} 

export default Card