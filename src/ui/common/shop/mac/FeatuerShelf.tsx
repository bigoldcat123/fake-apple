'use client'

import { useRef } from "react"
import parse from 'html-react-parser'
import React from "react"
export default function FeatureShelf({ children, childrenHeight = '0rem', childrenWidth = '0rem', information }: {
    children: React.ReactNode,
    childrenHeight: string // 0rem,
    childrenWidth: string // 0rem
    information?: string[]
}) {
    const container = useRef<HTMLDivElement>(null)
    function moveBy(direction: number) {
        if (container.current) {
            container.current.scrollTo({ left: container.current.scrollLeft + Number.parseInt(childrenWidth.replace('rem', '')) * direction * 16, behavior: 'smooth' })
        }
    }
    return (
        <>
            <div >
                <div className=" font-bold text-5xl px-12 space-y-3">
                    {information?.map((x, i) => {
                        return (
                            <p key={i}>{x}</p>
                        )
                    })}
                </div>
                <div className={`overflow-hidden my-12 `} style={{ height: childrenHeight }}>

                    <div ref={container} className=" snap-x snap-mandatory flex space-x-5 overflow-x-auto overflow-y-hidden">
                        <div className="min-w-12"></div>
                        {children}
                        <div className="min-w-16"></div>
                    </div>
                </div>
                <div className=" flex justify-end pr-16 space-x-5">
                    <button onClick={() => moveBy(-1)} className=" h-9 aspect-square rounded-full bg-slate-400 cursor-pointer" >《</button>
                    <button onClick={() => moveBy(1)} className=" h-9 aspect-square rounded-full bg-slate-400 cursor-pointer"> 》</button>
                </div>
            </div>
            <div className="min-h-20"></div>
        </>
    )
}