
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageIcon from '../../components/ImageIcon';
import { carou1, carou2, carou3 } from '../../assets';
import './LandingPage.css'
import Footer from "../../components/Footer";

const LandingPage = () => {
    
  return (
   <div className=" flex flex-col">
      <div className="mr-[0.8%] h-[1%] flex">
            <Carousel autoPlay={true} infiniteLoop={true} >
                <div>
                    <ImageIcon url={carou1} wt="10px" ht="10px"/>
                </div>
                <div>
                    <ImageIcon url={carou2}/>
                </div>
                <div>
                    <ImageIcon url={carou3}/>
                </div>
            </Carousel>
      </div>
      <div className="flex flex-row px-7 mb-[10%]">
           <div className="w-[70%]">
            Hlo
           </div>
           <div className=" flex flex-col w-[30%]">
              <h5 className="text-[#333] font-[600] text-[20px]">Notifications/Events</h5>
              <div className="flex flex-col overflow-hidden border-2 border-[#023d7c] px-2 shadow-md">
                  <div className="marquee-container">
                    <h5 className="marquee-item">MKI-353 Oil Certification</h5>
                    <h5 className="marquee-item">Annual Function</h5>
                    <h5 className="marquee-item">Independence Day</h5>
                    <h5 className="marquee-item">Diwali Function</h5>
                    <h5 className="marquee-item ">Launch Day</h5>
                    <h5 className="marquee-item">AirCraft Syncronize</h5>
                    <h5 className="marquee-item">Shaft Repairement</h5>
                    <h5 className="marquee-item">KIC Nominal</h5>
                    <h5 className="marquee-item">CM Yojna</h5>

                  </div>
              </div>
           </div>
      </div>
      <Footer/>
   </div>
  )
}

export default LandingPage