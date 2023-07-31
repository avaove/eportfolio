import {FaEnvelope, FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import React, {useState} from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {
    window.open(`mailto:${email}`, '_blank');
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <section id="contact">
      <h2 className="heading">CONTACT</h2>
      <div data-aos="fade-up">
        <h3 className="heading" style={{'color': '#3ca371'}}>Hello {name}!</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea placeholder="Message" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
          <button className="btn" type="submit" style={{'backgroundColor': '#ccc', 'color': 'white'}}>Submit</button>
        </form>
        <br/>
        <a href="https://ca.linkedin.com/in/ava-oveisi"><FaLinkedin className="proj-icon" /></a>
        <a href="https://github.com/avaove"><FaGithubSquare className="proj-icon" /></a>
        <a href="mailto:ava.oveisi@mail.utoronto.ca"><FaEnvelope className="proj-icon" /></a>
      </div>
    </section>
  );
};

export default Contact;

