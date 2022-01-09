import 'react-slideshow-image/dist/styles.css'
import SimpleImageSlider from "react-simple-image-slider";
import { FaGithub, FaDev } from "react-icons/fa";
var data = require('../data.json');
const paintings = data["paintings"];
let images = [];

paintings.forEach(element => {
  images.push({ url: process.env.PUBLIC_URL + element },)
});

const Painting = (props) => {
    return (
      <section id="painting">
        <h2 className="heading">───── Paintings ─────</h2>
        <div style={{"margin": "auto", "width": "950px"}}>
          <SimpleImageSlider
          width={950}
          height={750}
          images={images}
          showBullets={false}
          showNavs={true}
          navSize={40}
          navStyle={1}
        />
        </div>
      </section>
    )
  }
  
  export default Painting;