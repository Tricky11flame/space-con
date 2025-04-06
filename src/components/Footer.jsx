import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="w-full min-h-full bg-spaceCon-opbg relative mt-24 font">
      <div className="flex text-white justify-between items-center p-8 flex-wrap gap-8">
        <div className="h-full flex flex-col">
          {/* <div className="mx-auto w-full">
            <img src="team/about-team.png" alt="" className="bg-transparent mx-auto h-52" style={{ opacity: "0.8" }} />
          </div> */}
        </div>
        <div className="">
          <div className="text-2">
            <Link href='' className="font-bold text-xl text-spaceCon-q">ADDRESS</Link>
            <br/>
            <Link href='https://maps.app.goo.gl/mua2UzzfGm8RkdEdA' className="font-bold">Netaji Subhas University of Technology</Link>
            <br/>
            <Link href='https://maps.app.goo.gl/mua2UzzfGm8RkdEdA' className="text-white">Sector-3, Dwarka</Link>
            <Link href='https://maps.app.goo.gl/mua2UzzfGm8RkdEdA' className="text-white">New Delhi-110078</Link>
            <br />
          </div>

          <div className="text-2">
            <Link href='' className="font-bold text-xl text-spaceCon-q">GMAIL</Link>
            <br/>
            <Link href={"https://mail.google.com/mail/u/0/?fs=1&to=nakshatransit@gmail.com&su=THANK_YOU&body=YOUR_ENQUIRY&tf=cm"} className="hover:cursor-pointer font-bold hover:text-spaceCon-tertiary">nakshatransit@gmail.com</Link>
          </div>
        </div>
        <div className="md:px-0 lg:px-8">
          <div className="text-2">
            <p className="font-bold text-xl text-spaceCon-q">PRESIDENTS</p>
            <p className="font-bold">Ayush Jha</p>
            <p>+918860959917</p>
            <p className="font-bold">Kritika</p>
            <p>+919654407088</p>
          </div>
        </div>
        <div className="hidden xl:block">
          <Link href='https://discord.gg/uZQAUPgS' className="w-52 h-10 mx-auto flex justify-center items-center rounded-md hover:cursor-pointer hover:bg-[#A367B1] hover:text-black duration-300 gap-2">
            <span className=""><FaDiscord size={30} /></span>
            <p className="font-bold">
              Join Discord
            </p>
          </Link>

          <div className="mx-auto flex gap-8 pt-8 justify-center items-center sm:flex-col md:flex-row">
            <Link  href='https://www.facebook.com/Nakshatra.DU' className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><FaFacebook size={40} /></Link>
            {/* <Link href='' className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"> <FaTwitter size={40} /></Link> */}
            <Link href='https://www.instagram.com/nakshatra_nsut/' className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"> <FaInstagram size={40} /></Link>
            <Link href='https://www.linkedin.com/in/nakshatransut/' className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><FaLinkedin size={40} /></Link>
            <Link href='' className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><SiGmail size={40} /></Link>
          </div>
        </div>
      </div>
        <div className="xl:hidden">
          <div className="w-52 h-10 mx-auto flex justify-center items-center rounded-md hover:cursor-pointer hover:bg-[#A367B1] hover:text-black duration-300 gap-2">
            <span className=""><FaDiscord size={30} /></span>
            <p className="font-bold">
              Join Discord
            </p>
          </div>

          <div className="mx-auto flex gap-5 py-4 justify-center items-center">
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><FaFacebook size={30} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"> <FaTwitter size={30} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"> <FaInstagram size={30} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><FaLinkedin size={30} /></span>
            <span className="hover:cursor-pointer hover:text-spaceCon-tertiary duration-300"><SiGmail size={30} /></span>
          </div>
        </div>

      
      <div className="w-full h-25 flex justify-center items-center py-6 border-t-2 border-voilet-800">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <p className="text-white font-bold hover:cursor-pointer hover:text-spaceCon-tertiary duration-300">Terms and Condition</p>
          <p className="text-white hover:cursor-pointer font-bold hover:text-spaceCon-tertiary duration-300">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
