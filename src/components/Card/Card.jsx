import { useState } from 'react';
import plusSvg from '../../images/plus.svg'
import checkSvg from '../../images/check.svg'
import {ReactComponent as LikeSvg} from '../../images/like.svg';
import {ReactComponent as LikePressed} from '../../images/like-pressed.svg';




import styles from './Card.module.sass';



function Card({imgUrl, title, price, onPlus}){
  const [counter, setCount] = useState(false)
  const [isLike, setLike] = useState(false)

  const onClickPlus = () => {
    onPlus()
    setCount(!counter)
  }

  const checkLike = () => setLike(!isLike)
  
  
  return(
    <div className={styles.sneaker}>
      <div className={styles.productContainer}>
        <img src={imgUrl} alt={title} className={styles.image} />
        <div 
          className={`iconBtn ${styles.like}`}
          onClick={checkLike}
          >
          { isLike ? <LikePressed/> : <LikeSvg/>}
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.priceTitle}>Цена:</div>
      <div className={styles.priceContainer} onClick={onClickPlus}>
        <div className={styles.price}>
          {price} руб.
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