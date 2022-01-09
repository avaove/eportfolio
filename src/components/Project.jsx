import { Button } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { FaGithub, FaDev } from "react-icons/fa";
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
        <div>{props.skills.map((skill) => <Button disabled variant="dark">{skill}</Button>)}</div>
        <div>
          {"github" in props.links ? <a href={props.links["github"]}><FaGithub className="proj-icon" /></a> : null}
          {"devpost" in props.links ? <a href={props.links["devpost"]}><FaDev className="proj-icon" /></a> : null}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

const Project = () => {
  return (
    <section id="projects">
      <h2 className="heading">───── Projects ─────</h2>
      <div class="row" data-aos="fade-right">
        {projs.map((proj) => (
          <ProjCard
            img={proj.img}
            type={proj.type}
            name={proj.name}
            desc={proj.desc}
            skills={proj.skills}
            links={proj.links}
          />
        ))}
      </div>
    </section>

  )
}

export default Project;

