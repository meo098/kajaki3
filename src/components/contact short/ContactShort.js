import React from 'react'
import ButtonMore from '../button more/ButtonMore'

import styles from './ContactShort.module.scss'
import { contactData } from '../../pages/home/Data'


const ContactShort = () => {

    const { title, desc, buttonDesc, buttonLink } = contactData
    return (
        <section className={styles.contactShort}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
              
                <p className={styles.desc}>{desc}</p>
                <ButtonMore buttonDesc={buttonDesc} buttonLink={buttonLink} />
            
            </div>
        </section>
    )
}

export default ContactShort
