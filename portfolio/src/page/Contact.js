import React, {useState} from 'react';
import emailjs from "emailjs-com";

const SERVICE_ID = "service_dkrwcd5";
const TEMPLATE_ID = "template_594b9o8";
const USER_ID = "DqJnyT1oE6odNgdD1";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });

  const setName = (e) => {
    setContactData({...contactData, name:e.target.value})
  }
  const setEmail = (e) => {
    setContactData({...contactData, email:e.target.value})
  }
  const setSubject = (e) => {
    setContactData({...contactData, subject:e.target.value})
  }
  const setMessage = (e) => {
    setContactData({...contactData, message:e.target.value})
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result => {
        console.log(result.text);
      }))
      .catch((err) => {
        console.log(err.text);
      });


    const response = await fetch("/api/message", {method:"post", headers: {"Content-Type":"application/json"}, body:JSON.stringify(contactData)})
      .then(() => {
        alert("Message Bien envoyé")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="contact-page">
        <form className="form-contact" onSubmit={sendMessage}>
          <fieldset>
            <legend> <h1> Me contacter </h1> </legend>

            <div className="form-contact__identity">
              <label>
                <h2> Nom : </h2>
                <input type="text" name='name' onChange={setName} placeholder="Nom"/>
              </label>

              <label>
                <h2> Email : </h2>
                <input type="email" name='email' onChange={setEmail} placeholder="Email"/>
              </label>


            </div>

            <label>
              <h2> Sujet : </h2>
              <input onChange={setSubject} name="subject" type="text"/>
            </label>

            <label>
              <h2> Message : </h2>

              <textarea name="message" onChange={setMessage}/>
            </label>
            <br/>

            <div className="form-contact__btn-container">
              <button className="form-contact__btn-container__submit" type="btn"><h2>Envoyé le message</h2></button>
            </div>

          </fieldset>

        </form>
    </main>
  )
}
