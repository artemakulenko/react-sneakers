import { useState } from 'react';
import plusSvg from '../../images/plus.svg'
import checkSvg from '../../images/check.svg'
import {ReactComponent as LikeSvg} from '../../images/like.svg';
import {ReactComponent as LikePressed} from '../../images/like-pressed.svg';




import styles from './Card.module.sass';



function Card(props){
  const [counter, setCount] = useState(false)
  const [isLike, setLike] = useState(false)
  const likedItems = []

  const checkFunc = (e) => setCount(!counter)
  function checkLike(){
    console.log(this)
    setLike(!isLike)
  }

  return(
    <div className={styles.sneaker}>
      <div className={styles.productContainer}>
        <img src={props.imgUrl} alt={props.title} className={styles.image} />
        <div 
          className={`iconBtn ${styles.like}`}
          onClick={checkLike}
          >
          { isLike ? <LikePressed/> : <LikeSvg/>}
        </div>
      </div>
      <div className={styles.title}>
        {props.title}
      </div>
      <div className={styles.priceTitle}>Цена:</div>
      <div className={styles.priceContainer} onClick={checkFunc}>
        <div className={styles.price}>
          {props.price} руб.
        </div>
        <div>
          <div 
            className={`iconBtn ${counter ? styles.checked : ''}`}>
            <img src={ counter ? checkSvg : plusSvg} alt=""/>
          </div>
        </div>
      </div>
    </div> 
  )
} 

export {Card}