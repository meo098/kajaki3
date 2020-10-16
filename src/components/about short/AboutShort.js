import React from 'react'
import styles from './AboutShort.module.scss'
import { aboutData } from '../../pages/home/Data.js'
import ButtonMore from '../button more/ButtonMore'
import foto1 from '../../images/people/person1.jpg'
import foto2 from '../../images/people/person2.jpg'
import about1 from '../../images/about2.jpg'
import Bubble from '../bubble/Bubble'


const AboutShort = () => {
    const { title, motto, desc, buttonDesc, buttonLink } = aboutData
    return (
        <section className={styles.aboutShort}>

            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.infoBox}>
                    <h3 className={styles.motto}>{motto}</h3>
                    <p className={styles.desc}>{desc}</p>
                    <ButtonMore buttonDesc={buttonDesc} buttonLink={buttonLink} />
                </div>
                <div className={styles.fotoBox}>
                    {/* <img className={styles.foto} src={about1} alt='team foto' />
                    <div className={styles.fotoBg}>

                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default AboutShort
