import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-5 py-2 px-5 gap-10">
        <div className="">
          <h5 className="text-[24px] font-[600]">Contact Us</h5>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col rounded-md border-2 py-1 px-3 gap-1 border-[#023d7c] w-[20%]">
              <h5 className="font-[600]">Landline Numbers</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">+51-6034xx89</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">+51-4009xx12</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">+51-2854xx65</h5>
          </div>
          <div className="flex flex-col rounded-md border-2 py-1 px-3 gap-1 border-[#023d7c] w-[20%]">
              <h5 className="font-[600]">E-mails</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">inquery@rcma.com</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">office@rcma.com</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">rcmaoffice@rcma.com</h5>
          </div>
          <div className="flex flex-col rounded-md border-2 py-1 px-3 gap-1 border-[#023d7c] w-[20%]">
              <h5 className="font-[600]">Social Handle</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">Instagram</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">Twitter</h5>
              <h5 className="cursor-pointer hover:text-[#023d7c]">Facebook</h5>
          </div>
        </div>
      </div>
      <div className="w-full mt-[14%]">

      <Footer/>
      </div>
    </div>
  )
}

export default ContactPage