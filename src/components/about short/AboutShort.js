import React from 'react'
import styles from './AboutShort.module.scss'
import person1 from '../../images/people/person1.jpg'
import ShortBox from '../short box/ShortBox'
import { aboutData } from '../../pages/home/Data.js'


const AboutShort = () => {
    return (
        <section className={styles.aboutShort}>

            <div className={styles.container}>
                <ShortBox data={aboutData} />
                <div>
                    <div className={styles.fotoWrapper1}></div>
                    <div className={styles.fotoWrapper2}></div>
                </div>
            </div>
        </section>
    )
}

export default AboutShort
