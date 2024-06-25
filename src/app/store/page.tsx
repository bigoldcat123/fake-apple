import { getNewGoodsImgs } from "@/lib/data";
import Shelf from "@/ui/common/Shelf";
import ShelfFinal from "@/ui/common/ShelfFinal";
import ShelfV2 from "@/ui/common/ShelfV2";
import FeatureCard from "@/ui/common/shop/FeatureCard";
import NewGoodCard from "@/ui/common/shop/NewGoodCard";

export default async function Store() {
    const data = await getNewGoodsImgs()
    return (
        <>
            <div className=" mt-16 mb-8 px-5 md:px-24 w-full justify-between flex flex-row">
                <div className=" text-4xl font-semibold">
                    <p>这个商店，<span className=" text-gray-400">产品都称心，</span></p>
                    <p className=" text-gray-400">体验更如意。</p>
                </div>
                <div>
                    <div className=" flex flex-row items-center space-x-2 mb-4">
                        <div>
                            <img className=" aspect-square w-9 rounded-full" src="/profile.png" alt="" />
                        </div>
                        <div>
                            <p className=" text-sm font-bold">需要协助选购？</p>
                            <p className=" cursor-pointer hover:underline text-sm  text-blue-400">咨询 Specialist 专家 </p>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center space-x-2">
                        <div><svg className=" aspect-square w-9" viewBox="0 0 25 35" aria-hidden="true">
                            <path d="m0 0h25v35h-25z" fill="none"></path>
                            <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
                        </svg></div>
                        <div>
                            <p className=" text-sm font-bold">前往 Apple Store 零售店</p>
                            <p className="cursor-pointer hover:underline text-sm  text-blue-400">查找附近的零售店</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* F - C = 1; C - R = 4  R is the real size. the reason why i do not use string template is that it may cause some bugs which i do not why .*/}
            <ShelfV2></ShelfV2>
            <div className=" h-8"></div>
            {/* new prodect */}
            <ShelfFinal first="上新了，" secend="快来认识一下这些新朋友。" FclassName={' h-[34.25rem]'} CclassName={' h-[35.25rem]'} RclassName={'h-[31.25rem]'} >
                {data.map((x, i) => {
                    return <NewGoodCard widthClass="w-[25rem]" heightClass='h-[31.25rem]' key={i} card={x}></NewGoodCard>
                })}
            </ShelfFinal>
            <div className=" h-8"></div>
            <ShelfFinal first="帮手在此，" secend="时时待命应你所需。" FclassName={' h-[34.25rem]'} CclassName={' h-[35.25rem]'} RclassName={'h-[31.25rem]'} >
                <NewGoodCard widthClass=" w-[30rem] " heightClass="h-[31.25rem]" card={{ 'category': 'APPLE SPECIALIST 专家', 'title': 'Specialist 专家可以在线一对一帮你选购。', des: '', 'color': 'black', 'colorCategory': 'gray', 'imgLink': '/help/specialist.jpg' }}></NewGoodCard>
                <NewGoodCard widthClass=" w-[30rem] " heightClass="h-[31.25rem]" card={{ 'category': 'TODAY AT APPLE', 'title': '参加 Apple Store 零售店的免费课程', des: '了解各种最新功能以及如何充分运用 Apple 设备。', 'color': 'black', 'colorCategory': 'gray', 'imgLink': '/help/course.jpg' }}></NewGoodCard>
                <div className=" cursor-pointer snap-center snap-always flex-shrink-0 flex items-center">
                    <div className={`flex flex-col justify-between h-[31.25rem]  w-full`}>
                        <div className={`w-[30rem]  text-xl font-bold h-[15rem] shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out space-y-2  bg-cover rounded-3xl p-8`} style={{ backgroundImage: `url(/help/apps.jpg)` }}>
                            <p className=" mt-4 ml-3">参见免费专人在线辅导，</p>
                            <p className="ml-3">帮你设置手里的新设备。</p>
                        </div>
                        <div className={`w-[30rem] text-xl font-bold  h-[15rem] shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out space-y-2  bg-cover rounded-3xl p-8`} style={{ backgroundImage: `url(/help/genus.jpg)` }}>
                            <p className=" mt-6 ml-3">来 Genus Bar</p>
                            <p className="ml-3">天才吧，可获专业</p>
                            <p className="ml-3">服务和技术支持。</p>
                        </div>
                    </div>
                </div>
            </ShelfFinal>
            <div className=" h-8"></div>
            <ShelfFinal first="Apple Store 有特色，" secend="在此选购有的是理由。" FclassName={' h-[18rem]'} CclassName={' h-[19rem]'} RclassName={'h-[15rem]'} >
                <FeatureCard widthClass=" w-[19.5625rem] " heightClass="h-[15rem]" >
                    <div>
                        <div>
                            <svg width="46" height="56" viewBox="0 0 46 56" aria-hidden="true">
                                <path d="M41.0009,12H5A5,5,0,0,0,.0009,17L0,39a5,5,0,0,0,4.9991,5H41.0009A5,5,0,0,0,46,39V17A5,5,0,0,0,41.0009,12ZM5,14H41.0009A3.0032,3.0032,0,0,1,44,17l.0005,2H2l.0005-2A3.0032,3.0032,0,0,1,5,14ZM41.0009,42H4.9991a3.0032,3.0032,0,0,1-3-3V22.9577H44V39A3.0032,3.0032,0,0,1,41.0009,42ZM15,31.5737v3.8526A1.5541,1.5541,0,0,1,13.4663,37H8.5338A1.5542,1.5542,0,0,1,7,35.4263V31.5737A1.5542,1.5542,0,0,1,8.5338,30h4.9325A1.5541,1.5541,0,0,1,15,31.5737Z"></path>
                            </svg>
                        </div>
                        <div className=" pr-16">
                            最长可享受24 个月免息分期。
                        </div>
                    </div>
                </FeatureCard>
                <FeatureCard widthClass=" w-[19.5625rem] " heightClass="h-[15rem]" >
                    <div>
                        <div>
                            <svg width="40" height="56" viewBox="0 0 40 56" aria-hidden="true">
                                <path d="m0 0h40v56h-40z" fill="none"></path>
                                <path d="m38 29.0205v9.9795c0 3.8594-3.1403 7-6.9996 7h-22c-3.8594 0-7-3.1406-7-7v-4.75h-1.2514c-.7087 0-.8958-.4824-.502-1.0337l2.2051-3.1304c.315-.4529.7875-.443 1.1025 0l2.2051 3.1403c.3839.5414.1969 1.0238-.5021 1.0238h-1.2576v4.75c0 2.7568 2.2435 5 5.0004 5h22c2.7568 0 5-2.2432 5-5v-9.9795c0-.5527.4473-1 1-1s.9996.4473.9996 1zm1.251-7.2705h-1.251v-4.75c0-3.8594-3.1403-7-6.9996-7h-22c-3.8594 0-7 3.1406-7 7v9.9795c0 .5527.4473 1 1 1s.9996-.4473.9996-1v-9.9795c0-2.7568 2.2435-5 5.0004-5h22c2.7568 0 5 2.2432 5 5v4.75h-1.258c-.6989 0-.886.4823-.502 1.0237l2.2051 3.1404c.315.4429.7875.4529 1.1025 0l2.2051-3.1305c.3937-.5513.2067-1.0336-.5021-1.0336zm-13.8013 1.6872c.2991-.2918.7214-.4372 1.2668-.4372h3.569c.5396 0 .9599.1454 1.261.4372.303.2918.4536.7004.4536 1.225v8.6845c0 .5246-.1486.9313-.4477 1.2201s-.7214.4332-1.2668.4332h-3.569c-.5454 0-.9677-.1444-1.2668-.4332s-.4496-.6955-.4496-1.2201v-8.6845c0-.5246.1505-.9333.4496-1.225zm.7038 9.7945c0 .2004.0469.3517.1447.4548.0958.1032.2424.1552.436.1552h3.524c.1935 0 .3402-.0521.4398-.1552.0997-.1032.1506-.2544.1506-.4548v-8.4546c0-.2004-.0508-.3537-.1506-.4598-.0997-.1061-.2463-.1591-.4398-.1591h-3.524c-.1935 0-.3402.053-.436.1591-.0977.1061-.1447.2593-.1447.4598zm2.3488-13.2317h-16.6196c-.5806 0-1.0401.1572-1.3773.4725s-.5054.783-.5054 1.4019v11.1256h-1.2559c-.2757 0-.5103.0824-.7038.2798s-.2903.4352-.2903.7122.0968.5138.2903.7122c.1935.1965.4281.2957.7038.2957h15.1703c-.2581-.4126-.393-.8841-.4047-1.4146 0-.1002-.002-.2004-.0059-.3006-.002-.1002-.0039-.1846-.0039-.2848h-12v-10.6512c0-.2829.0704-.4951.2111-.6366s.3519-.2122.6334-.2122h17.7686c-.0352-.4715-.1916-.9037-.4672-1.1424s-.6569-.3576-1.1437-.3576zm-.6924 5.4067h1.3802c.1114 0 .2072-.0403.2854-.1199.0801-.0796.1193-.1778.1193-.2957 0-.112-.0391-.2063-.1193-.2829-.0782-.0766-.174-.1149-.2854-.1149h-1.3802c-.1173 0-.215.0383-.2913.1149s-.1134.1709-.1134.2829c0 .1179.0371.2161.1134.2957s.174.1199.2913.1199zm-.4179 7.8983h2.2c.1887 0 .284-.1032.284-.3095 0-.0884-.027-.1611-.0809-.2171s-.1222-.0835-.2031-.0835h-2.2c-.0809 0-.1456.0275-.1941.0835s-.0719.1287-.0719.2171c0 .2063.0881.3095.266.3095z"></path>
                            </svg>
                        </div>
                        <div className=" pr-7">
                            <span className=" text-blue-500">折抵你的设备，</span>换购新机享优惠。
                        </div>
                    </div>
                </FeatureCard>
                <FeatureCard widthClass=" w-[19.5625rem] " heightClass="h-[15rem]" >
                    <div>
                        <div>
                            <svg width="40" height="56" viewBox="0 0 40 56" aria-hidden="true">
                                <path d="m0 0h40v56h-40z" fill="none"></path>
                                <path d="m32.7812 29.6094a1.0221 1.0221 0 0 0 -1-.125 42.9866 42.9866 0 0 1 -5.76 1.3437 37.7 37.7 0 0 1 -6.01.4688 37.8947 37.8947 0 0 1 -6.0208-.4688 42.1134 42.1134 0 0 1 -5.75-1.3437 1.08 1.08 0 0 0 -1.0313.125.9492.9492 0 0 0 -.2812.9583 12.0862 12.0862 0 0 0 2.1875 5.6667 13.3019 13.3019 0 0 0 4.6446 4.0521 13.0763 13.0763 0 0 0 6.25 1.51 13.0332 13.0332 0 0 0 6.2292-1.51 13.3984 13.3984 0 0 0 4.6562-4.0521 11.8567 11.8567 0 0 0 2.1771-5.6667.9968.9968 0 0 0 -.2913-.9583zm-2.3124 4.4167a37.2669 37.2669 0 0 1 -5.1771 1.0939 38.5047 38.5047 0 0 1 -5.2813.3646 38.8064 38.8064 0 0 1 -5.2812-.3646 37.13 37.13 0 0 1 -5.198-1.0937 9.7 9.7 0 0 1 -1.0833-2.9167 43.2962 43.2962 0 0 0 5.6459 1.2292 39.8385 39.8385 0 0 0 5.9166.4375 39.9092 39.9092 0 0 0 5.9063-.4375 42.4138 42.4138 0 0 0 5.6354-1.2292 9.43 9.43 0 0 1 -1.0833 2.9165zm-17.8021-8.5834a2.8583 2.8583 0 0 1 0-3.5416 1.8441 1.8441 0 0 1 1.4271-.7084 1.9442 1.9442 0 0 1 1.4895.7084 2.7531 2.7531 0 0 1 -.01 3.5312 1.944 1.944 0 0 1 -1.4791.7188 1.8438 1.8438 0 0 1 -1.4275-.7084zm11.7812-.01a2.8064 2.8064 0 0 1 0-3.5312 1.8745 1.8745 0 0 1 1.4375-.7084 1.8935 1.8935 0 0 1 1.4583.7084 2.8207 2.8207 0 0 1 0 3.5416 1.8931 1.8931 0 0 1 -1.4583.7084 1.8644 1.8644 0 0 1 -1.4375-.7192zm-4.4479-14.7327a17.3 17.3 0 1 1 -17.3 17.3 17.32 17.32 0 0 1 17.3-17.3m0-2.2a19.5 19.5 0 1 0 19.5 19.5 19.5 19.5 0 0 0 -19.5-19.5z"></path>
                            </svg>
                        </div>
                        <div className=" pr-2">
                            这一刻，属于你。<span className="  text-violet-500">混搭表情符号、名字和数字，一起免费刻。</span>
                        </div>
                    </div>
                </FeatureCard>
                <FeatureCard widthClass=" w-[19.5625rem] " heightClass="h-[15rem]" >
                    <div>
                        <div>
                            <svg width="40" height="56" viewBox="0 0 40 56" aria-hidden="true"><path id="path2324" d="m 14.9,14.43 a 2.581,2.581 0 0 1 -0.472,-0.045 3.083,3.083 0 0 1 -0.067,-0.629 7.531,7.531 0 0 1 1.909,-4.694 7.76,7.76 0 0 1 5.1,-2.628 3.329,3.329 0 0 1 0.067,0.7 7.745,7.745 0 0 1 -1.837,4.825 6.728,6.728 0 0 1 -4.7,2.471 z m 12.807,3.818 a 7.851,7.851 0 0 0 -3.751,6.6 7.64,7.64 0 0 0 4.649,7.008 18.257,18.257 0 0 1 -2.381,4.919 c -1.482,2.134 -3.032,4.268 -5.391,4.268 -2.359,0 -2.965,-1.37 -5.683,-1.37 -2.65,0 -3.594,1.415 -5.75,1.415 -2.156,0 -3.661,-1.977 -5.391,-4.4 A 21.279,21.279 0 0 1 0.395,25.211 c 0,-6.738 4.38,-10.31 8.692,-10.31 2.291,0 4.2,1.5 5.638,1.5 1.37,0 3.5,-1.595 6.109,-1.595 a 8.172,8.172 0 0 1 6.873,3.442 z" ></path></svg>
                        </div>
                        <div className=" pr-2">
                            <p><span className="  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">定制</span>你的 Mac，打造</p>
                            <p>个性知足的</p>
                            <p>Apple Watch</p>
                        </div>
                    </div>
                </FeatureCard>
                <FeatureCard widthClass=" w-[19.5625rem] " heightClass="h-[15rem]" >
                    <div>
                        <div>
                            <svg width="36" height="56" viewBox="0 0 36 56" aria-hidden="true">
                                <path d="m0 0h36v56h-36z" fill="none"></path>
                                <path d="m33.4019 16.719-13-7.1197c-.7481-.4098-1.575-.6146-2.4019-.6146s-1.6538.2048-2.4019.6146l-13 7.1197c-1.602.8774-2.5981 2.5587-2.5981 4.3854v13.7913c0 1.8267.9961 3.5079 2.5981 4.3854l13 7.1197c.748.4097 1.575.6146 2.4019.6146s1.6538-.2049 2.4019-.6146l13-7.1197c1.602-.8775 2.5981-2.5588 2.5981-4.3855v-13.7912c0-1.8267-.9961-3.508-2.5981-4.3854zm-16.8431-5.3655c.4404-.2413.939-.3688 1.4412-.3688s1.0007.1275 1.4412.3688l13 7.1196c.1169.064.21.1554.3157.2329l-6.1394 3.5058-14.8081-8.2572zm.4412 33.4669c-.1492-.0531-.3018-.0975-.4412-.1738l-13-7.1197c-.9614-.5267-1.5588-1.5349-1.5588-2.6313v-13.7912c0-.2562.0391-.506.1013-.7476l14.8987 8.5077zm-13.7568-26.1143c.1057-.0775.1987-.1689.3157-.2329l6.1782-3.3836 14.8511 8.2811-6.5882 3.7621zm30.7568 16.1895c0 1.0964-.5974 2.1046-1.5588 2.6312l-13 7.1197c-.1394.0763-.292.1208-.4412.1739v-15.9559l14.8987-8.5077c.0622.2416.1013.4913.1013.7476z"></path>
                            </svg>
                        </div>
                        <div className=" pr-2">
                            部分订单可付费选择三小时快送
                            <sup>∆∆</sup>，或亲自到店取货。所有订单均可享免费送货。
                        </div>
                    </div>
                </FeatureCard>
                <FeatureCard widthClass=" w-[19.5625rem] " heightClass="h-[15rem]" >
                    <div>
                        <div>
                            <svg width="36" height="56" viewBox="0 0 36 56" aria-hidden="true">
                                <path d="m29 12c2.757 0 5 2.243 5 5v22c0 2.757-2.243 5-5 5h-22c-2.757 0-5-2.243-5-5v-22c0-2.757 2.243-5 5-5zm0-2h-22c-3.866 0-7 3.134-7 7v22c0 3.866 3.134 7 7 7h22c3.866 0 7-3.134 7-7v-22c0-3.866-3.134-7-7-7zm-3.5 11h-2.5378c-.1951-2.46-2.3293-4.4048-4.9622-4.4048s-4.7672 1.9448-4.9622 4.4048h-2.5378c-1.3807 0-2.5 1.1193-2.5 2.5v14c0 1.3807 1.1193 2.5 2.5 2.5h15c1.3807 0 2.5-1.1193 2.5-2.5v-14c0-1.3807-1.1193-2.5-2.5-2.5zm-3.9586 10.849c-.1356.3135-.2965.6016-.4744.8727-.2457.3643-.449.6185-.61.754-.2373.2288-.4999.3474-.7795.3559-.1948 0-.4406-.0593-.7202-.1779-.2796-.1187-.5422-.1779-.7794-.1779-.2457 0-.5084.0593-.7964.1779s-.5168.1779-.6947.1863c-.2627.0085-.5253-.1101-.7964-.3643-.1694-.1525-.3813-.4066-.6354-.7794-.2711-.3983-.4913-.8473-.6693-1.3726-.1863-.5591-.2796-1.1099-.2796-1.6351 0-.6016.1271-1.1183.3813-1.5589.1948-.3474.4659-.627.7964-.8303.3389-.2033.6947-.3051 1.0845-.3135.2118 0 .4913.0593.8387.1948.3389.1356.5591.2034.6608.2034.0762 0 .322-.0763.7371-.2372.3897-.144.7286-.2034.9997-.1779.7371.0593 1.2878.3558 1.6605.8981-.6608.4152-.9912.9913-.9827 1.7283.0084.5761.2118 1.059.6016 1.4318.1863.1779.3896.3135.61.4067-.0424.144-.1017.2795-.1526.4151zm-3.5584-5.1511c0-.4406.161-.8472.4915-1.2285.1694-.1949.3728-.3474.627-.4745.2457-.127.4829-.2033.7117-.2118.0085.0593.0085.1187.0085.1779 0 .449-.161.8812-.483 1.2708-.3897.466-.8387.6778-1.3471.6354-.0086-.0507-.0086-.11-.0086-.1693zm-3.8446-5.6979c.1945-1.8496 1.8414-3.3047 3.8616-3.3047s3.6671 1.4551 3.8616 3.3047z"></path>
                            </svg>
                        </div>
                        <div className=" pr-2">
                            <span className=" text-blue-500">专属于你的购物体验，</span>尽在<span className=" text-blue-500">Apple Store App。</span>
                        </div>
                    </div>
                </FeatureCard>
            </ShelfFinal>
            <div className=" h-8"></div>
            <ShelfFinal first="配件。" secend="款款必备，和你的设备绝配。" FclassName={' h-[34.25rem]'} CclassName={' h-[35.25rem]'} RclassName={'h-[31.25rem]'}>
                <div className=" cursor-pointer snap-center snap-always flex-shrink-0 flex items-center">
                    <div className={`h-[31.25rem]  w-full`}>
                        <div style={{backgroundImage:'url(/attachment/first.jpg)'}} className={` w-[25rem]  shadow-md  hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out  space-y-2 h-full  bg-cover rounded-3xl p-8`} >
                           <p className="text-2xl font-bold">尝尝鲜</p>
                           <p>探索常用配件的各式新配色和新功能。</p>
                        </div>
                    </div>
                </div>
                <div className=" cursor-pointer snap-center snap-always flex-shrink-0 flex items-center">
                    <div className={`h-[31.25rem]  w-full`}>
                        <div style={{backgroundImage:'url(/attachment/last.jpg)'}} className={` w-[25rem]  shadow-md  hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out  space-y-2 h-full  bg-cover rounded-3xl p-8`} >
                           <p className="text-2xl font-bold">探索所有配件。</p>
                        </div>
                    </div>
                </div>
            </ShelfFinal>
            <div className=" h-8"></div>
            <ShelfFinal first="声声动听。 " secend="音质丰富饱满，个个都悦耳。" FclassName={' h-[34.25rem]'} CclassName={' h-[35.25rem]'} RclassName={'h-[31.25rem]'}>
                <div className=" cursor-pointer snap-center snap-always flex-shrink-0 flex items-center">
                    <div className={`h-[31.25rem]  w-full`}>
                        <div style={{backgroundImage:'url(/music/first.jpg)'}} className={` w-[25rem]  shadow-md  hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out  space-y-2 h-full  bg-cover rounded-3xl p-8`} >
                           <p className="text-2xl font-bold pr-20">Apple Music 免费试听六个月</p>
                           <p>购买 iPhone、HomePod、AirPods 或指定 Beats 产品，即可享此福利⁺。</p>
                        </div>
                    </div>
                </div>
            </ShelfFinal>
        </>
    )
}
