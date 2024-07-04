

import { getAboutMac, getMacFeatures, getMacs } from "@/lib/data";
import AppleFriend from "@/ui/common/shop/mac/AppleFriend";
import FeatureShelf from "@/ui/common/shop/mac/FeatuerShelf";
import FeatureCard from "@/ui/common/shop/mac/FeatureCard";
import Head from "@/ui/common/shop/mac/Head";
import Shelf from "@/ui/common/shop/mac/Shelf";
import Video from "@/ui/common/shop/mac/Video";
import AboutMacCard from "@/ui/common/shop/mac/aboutMacCard";

export default async function Mac() {
    const data = await getMacFeatures()
    const macs = await getMacs()
    const aboutMac = await getAboutMac()
    return (
        <div >
            <Head></Head>
            <Video></Video>
            <Shelf macs={macs}></Shelf>
            <FeatureShelf childrenHeight={'17rem'} childrenWidth="25rem" information={['在 Apple 购买 Mac，', '好处多多。']}>
                {data.map((x, i) => {
                    return <FeatureCard key={i} information={x}></FeatureCard>
                })}
            </FeatureShelf>
            <div className=" bg-white py-20">
                <FeatureShelf childrenHeight={'46.75rem'} childrenWidth="25.3125rem" information={['来了解一下 MAC。']}>
                    {aboutMac.map((x, i) => {
                        return <AboutMacCard key={i} information={x} ></AboutMacCard>
                    })}
                </FeatureShelf>
                <AppleFriend></AppleFriend>
            </div>

            <div className=" h-72 bg-orange-300"></div>
            {/* <div ref={item} className=" h-72 bg-violet-300">?</div> */}
            <div className=" h-72 bg-yellow-300"></div>
        </div>
    )
}