import React from 'react'
import { useState, useRef } from 'react'
import styles from './Contact.module.scss'




const Contact = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        checkData()
    }

    const checkData = () => {
        //check first name
        if (firstName === '') {
           setErrorFor(firstNameRef.current, 'Pole imię nie może być puste')
        }
        else {
            setSuccessFor(firstNameRef.current)
        }
        // check last name
        if (lastName === '') {
            setErrorFor(lastNameRef.current, 'Pole nazwisko nie może być puste')
         }
        else {
             setSuccessFor(lastNameRef.current)
        }
        //check email
        if (email === '') {
            
            setErrorFor(emailRef.current, 'Pole email nie może być puste')
        }
        else if (!emailRegex.test(email)) {
            setErrorFor(emailRef.current, 'Pole email jest nieoprawne')
        }
        else {
            setSuccessFor(emailRef.current)
        }
        // check message
        if (message === '') {
            setErrorFor(messageRef.current, "Pole wiadomości nie może być puste")
        }
        else {
            setSuccessFor(messageRef.current)
        }
    }

    

    const setErrorFor = (input, errorMessage) => {
        const formGroup = input.parentElement
        const small = formGroup.querySelector('small')
        small.innerText = errorMessage
        formGroup.classList.add(`${styles.formGroupError }`)
    }

    const setSuccessFor = (input) => {
        const formGroup = input.parentElement
        formGroup.classList.add(`${styles.formGroupSuccess }`)
    }

  
    return (
        <div className={styles.container}>

            <div className={styles.box}>

                <header className={styles.header}>Masz pytania? Chesz dowiedzieć się więcej? Zadzwoń lub skorzystaj z formularza kotaktowego.</header>
    
                

                <form className={styles.form} onSubmit={handleOnSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor='first-name'>Imię</label>
                    <input type='text' id='first-name' ref={firstNameRef} value={firstName} onChange={handleFirstNameChange} placeholder='Adam' name='first-name'></input>
                    <i className='fas fa-check-circle'></i>
                    <i className='fas fa-exclamation-circle'></i>
                    <small>Error</small>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='last-name'>Nazwisko</label>
                    <input type='text' id='last-name' ref={lastNameRef} value={lastName} onChange={handleLastNameChange} name='last-name' placeholder='Nowak'></input>
                    <i className='fas fa-check-circle'></i>
                    <i className='fas fa-exclamation-circle'></i>
                    <small>Error</small>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='email'>Adres email</label>
                    <input type='text' id='email' ref={emailRef} value={email} onChange={handleEmailChange} name='email' placeholder='adam.nowak@gmail.com'></input>
                    <i className='fas fa-check-circle'></i>
                    <i className='fas fa-exclamation-circle'></i>
                    <small>Error</small>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='message'>Twoja wiadomość</label>
                    <textarea className={styles.gruop__textarea}  id='message' ref={messageRef} value={message} onChange={handleMessageChange} name='message' placeholder='Treść wiadomości'></textarea>
                    <i className={`${styles.group__icon} fas fa-check-circle`}></i>
                    <i className={`${styles.group__icon} fas fa-exclamation-circle`}></i>
                    <small>Error</small>
                </div>
                <button className={styles.button} type='submit'>Wyślij</button>
            </form>

            <div className={styles.info}>
                    <p>Kajakpol Sp. z o.o.</p>
                    <p>Krzywa 23e, Giżycko 11-500</p>
                    <p>+48 123-123-123</p>
                    <p>kontakt@kajakpol.pl</p>
                    <p>NIP 123456789</p>
                </div>
                

            </div>

        </div>
    )
}

export default Contact
