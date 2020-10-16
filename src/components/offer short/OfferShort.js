import React from 'react'

import styles from './OfferShort.module.scss'
import { offerData } from '../../pages/home/Data.js'
import ButtonMore from '../button more/ButtonMore'
import offer1 from '../../images/offer1.jpg'
import offer2 from '../../images/offer2.jpg'
import offer3 from '../../images/offer3.jpg'
import Bubble from '../bubble/Bubble'

const OfferShort = () => {
    const { title, motto, desc1, desc2, desc3, desc, buttonDesc, buttonLink } = offerData
    return (
        <section className={styles.offerShort}>
            <div className={styles.container}>

                <h2 className={styles.title}>{title}</h2>
                <div className={styles.bubbleBox}>
                    <div className={styles.bubble1}>
                        <Bubble text={desc1} imgPath={offer1} />
                    </div>
                    <div className={styles.bubble2}>
                        <Bubble text={desc2} imgPath={offer2} />
                    </div>
                    <div className={styles.bubble3}>
                        <Bubble text={desc3} imgPath={offer3} />
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <h3 className={styles.motto}>{motto}</h3>
                    <p className={styles.desc}>{desc}</p>
                    <ButtonMore buttonDesc={buttonDesc} buttonLink={buttonLink} />
                </div>
            </div>

        </section>
    )
}

export default OfferShort
