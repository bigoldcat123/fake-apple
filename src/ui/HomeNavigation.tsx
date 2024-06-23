'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HomeNavigation() {
    const banner = useRef<HTMLDivElement>(null)
    const banner_bg = useRef<HTMLDivElement>(null)
    // const s = banner.current!.clientHeight

    const data = [
        [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,,2,3,4,5,6,7,8,2,3,4,5,6,7,8,,2,3,4,5,6,7,8],
        [1,2,3,4,5,6,7,8,92,3,4,5,6,7,8,,2,3,4,5,6,7,8,2],
        [1,2,3,4,5,6,7,8,9,6,7,8,,2,3,4,5,6,7],
        [1,2,3,4,5,6,7,8,9,7,8,9,2],
        [1,2,3,4,5,6,7,8,9],
    ]
    const [d,setD] = useState(data[0])
    function showBanner(size:number) {
        setD(data[(size - 1) % 5])
        if (banner.current)
            banner.current.style.transform = 'translateY(-1px)'
        if (banner_bg.current)
            banner_bg.current.style.transform = 'translateY(10rem)'
    }
    function hideBanner(size:number) {
        console.log(size);
        if (banner.current)
            banner.current.style.transform = `translateY(-${size*3}px)`
        if (banner_bg.current)
            banner_bg.current.style.transform = 'translateY(-100vh)'
    }
    return (
        <>
            <div className=" relative z-[3]" style={{ backgroundColor: 'gray', height: '2.5rem', position: 'fixed', width: '100%' }}>
                <div style={{ zIndex: '100', alignItems: 'center', display: 'flex', gap: '3rem', height: '100%', width: '100%', justifyContent: 'center', position: 'relative' }}>
                    <div>
                        apple
                    </div>
                    <div onMouseEnter={(e) => showBanner(1)}>123</div>
                    <div onMouseEnter={(e) => showBanner(2)}>123</div>
                    <div onMouseEnter={(e) => showBanner(3)}>123</div>
                    <div onMouseEnter={(e) => showBanner(4)}>123</div>
                    <div onMouseEnter={(e) => showBanner(5)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                    <div onMouseEnter={(e) => showBanner(e.clientY)}>123</div>
                </div>
                <div ref={banner} onMouseLeave={(e) => {hideBanner(banner.current!.offsetHeight)}} className={ `z-[50] relative duration-500 ease-in-out transition-all translate-y-[-100vh]`} style={{ width: '100%', backgroundColor: 'gray' }}>
                    {d.map((x,i) => {
                        return <div key={i}>{x}</div>
                    })}
                </div>
                <div ref={banner_bg} className=" top-0 left-0 absolute backdrop-blur-sm z-[0] h-screen w-full transition-all duration-300 ease-in-out translate-y-[-100vh]" >
                </div>

            </div>
            <div className=" relative z-[2]" style={{ height: '2.5rem', width: '100%' }}></div>
            <div>some message</div>
        </>
    )
}