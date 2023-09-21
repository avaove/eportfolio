import 'react-slideshow-image/dist/styles.css';

import {FaRegQuestionCircle} from 'react-icons/fa';

const data = require('../data.json');
const paintings = data['paintings'];
const images = [];

paintings.forEach(e => {
  images.push({url: process.env.PUBLIC_URL + e});
});

const Painting = () => {
  return (
    <section id="painting">

      <h2 className="heading">PAINTINGS</h2>
      <div className='grid'>
        {paintings.map((url, i) => (
          <div key={i}><img src={process.env.PUBLIC_URL + url} /></div>
        ))}
      </div>
      <div className="question-icon">
        <FaRegQuestionCircle className="proj-icon" />
        <p className="painting-caption">Soft pastel is the new medium I use in painting which is a recent hobby when offscreen.</p>
      </div>
    </section>
  );
};

export default Painting;
