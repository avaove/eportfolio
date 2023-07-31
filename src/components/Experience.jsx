import {FaChartBar, FaGithub, FaRegFilePdf} from 'react-icons/fa';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardSubTitle, MDBCardText, MDBCardTitle} from 'mdb-react-ui-kit';

import {Button} from 'react-bootstrap';
import {React} from 'react';

const data = require('../data.json');
const exps = data['experiences'];

const ExpCard = props => {
  return (
    <div data-aos="fade-right">
      <MDBCard narrow col='4' className='exp-card'>
        <MDBCardBody>
          <MDBCardTitle>{props.job}</MDBCardTitle>
          <MDBCardSubTitle><a className="company" href={props.companylink}>{props.company}</a></MDBCardSubTitle>
          <MDBCardText style={{'textAlign': 'left'}}><ul>{props.desc.map(point => <li key="">{point}</li>)}</ul></MDBCardText>
          <MDBCardText>
            <p style={{'color': '#3ca371'}}>{props.date}</p>
          </MDBCardText>
        </MDBCardBody>
        {props.img != '' ? <MDBCardImage className='exp-img' position='bottom' src={process.env.PUBLIC_URL + props.img} overlay='white-slight' waves /> : null}
        {props.img != '' ? <MDBCardText class="caption">{props.caption}</MDBCardText> : null}
        <div>{props.skills.map((skill, i) => <Button key={i} disabled variant="dark">{skill}</Button>)}</div>
        <br />
        <div>
          {'dashboard' in props.links ? <a href={props.links['dashboard']}><FaChartBar className="exp-icon" /><p>dashboard</p></a> : null}
          {'github' in props.links ? <a href={props.links['github']}><FaGithub className="exp-icon" /></a> : null}
          {'docs' in props.links ? <a href={props.links['docs']}><FaRegFilePdf className="exp-icon" /></a> : null}
        </div>
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

