import { getGoodsImgs } from "@/lib/data"


export default async function ShelfFinal({ FclassName, CclassName, RclassName, first,secend, children }: {
    FclassName: string,
    CclassName: string,
    RclassName: string,
    children: React.ReactNode,
    first:string,
    secend:string
}) {
    const data = await getGoodsImgs()
    return (
        <div>
            <h3 className="pl-5 md:pl-24">
                <span className="  font-[540] text-2xl">{first}</span>
                <span className="  font-[540] text-2xl text-gray-500">{secend}</span>
            </h3>

            <div className={FclassName + ' overflow-y-hidden  w-full '}>
                <div className={CclassName + ' snap-x snap-mandatory box-content flex overflow-x-auto flex-row w-full  space-x-6'}>
                    <div className="pl-2 md:pl-20"></div>
                    {children}
                    <div className=" snap-center snap-always flex-shrink-0 w-[13rem] pl-5 "> liubai</div>
                </div>
            </div>
        </div>
    )

}