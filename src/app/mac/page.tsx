

import { getAboutMac, getMacFeatures, getMacs } from "@/lib/data";
import AppleFriend from "@/ui/common/shop/mac/AppleFriend";
import FeatureShelf from "@/ui/common/shop/mac/FeatuerShelf";
import FeatureCard from "@/ui/common/shop/mac/FeatureCard";
import Head from "@/ui/common/shop/mac/Head";
import Shelf from "@/ui/common/shop/mac/Shelf";
import Video from "@/ui/common/shop/mac/Video";
import AboutMacCard from "@/ui/common/shop/mac/aboutMacCard";
import parse from 'html-react-parser';
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

                <FeatureShelf childrenHeight={'38.75rem'} childrenWidth="241.15625rem" information={['Mac 左膀右臂。']}>
                    <div className=" cursor-pointer overflow-hidden w-[41.15625rem] h-[38.75rem] bg-slate-50 rounded-2xl flex flex-col items-center pt-12 ">
                        <p className=" font-bold text-2xl">Mac 配件</p>
                        <p className="p-4">来看看键盘、鼠标等各种精彩配件。</p>
                        <a className=" text-blue-400 text-lg mb-8" href="">选购 Mac 配件</a>
                        <div className="h-[425px]">
                            <img className=" h-[425px] object-cover" src="/shop/mac/handandleg/11.jpg" alt="" />
                        </div>
                    </div>
                    <div className=" cursor-pointer overflow-hidden w-[41.15625rem] h-[38.75rem] bg-stone-50 rounded-2xl flex flex-col items-center pt-12 ">
                        <p className=" font-bold text-2xl">Mac 配件</p>
                        <p className="p-4">来看看键盘、鼠标等各种精彩配件。</p>
                        <a className=" text-blue-400 text-lg mb-8" href="">选购 Mac 配件</a>
                        <div className="h-[425px]">
                            <img className="  object-cover" src="/shop/mac/handandleg/22.jpg" alt="" />
                        </div>
                    </div>
                </FeatureShelf>
            </div>
        </div>
    )
}