import SchedulePage from "@/components/ScehdulePage";
import Navbar from "@/components/Navbar";
export default function Page(){
    return (
        <>
        <Navbar/>
        <div className="fixed w-full"><img src="/background/home-bg-blur.png" alt="" className="lmao-blur z-[-50] w-full" /></div>
        <div className="fixed flex justify-center w-full"><img src="/background/home-bg.png" alt="" className="lmao-real z-[-49] w-full " loading="lazy" /></div>
        <SchedulePage/>
        </>
    )
}