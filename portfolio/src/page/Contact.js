import React, {useState} from 'react';

export default function Contact() {
  const [contactData, setContactData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });

  const setName = (event) => {
    setContactData({...contactData, name:event.target.value})
  }
  const setEmail = (event) => {
    setContactData({...contactData, email:event.target.value})
  }
  const setSubject = (event) => {
    setContactData({...contactData, subject:event.target.value})
  }
  const setMessage = (event) => {
    setContactData({...contactData, message:event.target.value})
  }

  return (
    <main className="contact-page">
        <form className="form-contact" 
        >
          <fieldset>
            <legend> <h1> Me contacter </h1> </legend>

            <div className="form-contact__identity">
              <label>
                <h2> Nom : </h2>
                <input type="text" onChange={setName} placeholder="Nom"/>
              </label>

              <label>
                <h2> Email : </h2>
                <input type="email" onChange={setEmail} placeholder="Email"/>
              </label>


            </div>

            <label>
              <h2> Sujet : </h2>
              <input onChange={setSubject} type="text"/>
            </label>

            <label>
              <h2> Message : </h2>

              <textarea onChange={setMessage}/>
            </label>
            <br/>

            <div className="form-contact__btn-container">
              <button className="form-contact__btn-container__submit" type="submit"><h2>Envoyé le message</h2></button>
            </div>

          </fieldset>

        </form>
    </main>
  )
}
