import { useNavigate } from "react-router-dom";
import {  Logo1 } from "../assets"
import ImageIcon from "./ImageIcon"

const OrganisationBar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    // Use the navigate function to go to the "/about" route
    navigate('/');
  };
  return (
    <div className="flex flex-row bg-[#fff] items-center px-3 py-1 gap-2 cursor-pointer " onClick={handleHomeClick}>
        <ImageIcon url={Logo1} wt="40px" ht="40px"/>
        <h5 className="text-[#333] font-[600] text-[21px]">
            Regional Center For Military Authority, Kanpur
        </h5>
    </div>
  )
}

export default OrganisationBar