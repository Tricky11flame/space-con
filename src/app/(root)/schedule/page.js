import SchedulePage from "@/components/ScehdulePage";
import Navbar from "@/components/Navbar";
export default function Page(){
    return (
        <>
        <Navbar/>
        <div className="fixed w-[100%]"><img src="bg-img-blur.jpg" alt="" className="lmao-blur z-[-50] w-[100%]" /></div>
        <div className="fixed flex justify-center"><img src="bg-img.jpg" alt="" className="lmao-real z-[-49] w-[100%] " loading="lazy" /></div>
        <SchedulePage/>
        </>
    )
}