

import { getMacs } from "@/lib/data";
import Card from "@/ui/common/shop/mac/Card";
import Head from "@/ui/common/shop/mac/Head";
import Shelf from "@/ui/common/shop/mac/Shelf";
import Video from "@/ui/common/shop/mac/Video";
import { useEffect, useRef, useState } from "react"

export default async function Mac() {

    const macs = await getMacs()
    return (
        <div >
            <Head></Head>
            <Video></Video>
            <Shelf macs={macs}></Shelf>
            <div className=" h-72 bg-green-300"></div>
            <div className=" h-72 bg-orange-300"></div>
            {/* <div ref={item} className=" h-72 bg-violet-300">?</div> */}
            <div className=" h-72 bg-yellow-300"></div>
        </div>
    )
}