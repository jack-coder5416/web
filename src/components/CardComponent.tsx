
import ImageIcon from "./ImageIcon"


const CardComponent: React.FC<{
  HeadlineText?:string;
  imageUrl?:string|undefined;
  onClick?:()=>void
}> = ({HeadlineText, imageUrl, onClick }) => {
  return (
    <div className="rounded-sm p-4 border shadow-md hover:scale-[1.02] cursor-pointer" onClick={onClick}>
      <ImageIcon url={imageUrl} className="rounded-sm"/>
      <div className="mt-2 flex flex-col">
        <h5 className="text-[#333] font-[500] text-[18px]">Photo Gallery: {HeadlineText}</h5>
      </div>
    </div>
  )
}

export default CardComponent