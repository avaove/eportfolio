import { Button } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
var data = require('../data.json');
const projs = data["projs"];

const ProjCard = (props) => {

  return (
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={process.env.PUBLIC_URL + props.img} position='top' alt='Fissure in Sandstone' />
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>
          {props.desc}
        </MDBCardText>
        <div>
        {props.skills.map((skill) => <Button disabled variant="dark">{skill}</Button>)}
      </div>
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
    // <div className="col-lg-4 col-md-12 col-sm-12" style={{"height": "300px"}}>
    //   <div className="col-md-12 project">
    //     <div>
    //       <div></div>
    //       <h3 className="project-title">Mock Unix Shell Application</h3>
    //       <div className="project-description">In an Agile team, I developed a Unix shell environment in
    //         Java using agile design methodologies and adhered to test-driven-development and OOP
    //         principles, and used techniques such as dependency-injection. </div>
    //     </div>
    //     <div>
    //       <p className="skills">Java | OOP | TDD</p>
    //     </div>
    //   </div>
    // </div>
  );
}

const Project = (props) => {
  return (
    <section id="projects">
      <h2 className="heading">───── Projects ─────</h2>
      <div class="row">
        {projs.map((proj) => (
          <ProjCard
            id={proj.id}
            img={proj.img}
            type={proj.type}
            name={proj.name}
            desc={proj.desc}
            skills={proj.skills}
          />
        ))}
      </div>
    </section>

  )
}

export default Project;

