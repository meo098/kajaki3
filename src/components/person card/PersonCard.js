import React from 'react'
import styles from './PersonCard.module.scss'

const PersonCard = ({ person }) => {
    const { id, name, desc, imagePath } = person
    const myFlex = id%2 === 0 ? 'row-reverse' : 'row'
   
    return (
        <div className={styles.personCard} style={{flexDirection: myFlex}}  >
            <div className={`${styles.box} ${styles.cardInfo}` }>
                <p className={styles.name}>{name}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
            <div className={`${styles.box} ${styles.foto}`}>
                <img className={styles.image} src={imagePath} />
            </div>



        </div>
    )
}

export default PersonCard
