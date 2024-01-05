import Navbar from "@/components/Navbar"
import Us from "@/components/Us"
export default function Page(){
    return(
        <>
        
        <div className="fixed w-full"><img src="/background/home-bg-blur.png" alt="" className="lmao-blur z-[-50] w-full" /></div>
        <div className="fixed flex justify-center w-full"><img src="/background/home-bg.png" alt="" className="lmao-real z-[-49] w-full " loading="lazy" /></div>
        <Navbar/>
        <Us/>
        
        </>
    )
}