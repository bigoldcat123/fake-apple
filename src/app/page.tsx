
import Image from "next/image";
import HomeBanner from "@/ui/HomeBanner";
export default function Home() {

  return (
    <>
      <div>
        <div className="space-y-3">
          <div className=" bg-slate-200 w-full overflow-hidden relative " style={{ height: '42rem' }}><HomeBanner></HomeBanner> <img src={'/home/visionpro.jpg'} className=" h-[100%] object-cover" ></img></div>
          <div className=" bg-slate-200 w-full overflow-hidden relative" style={{ height: '42rem' }}> <img src={'/home/iPhonepro.jpg'} className=" h-[100%] object-cover" ></img></div>
          <div className=" bg-slate-200 w-full overflow-hidden relative" style={{ height: '42rem' }}> <img src={'/home/iphone15.jpg'} className=" h-[100%] object-cover" ></img></div>
        </div>

        {/*  */}
        <div className=" flex flex-col md:flex-row flex-wrap justify-evenly">
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full overflow-hidden relative"> <img src={'/home/ipadpro.jpg'} className=" h-[100%] object-cover" ></img></div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full overflow-hidden relative"> <img src={'/home/education.jpg'} className=" h-[100%] object-cover" ></img></div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full overflow-hidden relative"> <img src={'/home/iwatch.jpg'} className=" h-[100%] object-cover" ></img></div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full overflow-hidden relative"> <img src={'/home/macbookair.jpg'} className=" h-[100%] object-cover" ></img></div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full overflow-hidden relative"> <img src={'/home/ipadair.jpg'} className=" h-[100%] object-cover" ></img></div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full overflow-hidden relative"> <img src={'/home/trade.jpg'} className=" h-[100%] object-cover" ></img></div>
        </div>
      </div>
    </>
  );
}
