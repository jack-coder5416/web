import {  Logo1 } from "../assets"
import ImageIcon from "./ImageIcon"

const OrganisationBar = () => {
  return (
    <div className="flex flex-row bg-[#fff] items-center px-3 py-1 gap-2 cursor-pointer ">
        <ImageIcon url={Logo1} wt="40px" ht="40px"/>
        <h5 className="text-[#333] font-[600] text-[21px]">
            Regional Center For Military Authority, Kanpur
        </h5>
    </div>
  )
}

export default OrganisationBar