import { React } from "react";
import { Button } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { FaChartBar, FaGithub, FaRegFilePdf } from "react-icons/fa";
var data = require('../data.json');
const exps = data["experiences"];

const ExpCard = (props) => {
  return (
    <MDBCard narrow col='4' className='exp-card'>
      <MDBCardBody>
        <MDBCardTitle>{props.job}</MDBCardTitle>
        <MDBCardSubTitle><a className="company" href={props.companylink}>{props.company}</a></MDBCardSubTitle>
        <MDBCardText style={{ "text-align": "left" }}><ul>{props.desc.map((point) => <li>{point}</li>)}</ul></MDBCardText>
        <MDBCardText>
          <p className='date'>{props.date}</p>
        </MDBCardText>
      </MDBCardBody>
      {props.img != "" ? <MDBCardImage className='exp-img' position='bottom' src={process.env.PUBLIC_URL + props.img} overlay='white-slight' hover waves /> : null}
      {props.img != "" ? <MDBCardText class="caption">{props.caption}</MDBCardText> : null}
      <div>{props.skills.map((skill) => <Button disabled variant="dark">{skill}</Button>)}</div>
      <br />
      <div>
        {"dashboard" in props.links ? <a href={props.links["dashboard"]}><FaChartBar className="icon" /><p>dashboard</p></a> : null} 
        {"github" in props.links ? <a href={props.links["github"]}><FaGithub className="icon" /></a> : null}
        {"docs" in props.links ? <a href={props.links["docs"]}><FaRegFilePdf className="icon" /></a> : null}
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
              img={exp.img}
              company={exp.at}
              job={exp.job}
              desc={exp.desc}
              skills={exp.skills}
              date={exp.date}
              caption={exp.caption}
              companylink={exp.companylink}
              links={exp.links}
            />
          ))}
        </div>
      </div>
    </section>

  );
}

export default Experience;

