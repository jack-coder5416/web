import { facebook, insta, twitter } from "../assets"
import ImageIcon from "./ImageIcon"


const Footer = () => {
  return (
        <div className="flex flex-col py-1 px-5 bg-[#023d7c] mt-[3%] bottom-0 text-[#fff] w-[99%] rounded-t-xl">
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col cursor-pointer  gap-4 items-center">
                   <h5 className="cursor-pointer">| Social Links |</h5>
                   <div className="gap-5 flex flex-row">
                    <ImageIcon url={insta} wt="30px" ht="30px" className="cursor-pointer"/>
                    <ImageIcon url={facebook} wt="30px" ht="30px" className="cursor-pointer"/>  
                    <ImageIcon url={twitter} wt="30px" ht="30px" className="cursor-pointer"/>  
                   </div>
                </div>
                <div className="flex flex-col items-center gap-3 ">
                   <h5 className="cursor-pointer hover:text-[#65c7ee]">| Terms & Conditions |</h5>
                   <h5 className="cursor-pointer hover:text-[#65c7ee]">| Policies |</h5>
                   <h5 className="cursor-pointer hover:text-[#65c7ee]">| Help |</h5>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <h5 className="cursor-pointer hover:text-[#65c7ee]">| Copyright Policy |</h5>
                    <h5 className="cursor-pointer hover:text-[#65c7ee]">| Privacy |</h5>
                </div>
            </div>
            <div className="mt-[3%] ml-[26%] mb-5">
              <h5 className="">Copyright © 2023, RCMA (Kanpur), DRDO, Ministry of Defence, Government of India</h5>
            </div>
        </div>
  )
}

export default Footer