const Intro = (props) => {
  return (
    <section id="home">
      <div data-aos="fade-up" className="inner" style={{ "textAlign": "left" }}>
        <h3 style={{ "color": "#64FFB4" }}>Hi, I am</h3>
        <h1 style={{ "color": "#CCD6F6" }}>Ava Oveisi.</h1>

        <p className="intro">I’m an <span style={{ "color": "#64FFB4" }}>Automation and DevOps
          Developer</span>, and
          a <span style={{ "color": "#64FFB4" }}>Research Assistant</span>.
          Currently, I am
          studying Computer Science and Physical Sciences at the University of Toronto.</p>
        <a href="#contact" role="button" className="btn btn-outline-primary btn-lg">Get in Touch</a>
      </div>
    </section>
  )
}

export default Intro;

