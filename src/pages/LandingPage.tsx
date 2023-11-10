
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageIcon from '../components/ImageIcon';
import { cover1 } from '../assets';
import Marquee from "react-fast-marquee";

const LandingPage = () => {
    
  return (
   <div className=" flex flex-col mt-[-46%]">
      <div className="mr-[0.8%]">
            <Carousel autoPlay={true} infiniteLoop={true}>
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
      <div className="flex flex-row h-[53%] border-2">
           <Marquee direction="up">
            <h5>1</h5>
            <h5>2</h5>
            <h5>3</h5>
            <h5>4</h5>
            <h5>5</h5>
            <h5>6</h5>
            <h5>7</h5>
            <h5>8</h5>
            <h5>9</h5>

           </Marquee>
        </div>
      </div>
   </div>
  )
}

export default LandingPage