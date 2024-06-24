'use client'
import Image from "next/image";
import { useRef, useState } from "react";
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
// style={{height:'40rem',width:'calc(50% - 1rem)'}}
export default function Home() {
  const xx = useRef([0])
  const [d,setD] = useState([0])
  const s = useRef<HTMLDivElement>(null)
  return (
    <>
      <div>
        <div className="space-y-3">
          <div className=" bg-slate-200 w-full" style={{height:'42rem'}}>
            <div ref={s} className=" h-0 overflow-hidden w-72 bg-slate-400 transition-[height] duration-300 ease-in-out">
              {
                xx.current.map((x,i) => {
                  return <div className=" h-10" key={i}>{x}</div>
                })
              }
            </div>
            <button onClick={() => {
              console.log('e');
              xx.current.push(1)
              s.current!.style.height = `${xx.current.length * 40}px`
              setD( Array.from(xx.current))
              
            }} >add</button>
          </div>
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
