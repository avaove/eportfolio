import {FaGithub, FaRegFilePdf, FaSitemap} from 'react-icons/fa';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardSubTitle, MDBCardText, MDBCardTitle} from 'mdb-react-ui-kit';

import {Button} from 'react-bootstrap';
import {React} from 'react';

const data = require('../data.json');
const exps = data['experiences'];

const ExpCard = props => {
  return (
    <div data-aos="fade-right">
      <MDBCard col='5'>
        <MDBCardBody>
          <MDBCardTitle style={{'color': '#CCD6F6'}}>{props.job}</MDBCardTitle>
          <MDBCardSubTitle><a className="underline company" href={props.companylink}>{props.company}</a></MDBCardSubTitle>
          <MDBCardText style={{'textAlign': 'left', 'fontSize': '15px', 'color': '#8892B0'}}>{props.desc}</MDBCardText>
          <MDBCardText style={{'color': 'rgba(45, 200, 200)'}}>
            {props.date}
          </MDBCardText>
        </MDBCardBody>
        {props.img != '' ? <MDBCardImage className='exp-img' position='bottom' src={process.env.PUBLIC_URL + props.img} overlay='white-slight' /> : null}
        {props.img != '' ? <MDBCardText className="caption">{props.caption}</MDBCardText> : null}
        <div>{props.skills.map((skill, i) => <Button key={i} disabled variant="dark">{skill}</Button>)}</div>
        <br />
        {props.links
        && <div>
          {'github' in props.links && <a href={props.links['github']}><FaGithub className="exp-icon" /></a>}
          {'docs' in props.links && <a href={props.links['docs']}><FaRegFilePdf className="exp-icon" /></a>}
          {'flowchart' in props.links && <a href={props.links['flowchart']}><FaSitemap className="exp-icon" /></a>}
        </div>
        }
      </MDBCard>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="heading">EXPERIENCE</h2>
      <div id="experience">
        <div>
          {exps.map((exp, i) => (
            <ExpCard
              key={i}
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
};

export default Experience;

