import { db } from "../firebase"
import React, { useState } from "react";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection('contact').add({
      name: name,
      email: email,
      msg: msg
    })
      .then(() => {
        alert('Message has been submitted.');
        setLoader(false); // set to false after completing loading
      })
      .catch(error => {
        alert(error.message)
      });
    setName('');
    setEmail('');
    setMsg('');
  }

  return (
    <section id="contact">
      <h2 className="heading">───── Contact ─────</h2>
      <div data-aos="fade-up">
        <h3 className="heading" style={{"color": "#3ca371"}}>Hello {name}!</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
          <button className="btn" type="submit" style={{ "background-color" : loader ? "#ccc" : "#2c8057", "color": "white"}}>Submit</button>
        </form>
        <br/>
        <a href="https://ca.linkedin.com/in/ava-oveisi/en"><FaLinkedin className="proj-icon" /></a> 
        <a href="https://github.com/avaove"><FaGithubSquare className="proj-icon" /></a> 
        <a href="mailto:ava.oveisi@mail.utoronto.ca"><FaEnvelope className="proj-icon" /></a> 
      </div>
    </section>

  )
}

export default Contact;

