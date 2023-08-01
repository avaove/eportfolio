import 'react-slideshow-image/dist/styles.css';

import {FaRegQuestionCircle} from 'react-icons/fa';
import SimpleImageSlider from 'react-simple-image-slider';

const data = require('../data.json');
const paintings = data['paintings'];
const images = [];

paintings.forEach(element => {
  images.push({url: process.env.PUBLIC_URL + element});
});

const Painting = () => {
  return (
    <section id="painting">

      <h2 className="heading">PAINTINGS</h2>
      <div data-aos="fade-right">
        <div style={{'margin': 'auto', 'width': '950px'}}>
          <SimpleImageSlider
            width={950}
            height={750}
            images={images}
            showBullets={false}
            showNavs={true}
            navSize={40}
            navStyle={1}
          />
          <br/>
          <div className="question">
            <FaRegQuestionCircle className="proj-icon" />
            <p className="painting-caption">Soft pastels have become the new medium I use in painting which has become a hobby while I am offscreen.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Painting;
