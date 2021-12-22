const ProjCard = (props) => {

  return (
    <div className="col-lg-4 col-md-12 col-sm-12" style={{"height": "300px"}}>
      <div className="col-md-12 project">
        <div>
          <div></div>
          <h3 className="project-title">Mock Unix Shell Application</h3>
          <div className="project-description">In an Agile team, I developed a Unix shell environment in
            Java using agile design methodologies and adhered to test-driven-development and OOP
            principles, and used techniques such as dependency-injection. </div>
        </div>
        <div>
          <p className="skills">Java | OOP | TDD</p>
        </div>
      </div>
    </div>
  );
}

const Project = (props) => {
  return (
    <section id="projects">
        <h2 className="heading">───── Projects ─────</h2>
        <div class="row">
          <ProjCard />
          <ProjCard />
          <ProjCard />
        </div>
      </section>
    
  )
}

export default Project;

