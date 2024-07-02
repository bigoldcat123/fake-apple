

import { getMacFeatures, getMacs } from "@/lib/data";
import Card from "@/ui/common/shop/mac/Card";
import FeatureShelf from "@/ui/common/shop/mac/FeatuerShelf";
import FeatureCard from "@/ui/common/shop/mac/FeatureCard";
import Head from "@/ui/common/shop/mac/Head";
import Shelf from "@/ui/common/shop/mac/Shelf";
import Video from "@/ui/common/shop/mac/Video";

export default async function Mac() {
    const data = await getMacFeatures()
    const macs = await getMacs()
    return (
        <div >
            <Head></Head>
            <Video></Video>
            <Shelf macs={macs}></Shelf>
            <FeatureShelf childrenHeight={'17rem'} information={['在 Apple 购买 Mac，','好处多多。']}>
                {data.map((x,i) => {
                    return <FeatureCard key={i} information={x}></FeatureCard>
                })}
            </FeatureShelf>
            <div className=" h-72 bg-orange-300"></div>
            {/* <div ref={item} className=" h-72 bg-violet-300">?</div> */}
            <div className=" h-72 bg-yellow-300"></div>
        </div>
    )
}