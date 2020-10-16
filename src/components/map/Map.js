import React from 'react'
import styles from './Map.module.scss'

const Map = () => {
    return (
        <section className={styles.map}>
            <div className={styles.container}>
                <h2 className={styles.title}>Gdzie nas znaleźć</h2>
                <div className={styles.mapContainer}>
                    <iframe title="map" className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4725.549828786196!2d21.427089300300626!3d53.68663691981547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1f8803ab8ce35%3A0x1f509bba411744aa!2zS3J1dHnFhA!5e0!3m2!1spl!2spl!4v1602499566087!5m2!1spl!2spl"  style={{ border: '0', frameBoarder: '0', allowfullscreen: '0', allowFullScreen: '', tabindex: '0', }}  aria-hidden="false"  ></iframe>

                   
                </div>


            </div>

        </section>
    )
}

export default Map
