import {FaEnvelope, FaGithubSquare, FaLinkedin} from 'react-icons/fa';

const NameIntro = () =>
  <>
    <h3 style={{'color': '#64FFB4'}}>Hi, I am</h3>
    <h1 style={{'color': '#CCD6F6'}}>Ava Oveisi.</h1>
  </>;

const SubIntro = () =>
  <p className="intro"><span style={{'color': '#64FFB4'}}>
    Software Developer</span> and Computer Science student at University
    of Toronto
  </p>;

const Contacts = () =>
  <div style={{'padding': '20px 0 0 0'}}>
    <a href="https://ca.linkedin.com/in/ava-oveisi"><FaLinkedin className="proj-icon" /></a>
    <a href="https://github.com/avaove"><FaGithubSquare className="proj-icon" /></a>
    <a href="mailto:ava.oveisi@mail.utoronto.ca"><FaEnvelope className="proj-icon" /></a>
  </div>;

const Resume = () =>
  <div className='resume'>
    <a href={process.env.PUBLIC_URL + '/OveisiA_resume.pdf'} style={{'color': '#3ca371'}} className="link-arrow">
      View full Resume here <p>&#10132;</p>
    </a>
  </div>;

const Intro = () =>
  (
    <section id="home">
      <div data-aos="fade-up" className="inner">
        <NameIntro />
        <SubIntro />
        <Contacts />
        <Resume />
      </div>
    </section>
  );

export default Intro;

