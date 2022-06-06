import { Carousel } from 'react-carousel-minimal';

import slide1 from '../../assets/Xizmat-black-T-shirt-white.png';
import slide2 from '../../assets/Xizmat-white-cap-color.png';
import slide3 from '../../assets/Xizmat-white-T-shirt-color.png';
import slide4 from '../../assets/Xizmat-Spark.jpg';


function SliderMinimalistic() {
    const data = [
       { image: slide1},
       { image: slide2},
       { image: slide3},
       { image: slide4},
     ];
   
     return (
       <div className="mb-48">
           <div style={{padding: "0 20px"}}>
             <Carousel
               data={data}
               time={3000}
               width="850px"
               height="500px"
               radius="10px"
               automatic={true}
               dots={true}
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               thumbnails={true}
               thumbnailWidth="100px"
               style={{
                 maxWidth: "850px",
                 maxHeight: "500px",
                 margin: "40px auto",
               }}
             />
           </div>
       </div>
     );
   }
   
   export default SliderMinimalistic;