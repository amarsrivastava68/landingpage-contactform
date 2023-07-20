import React from 'react'
import {db} from '../firebaseConfig'
import { useState } from 'react'
import {addDoc , collection} from 'firebase/firestore'



const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const userCollectionRef = collection(db , 'contactdata')
    const handleSubmit =() =>{
        addDoc(userCollectionRef , {
            name:name , 
            email:email , 
            message :message
        })
    }
    return (

        <div className = 'outer-container'>
            <p>Landing Page for Design Avenue</p>
            <form className = 'contactform'>
                <label>Full name</label>
                <input type = 'text' placeholder = 'Enter your name  '
                onChange = {(event)=>{
                    setName(event.target.value)
                }}/>
                <label>Email Address </label>
                <input type = 'text' placeholder = 'Enter your email address '
                onChange = {(event)=>{
                    setEmail(event.target.value)
                }}/>

                <label>Enter Query / Feedback </label>
                <textarea type = 'text' placeholder = 'Enter feedback  '
                onChange = {(event)=>{
                    setName(event.target.value)
                }}>
                </textarea>
                
            </form>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Contact