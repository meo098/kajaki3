import React from 'react'
import PersonCard from '../../components/person card/PersonCard'
import { PersonalData } from '../../components/person card/Data'
import styles from './About.module.scss'
const About = () => {

    return (
        <div className={styles.about}>
            <div className={styles.baner}></div>
            <div className={styles.container}>
                <header>
                    <h1 className={styles.title}>Słów o nas kilka</h1>
                </header>
                <p className={styles.desc}>Kajakpol to ceniona i rozpoznawalna marka wśród całego środowiska miłośników kajaków oraz szeroko pojętej rozrywki wodnej. Firma została założona przez dwóch pasjonatów kajakarstwa w 1997 r. urodzonych w Giżycku. Początkowo niewielki interes zaczął się dynamicznie rozwijać i obejmowąć swoim zasięgiem coraz to większy obszar Polski. Aktualnie posiadamy, obok głównej bazy w Giżycku, dwie dodatkowe placówki ulokowane w Krutyni oraz w Mikołajkach. Posiadamy wieloletnie doświadczenie w organizowaniu spływów, wyporzyczaniu sprzętu wodnego, prowadzeniu kursów, wszystko to pod opieką i nadzorem naszej wyszkolonej kadry.</p>

                {
                    PersonalData.map(person => <PersonCard key={person.id} person={person}/>)
                }

            </div>




        </div>
    )
}

export default About
