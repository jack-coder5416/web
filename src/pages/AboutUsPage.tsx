import { AboutImage } from "../assets"
import Footer from "../components/Footer"
import ImageIcon from "../components/ImageIcon"

const AboutUsPage = () => {
  return (
    <div className='flex flex-col'>
      <div className="flex flex-col mt-5 px-10 py-2 gap-4">
        <h5 className="text-[24px] font-[600]">About Us</h5>
        <div className="flex flex-row">
          <p className="w-full shadow-md py-1">
              DRDO is the R&D wing of Ministry of Defence, Govt of India, with a vision to empower India with cutting-edge defence technologies and a mission to achieve self-reliance in critical defence technologies and systems, while equipping our armed forces with state-of-the-art weapon systems and equipment in accordance with requirements laid down by the three Services. DRDO's pursuit of self-reliance and successful indigenous development and production of strategic systems and platforms such as Agni and Prithvi series of missiles; light combat aircraft, Tejas; multi-barrel rocket launcher, Pinaka; air defence system, Akash; a wide range of radars and electronic warfare systems; etc., have given quantum jump to India's military might, generating effective deterrence and providing crucial leverage.
              "Balasya Mulam Vigyanam"—the source of strength is science-drives the nation in peace and war. DRDO has firm determination to make the nation strong and self-reliant in terms of science and technology, especially in the field of military technologies.
          </p>
          <div className="w-full">
            <ImageIcon url={AboutImage} wt="70%" ht="70%" className="ml-[17%] border-4 border-[#1168ea91] hover:scale-[1.02]"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUsPage