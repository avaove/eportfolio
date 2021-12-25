import { Button } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardSubTitle, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
var data = require('../data.json');
const projs = data["projs"];

const ProjCard = (props) => {

  return (
    <MDBCard id='proj-card' style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={process.env.PUBLIC_URL + props.img} position='top' alt='Fissure in Sandstone' />
      <MDBCardBody>
        <MDBCardTitle id='proj-title'>{props.name}</MDBCardTitle>
        <MDBCardSubTitle id='card-subtitle'>{props.type}</MDBCardSubTitle>
        <MDBCardText id='proj-text'>{props.desc}</MDBCardText>
        <div>
          {props.skills.map((skill) => <Button disabled variant="dark">{skill}</Button>)}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

const Project = () => {
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

