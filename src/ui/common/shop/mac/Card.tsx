import Image from 'next/image'
export default function Card({card}: {
    card:{
        image: string;
        hue: string[];
        name: string;
        secondName: string;
        chips: string;
        des: string[];
        price: string;
    }
}) {
    return (
        <div className="  w-[23.25rem] flex flex-col items-center  space-y-3">
            <div className=' h-60 w-full flex items-end overflow-hidden'>
                <img src={card.image} alt={card.name} className='w-full h-full object-contain'></img>
            </div>
            <div className='flex flex-row items-center justify-center space-x-1'>
                {card.hue.map((x,i) => {
                    return <Image src={x} key={i} alt={card.name} width={12} height={12}></Image>
                })}
            </div>
            <div>new</div>
            <div className=' text-center font-bold text-2xl'>
                <div>{card.name}</div>
                <div>{card.secondName}</div>
            </div>
            <div className=' text-center text-sm'>
                {card.des.map((x,i) => {
                    return <div key={i}>{x}</div>
                })}
            </div>
            <div className=' font-bold'>{card.price}</div>
        </div>
    )
}