export default function NewGoodCard({ card, heightClass,widthClass }: {
    card: {
        category: string;
        title: string;
        des: string;
        colorCategory: string;
        color: string;
        imgLink: string;
    },
    heightClass:string,
    widthClass:string
}) {
    return (
        <div className=" cursor-pointer snap-center snap-always flex-shrink-0 flex items-center">
            <div className={`${heightClass}  w-full text-white`}>
                <div className={`${widthClass} shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out text-${card.color} space-y-2 h-full  bg-cover rounded-3xl p-8`} style={{ backgroundImage: `url(${card.imgLink})` }}>
                    <div className={` text-sm ${card.colorCategory == 'gray' ? ' text-gray-400':' text-white'}`}>{card.category}</div>
                    <div className={" text-2xl font-bold"}>{card.title}</div>
                    <div className={""}>{card.des}</div>
                </div>
            </div>
        </div>

    )
}