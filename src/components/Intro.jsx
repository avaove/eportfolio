
const NameIntro = () =>
  <>
    <h3 style={{'color': '#64FFB4'}}>Hi, I am</h3>
    <h1 style={{'color': '#CCD6F6'}}>Ava Oveisi.</h1>
  </>;

const SubIntro = () =>
  <p className="intro">I’m a <span style={{'color': '#64FFB4'}}>
    Developer</span> and
    a <span style={{'color': '#64FFB4'}}>Researcher</span>.
    Currently, I am
    studying <span style={{'color': '#64FFB4'}}>Computer Science</span> (SWE Stream) and
  <span style={{'color': '#64FFB4'}}> Physical Sciences</span> at the University of Toronto.
  </p>;

const ContactButton = () => <a href="#contact" role="button" className="btn btn-outline-primary btn-lg">Get in Touch</a>;

const Intro = () =>
  (
    <section id="home">
      <div data-aos="fade-up" className="inner" style={{'textAlign': 'left'}}>
        <NameIntro />
        <SubIntro />
        <ContactButton />
      </div>
    </section>
  );

export default Intro;

