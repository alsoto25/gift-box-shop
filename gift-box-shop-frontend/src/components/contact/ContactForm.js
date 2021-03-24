import React, {useState} from 'react'
import styles from '../../../styles/pages/Contact.module.scss'
export default function ContactForm() {

    const [alertMessage, setAlertMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [submitForm, setSubmitForm] = useState(false); 

    function validation(e){

        e.preventDefault();

        const nameFormat = new RegExp('^[A-Z]+$', 'i');
        const emailFormat = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if(name === "" || email === "" || message === ""){
            setAlertMessage("All spaces are required")
            setSubmitForm(false);
            setError(true);
            return;

        }else if(!nameFormat.test(name)){
            setAlertMessage("The name can only have letters")
            setSubmitForm(false);
            setError(true);
            return;

        }else if(!emailFormat.test(email)){
            setAlertMessage("Invalid email")
            setSubmitForm(false);
            setError(true);
            return;
        }
        setError(false);
        submitted(e);
    }

    function submitted(e){

        setSubmitForm(true);
        setAlertMessage("Form sent successfully")

        const request = {
            name: name,
            email: email,
            message: message
        }

        console.log("Sending...");
        console.log(request);

        setTimeout(() => {
            setSubmitForm(false);
            e.target.reset();
        }, 3000);
    }

    return (
        <form onSubmit = {validation} className={styles['form-container']}>
            <h1>Contact</h1>
            <input onChange = {e=>{
                setName(e.target.value);
            }} placeholder="Full Name:" type="text" name="name" />

            <input onChange = {e=>{
                setEmail(e.target.value);
            }} placeholder="Email:" type="text" name="email" />

            <textarea onChange = {e=>{
                setMessage(e.target.value);
            }} id="messageText" name="message" rows="4" cols="50" placeholder="Message:">
            </textarea>

            {(error) ? <p className={styles['error']}>{alertMessage}</p> : null}
            {(submitForm) ? <p className={styles['correct']}>{alertMessage}</p> : null}

            <div> 
                <input type="submit" value="Submit" />
            </div>
        </form>              
    )
}