import React from 'react'
import styles from './OfferCard.module.scss'


const OfferCard = ({offer, altStyle}) => {
    const {name, dist, time, price1, price2} = offer
  
    return (
        <div className={altStyle ? styles.offerCard2 : styles.offerCard1}>
            <p className={styles.name}>{name}</p>
            <p className={styles.dist}>Długość trasy: {dist}</p>
            <p className={styles.time}>Czas: {time}</p>
            <p className={styles.price1}>Kajak jednoosobowy: {price1}</p>
            <p className={styles.price2}>Kajak dwuosobowy: {price2}</p>
        </div>
    )
}

export default OfferCard
