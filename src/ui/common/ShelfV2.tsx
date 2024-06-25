import { getGoodsImgs } from "@/lib/data"

export default async function Shelf() {
    const data = await getGoodsImgs()
    return (<>
        <div className={` relative h-[12rem] overflow-y-hidden pt-5`}>
            <div className={` snap-x snap-mandatory h-[12rem] pb-8 pt-2 flex flex-row overflow-x-auto`}>
                <div className="pl-2 md:pl-20"></div>
                {
                    data.map((x, i) => {
                        return (
                            <div key={i} className=" cursor-pointer snap-center snap-always flex-shrink-0 w-[10rem]  ">
                                <div className=" flex flex-col items-center justify-center space-y-2">
                                    <div>
                                        <img className=" h-[78px] w-[120px]" src={x.link} alt="" />
                                    </div>
                                    <div className=" hover:underline font-bold">{x.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className=" snap-center snap-always flex-shrink-0 w-[13rem] pl-5 "> liubai</div>
            </div>
            <div className=" absolute opacity-50 hover:bg-slate-500 cursor-pointer top-1/3 right-4 bg-slate-400 aspect-square w-12 rounded-full text-center leading-[3rem]">{'>'}</div>
            <div className=" absolute opacity-50 hover:bg-slate-500 cursor-pointer top-1/3 left-4 bg-slate-400 aspect-square w-12 rounded-full text-center leading-[3rem]">{'<'}</div>
        </div>
    </>
    )

}