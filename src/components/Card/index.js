import styles from './Card.module.sass';

function Card(props){
  return(
    <div className={styles.sneakers__item} onClick={props.displayItem}>
      <div className={styles.sneakers__prodcontainer}>
        <img src={props.imgUrl} className={styles.sneakers__img} />
        <div className="sneakers__like">
          <img src="/img/like.svg" alt="" />
        </div>
      </div>
      <div className="sneakers__title">
        {props.title}
      </div>
      <div className="sneakers__pricecontainer">
        <div className="sneakers__preprice">Цена:</div>
        <div className="sneakers__price">{props.price} руб.</div>
        <div className="sneakers__addtocart">
          <img src="/img/plus.svg" alt=""/>
        </div>
      </div>
    </div> 
  )
} 

export default Card