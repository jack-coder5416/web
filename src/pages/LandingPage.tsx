
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageIcon from '../components/ImageIcon';
import { cover1 } from '../assets';


const LandingPage = () => {
    
  return (
   <div className=" flex flex-col">
      <div className="mr-[0.8%]  ">
            <Carousel autoPlay={true} infiniteLoop={true} >
                <div>
                    <ImageIcon url={cover1}/>
                </div>
                <div>
                    <ImageIcon url={cover1}/>
                </div>
                <div>
                    <ImageIcon url={cover1}/>
                </div>
            </Carousel>
      </div>
      <div className="flex flex-col mt-[10%]">
      <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5>
           <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5> <h5>hlo</h5>
           <h5>hlo</h5>
      </div>
   </div>
  )
}

export default LandingPage