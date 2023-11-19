import { useState } from "react"
import { CardIconDummy } from "../assets"
import ImageIcon from "./ImageIcon"
import Modal from "react-modal";


const OrgCard: React.FC<{
    post?:string,
    name?:string,
    url?:string
}> = ({post, name, url=CardIconDummy}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="">
      <div className=' w-auto flex flex-col rounded-[10px] shadow-md items-center border border-[#1168eae1] ml-[15%] mr-[15%] py-2 hover:scale-[1.08] cursor-pointer' onClick={openModal}>
        <div className='w-[50%]'>
              <ImageIcon url={url} wt="50px" ht="50px" className="rounded-[100%] ml-[43%]"/>
        </div>
        <div className='w-full'>
              <h5 className="text-[16px] font-[600]">{name}</h5>
              <h5 className="text-[16px] font-[600]">({post})</h5>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 11 },
        }}
      >
        <div className="flex flex-col gap-5 px-4">
          <div className="flex flex-row ml-[97%] py-1 justify-center bg-[#e0dadaec] rounded-[100%] shadow-lg cursor-pointer text-[#f44040] font-[600] text-[18px] border-2 border-[#f44040] hover:scale-[1.05]" onClick={closeModal}>
             X
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3">
              <ImageIcon url={url} wt="90px" ht="90px" className="border-4 border-[#1168eae1] hover:scale-[1.08]"/>
              <div className="flex flex-col items-center font-[600] text-[#333] text-[20px]">
                <h5>{name}</h5>
                <h5 className="text-[18px]">({post})</h5>
              </div>
            </div>
            <p className="text-[16px]">
              Mr. {name} serving as {post} from last 20 years.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default OrgCard