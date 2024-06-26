
export default function GoodCard({card}: {
    card:{
        title: string;
        _new: string;
        price: string;
        imgLink: string;
        hueLinks: string[];
    }
}) {

    return (
        <div className=" cursor-pointer snap-center snap-always flex-shrink-0 flex items-center">
            <div className={`h-[31.25rem]  w-full`}>
                <div className={`w-[19.5625rem] bg-white text-xl shadow-md  hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out  space-y-2 h-full  bg-cover rounded-3xl p-[1.875rem]`} >
                    <div className=" w-[15.8125rem] h-[16.9375rem] pt-[2.5625rem]">
                        <img src={card.imgLink} className=" w[14.375rem] aspect-square" alt="" />
                    </div>
                    <div className=" ">
                        <div className="  flex flex-row justify-center h-[3.625rem] pt-[1.1875rem] items-center space-x-2">
                           {card.hueLinks.map((x,i) => {
                            return <img key={i} className=" aspect-square h-[12px]" src={x} alt="" />
                           })}
                        </div>
                        <div className="text-[0.7rem] h-[1.4375rem] font-bold text-orange-600">
                        {card._new}
                        </div>
                        <div className="font-bold text-base h-[1.4375rem]">
                            {card.title}
                        </div>
                        <div className=" h-[1.1878rem] text-sm mt-[2.375rem]">
                            {card.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}