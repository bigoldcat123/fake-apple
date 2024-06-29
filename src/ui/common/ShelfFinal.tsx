'use client'
import { getGoodsImgs } from "@/lib/data"
import { useRef } from "react"


export default  function ShelfFinal({ FclassName, CclassName, RclassName, first, secend, children }: {
    FclassName: string,
    CclassName: string,
    RclassName: string,
    children: React.ReactNode,
    first: string,
    secend: string
}) {
    const container = useRef<HTMLDivElement>(null)
    function handleClick (direction:number) {
        if(container.current) {
            if(direction == 0) {
                // container.current.scrollLeft = container.current.scrollLeft - 468
                container.current.scrollTo({
                    left:container.current.scrollLeft - 468,
                    behavior:'smooth'
                })
            }else {
                // container.current.scrollLeft = container.current.scrollLeft + 468
                container.current.scrollTo({
                    left:container.current.scrollLeft + 468,
                    behavior:'smooth'
                })
            }
        }
    }
    return (
        <div>
            <h3 className="pl-5 md:pl-24">
                <span className="  font-[540] text-2xl">{first}</span>
                <span className="  font-[540] text-2xl text-gray-500">{secend}</span>
            </h3>

            <div  className={FclassName + ' relative overflow-y-hidden  w-full '}>
                <div ref={container} className={CclassName + ' snap-x snap-mandatory box-content flex overflow-x-auto flex-row w-full  space-x-6'}>
                    <div className="pl-2 md:pl-20"></div>
                    {children}
                    <div className=" snap-center snap-always flex-shrink-0 w-[13rem] pl-5 "> liubai</div>
                </div>
                <div onClick={() => handleClick(0)} className=" absolute left-0 top-1/2   rounded-full h-[3.25rem] aspect-square bg-slate-300 leading-[3.25rem] text-center">left</div>
                <div onClick={() => handleClick(1)} className=" absolute top-1/2  right-0 rounded-full h-[3.25rem] aspect-square bg-slate-300 leading-[3.25rem] text-center">right</div>
            </div>
        </div>
    )

}