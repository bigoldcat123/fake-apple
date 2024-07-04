'use client'

import { useState } from "react"

export default function AppleFriend() {
    const [current, setCurrent] = useState(0)
    const img =['/shop/mac/friend/1.jpg','/shop/mac/friend/2.jpg','/shop/mac/friend/3.jpg']
    return (
        <>
            <div className="p-12 ">
                <p className=" font-bold text-5xl py-16">亲密好搭档。</p>
                <div className=" max-w-[1680px] my-0 mx-auto flex flex-col lg:flex-row w-full rounded-3xl bg-slate-50 items-center justify-center py-32 px-10">
                    <div className=" flex-1 bg-slate-50 p-16 flex flex-col items-center justify-center">
                        <div className=" w-[350px]  h-72">
                            <button onClick={() => setCurrent(0)} className=" w-full text-start font-bold text-3xl py-2">Mac 与 iPhone</button>
                            <div style={{maxHeight:current==0?'120px':'0'}} className=" transition-all duration-300 ease-in overflow-hidden">你可以直接用 Mac 接听 iPhone 上的来电或回信息；从 iPhone 拷贝图片、视频或文字，再粘贴到手边 Mac 上的其他 app 中；而借助 iCloud，你无论是用 iPhone 还是 Mac，都能访问需要的文件。这样的精妙配合举不胜举。</div>
                            <hr className=" my-2 h-[1px]  bg-blue-800 border-0" />
                            <button onClick={() => setCurrent(1)} className=" w-full text-start font-bold text-3xl py-2">Mac 与 iPad</button>
                            <div style={{maxHeight:current==1?'96px':'0'}} className="  transition-all duration-300 ease-in  overflow-hidden">在 iPad 上的手绘，当即就能在 Mac 上显现；用 Mac 工作时，可将 iPad 当作第二块显示屏，方便参考其他资料；你甚至可以用 iPad 开工 Final Cut Pro 项目，再转到 Mac 上继续完成。</div>
                            <hr className=" my-2 h-[1px]  bg-blue-800 border-0"  />
                            <button onClick={() => setCurrent(2)} className=" w-full text-start font-bold text-3xl py-2">Mac 与 Apple Watch</button>
                            <p style={{maxHeight:current==2?'48px':'0'}} className=" transition-all duration-300 ease-in  overflow-hidden">戴着 Apple Watch 并启用了自动解锁功能时，可自动登录你的 Mac，无需再输入密码。</p>
                        </div>
                    </div>
                    <div className=" bg-black flex-1">
                        <img src={img[current]} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}