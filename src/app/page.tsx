import Image from "next/image";
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
export default function Home() {
  return (
    <>
      <div>
        <div className="space-y-3">
          <div className=" bg-slate-200 w-full" style={{height:'42rem'}}>1</div>
          <div className=" bg-slate-200 w-full" style={{height:'42rem'}}>2</div>
          <div className=" bg-slate-200 w-full" style={{height:'42rem'}}>3</div>
        </div>

        {/*  */}
        <div className=" flex flex-col md:flex-row flex-wrap justify-evenly">
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full">1</div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full">2</div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full">3</div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full">4</div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full">5</div>
          <div className=" mt-3 md:w-my-half bg-slate-300 h-[36rem] w-full">6</div>
        </div>
      </div>
    </>
  );
}
