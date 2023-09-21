import {FaEnvelope, FaGithubSquare, FaLinkedin} from 'react-icons/fa';

const menuItems = [
  {label: 'Experience', link: '#experience'},
  {label: 'Projects', link: '#projects'},
  {label: 'Paintings', link: '#paintings'},
];

const NameIntro = () =>
  <>
    <h3 style={{'color': 'rgba(45, 212, 191)'}}>Hi, I am</h3>
    <h1 style={{'color': '#CCD6F6'}}>Ava Oveisi.</h1>
  </>;

const SubIntro = () =>
  <p className="intro"><span style={{'color': 'rgba(45, 212, 191)'}}>
    Software Developer</span> and Computer Science student at the University
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
    <a href={process.env.PUBLIC_URL + '/OveisiA_resume.pdf'} style={{'color': 'rgba(45, 212, 191)'}} className="underline link-arrow">
      View full Resume here <p>&#10132;</p>
    </a>
  </div>;

const MenuItems = () =>
  <div className='menu'>
    {menuItems.map((item, index) => (
      <div key={index}>
        <a href={item.link} className="underline link-arrow">
          {item.label}
        </a>
      </div>
    ))}
  </div>;

const Intro = () =>
  (
    <section id="home">
      <div data-aos="fade-up" className="inner">
        <NameIntro />
        <SubIntro />
        <Contacts />
        <Resume />
        <MenuItems />
      </div>
    </section>
  );

export default Intro;

