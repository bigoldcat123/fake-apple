'use client'

import { useEffect, useRef, useState } from "react"
import Card from "./Card"

export default function Shelf({ macs }: {
    macs: any[][]
}) {
    const [currentMenu, setCurrentMenu] = useState(0)
    const item = useRef<HTMLDivElement>(null)
    const cards = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries[0].intersectionRatio);
            console.log('e');
            if (entries[0].intersectionRatio > 0.5) {
                
                entries[0].target.classList.remove('opacity-0')
                entries[0].target.classList.add('an-test2')
            }
        }, {
            'threshold': 0.5,
        })
        observer.observe(item.current!)
    }, [item.current])
    const handChange = (num: number) => {
        cards.current?.classList.add('opacity-0')
        cards.current?.classList.remove('opacity-100')
        setTimeout(() => {
            setCurrentMenu(num);
            cards.current?.classList.add('opacity-100')
            cards.current?.classList.remove('opacity-0')
        }, 500);
    }
    return (
        <div ref={item} className=" opacity-0  p-12 bg-gray-50">
            <div className=" flex justify-between py-12">
                <p className=" text-5xl font-bold">全系产品细细看。</p>
                <p className=" text-sm text-blue-500">比较各款机型</p>
            </div>
            <div>
                {/* button */}
                <div className="flex mb-16 w-[23.435rem] h-[2.5rem] bg-white justify-between items-center rounded-full">
                    <div onClick={() => handChange(0)} className={` cursor-pointer h-full leading-[2.5rem] px-6 rounded-full ${currentMenu == 0 ? 'bg-black text-white ' : ''}`}>笔记本电脑</div>
                    <div onClick={() => handChange(1)} className={` cursor-pointer h-full leading-[2.5rem] px-6 rounded-full ${currentMenu == 1 ? 'bg-black text-white ' : ''}`}>台式电脑</div>
                    <div onClick={() => handChange(2)} className={` cursor-pointer h-full leading-[2.5rem] px-6 rounded-full ${currentMenu == 2 ? 'bg-black text-white ' : ''}`}>显示器</div>
                </div>
                <div ref={cards} className=" flex space-x-16 transition-all duration-500 ease">
                    {macs[currentMenu].map((x, i) => {
                        return <Card key={i} card={x}></Card>
                    })}
                </div>
            </div>
        </div>
    )
}