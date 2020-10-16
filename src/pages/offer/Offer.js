import React from 'react'
import OfferCard from '../../components/offer card/OfferCard'
import styles from './Offer.module.scss'
import { oneDaysOffers, fewDaysOffers } from './Data'




const Offer = () => {
    return (
        <section className={styles.offer}>
            <div className={styles.baner}></div>
            <div className={styles.container}>
                <h1 className={styles.title}>Nasza oferta</h1>
                <p className={styles.desc}></p>
                <h2 className={styles.subtitle}>Spływy jednodniowe</h2>
                <div className={styles.oneDaysOffers}>
                    {
                        oneDaysOffers.map(offer => <OfferCard altStyle={false} key={offer.name} offer={offer} />)
                    }
                </div>
                <h2 className={styles.subtitle}>Spływy dwudniowe</h2>
                <div className={styles.fewDaysOffers}>
                    {
                        fewDaysOffers.map(offer => <OfferCard altStyle={true} key={offer.name} offer={offer} />)
                    }
                </div>
                <h2 className={styles.subtitle}>Dodatkowe informacje</h2>
                <p className={styles.extraInfo}>* Zapewniamy transport osób (grupa min. 6 osoób) i kajaków na początek trasy spływu.</p>
                <p className={styles.extraInfo}>* Każdej osobie zapewniamy kamizelkę asekuracyjną</p>
            </div>

        </section>
    )
}

export default Offer
