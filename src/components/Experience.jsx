import { React } from "react";
import { Button } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit';
import { FaChartBar, FaGithub, FaRegFilePdf } from "react-icons/fa";
var data = require('../data.json');
const exps = data["experiences"];

const ExpCard = (props) => {
  console.log(props.desc, "here");
  let dashboard, dustrepo, poster;
  if (props.id == 1) {
    dashboard = <a href="https://unruffled-keller-0e32e0.netlify.app/"><FaChartBar className="icon" /><p>dashboard</p></a>
  } else if (props.id == 2) {
    dustrepo = <a href="https://github.com/avaove/dust-map"><FaGithub className="icon" /></a>;
    poster = <a href="https://docs.google.com/document/d/1_ITitG7YQdSR8rMf2kXE0ggdWRrlQ7sb4wdpFGiopB0/edit"><FaRegFilePdf className="icon" /></a>
  }
  return (
    <MDBCard narrow col='4' className='exp-card'>
      <MDBCardBody>
        <MDBCardTitle>{props.job}</MDBCardTitle>
        <MDBCardText style={{ "text-align": "left" }}><ul>{props.desc.map((point) => <li>{point}</li>)}</ul></MDBCardText>
        <MDBCardText>
          <p className='date'>{props.date}</p>
        </MDBCardText>
      </MDBCardBody>
      <MDBCardImage position='bottom' src={props.img} overlay='white-slight'
        hover
        waves />
      <MDBCardText class="caption">{props.caption}</MDBCardText>
      <div>
        {props.skills.map((skill) => <Button disabled variant="dark">{skill}</Button>)}
      </div>
      <br />
      {dashboard}
      <div>
        {dustrepo}
        {poster}
      </div>
    </MDBCard>
  );
}

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="heading">───── Experience ─────</h2>
      <div id="experience">
        <div>
          {exps.map((exp) => (
            <ExpCard
              id={exp.id}
              img={exp.img}
              company={exp.at}
              job={exp.job}
              desc={exp.desc}
              skills={exp.skills}
              date={exp.date}
              caption={exp.caption}
            />
          ))}
        </div>
      </div>
    </section>

  );
}

export default Experience;

