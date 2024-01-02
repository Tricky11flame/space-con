import Image from 'next/image';
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="w-full min-h-full bg-spaceCon-opbg relative mt-24">
      <div className="flex text-white">
        <div className="w-1/3 h-full flex flex-col p-6">
          <div className="mx-auto w-full">
            <img src="../../../nk.png" alt="" className="bg-transparent mx-auto h-40" style={{ opacity: "0.8" }} />
          </div>
        </div>
        <div className="w-1/6">
          <div className="text-2 p-8 ">
            <p className="font-bold">ADDRESS</p>
            <br />
            <p className="font-bold">Netaji Subhas University of Technology</p>
            <p className="text-white">Sector-3, Dwarka</p>
            <p className="text-white">New Delhi-110078</p>
          </div>

          <div className="text-2 px-8">
            <p className="font-bold">GMAIL</p>
            <br />
            <p className="hover:cursor-pointer font-bold hover:text-black">Nakshatra@gmail.com</p>
          </div>
          <br />
        </div>
        <div className="w-1/6 p-8">
          <div className="px-8 text-2">
            <p className="font-bold">PRESIDENTS</p>
            <br />
            <p className="font-bold">Ayush Jha</p>
            <p>+918860959917</p>
            <p className="font-bold">Kritika</p>
            <p>+919654407088</p>
          </div>
        </div>
        <div className="w-1/3 p-8">
          <div className="w-40 h-10 mx-auto flex px-4 rounded-md hover:cursor-pointer hover:bg-[#A367B1] hover:text-black duration-300">
            <span className="pt-1"><FaDiscord size={30} /></span>
            <p className="mx-auto pl-1 pt-2 font-bold">
              Join Discord
            </p>
          </div>

          <div className="mx-auto flex gap-8 p-8 justify-center items-center sm:flex-col md:flex-row">
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><FaFacebook size={40} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"> <FaTwitter size={40} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"> <FaInstagram size={40} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><FaLinkedin size={40} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><SiGmail size={40} /></span>
          </div>
        </div>
      </div>
      <div className="w-full h-25 flex justify-center items-center p-6 border-t-2 border-voilet-800">
        <div className="flex justify-center items-center gap-8">
          <p className="text-white font-bold hover:cursor-pointer hover:text-black duration-300">Terms and Condition</p>
          <p className="text-white hover:cursor-pointer font-bold hover:text-black duration-300">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
