export default function Shelf({ height }: {
    height: number
}) {
    console.log(height);
    
    return (<>

        <h3 className="pl-5 md:pl-24">
            <span className="  font-[540] text-2xl">上新了，</span>
            <span className="  font-[540] text-2xl text-gray-500">快来认识一下这些新朋友。</span>
        </h3>
        <div className={` relative h-[34rem] overflow-y-hidden pt-5`}>
            <div className={` snap-x snap-mandatory h-[34rem] pb-8 pt-2 flex flex-row overflow-x-auto`}>
                <div className="pl-2 md:pl-20"></div>
                <div className=" snap-center snap-always flex-shrink-0 w-[26rem] pl-5 "> <div className=" hover:scale-[1.01] hover:shadow-md shadow-sm transition-all duration-300 ease-in-out h-full w-full rounded-xl bg-slate-100"></div></div>
                <div className=" snap-center snap-always flex-shrink-0 w-[26rem] pl-5 "> <div className=" hover:scale-[1.01] hover:shadow-md shadow-sm transition-all duration-300 ease-in-out h-full w-full rounded-xl bg-slate-100"></div></div>
                <div className=" snap-center snap-always flex-shrink-0 w-[26rem] pl-5 "> <div className=" hover:scale-[1.01] hover:shadow-md shadow-sm transition-all duration-300 ease-in-out h-full w-full rounded-xl bg-slate-100"></div></div>
                <div className=" snap-center snap-always flex-shrink-0 w-[26rem] pl-5 "> <div className=" hover:scale-[1.01] hover:shadow-md shadow-sm transition-all duration-300 ease-in-out h-full w-full rounded-xl bg-slate-100"></div></div>
                <div className=" snap-center snap-always flex-shrink-0 w-[26rem] pl-5 "> <div className=" hover:scale-[1.01] hover:shadow-md shadow-sm transition-all duration-300 ease-in-out h-full w-full rounded-xl bg-slate-100"></div></div>
                <div className=" snap-center snap-always flex-shrink-0 w-[26rem] pl-5 "> <div className=" hover:scale-[1.01] hover:shadow-md shadow-sm transition-all duration-300 ease-in-out h-full w-full rounded-xl bg-slate-100"></div></div>
                <div className=" snap-center snap-always flex-shrink-0 w-[13rem] pl-5 "> liubai</div>
            </div>
            <div className=" absolute opacity-50 hover:bg-slate-500 cursor-pointer top-1/2 right-4 bg-slate-400 aspect-square w-12 rounded-full text-center leading-[3rem]">{'>'}</div>
            <div className=" absolute opacity-50 hover:bg-slate-500 cursor-pointer top-1/2 left-4 bg-slate-400 aspect-square w-12 rounded-full text-center leading-[3rem]">{'<'}</div>
        </div>
        </>
    )

}