'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HomeNavigation() {

    // const s = banner.current!.clientHeight
    const head = useRef<HTMLDivElement>(null)
    const downMenu = useRef<HTMLDivElement>(null)
    const data = [
        {
            first: {
                title: "选购",
                links: [
                    {
                        name: '选购新品',
                        link: '',
                    },
                    {
                        name: 'Mac',
                        link: '',
                    },
                    {
                        name: 'iPad',
                        link: '',
                    },
                    {
                        name: 'iPhone',
                        link: '',
                    },
                    {
                        name: 'Apple Watch',
                        link: '',
                    },
                    {
                        name: 'Apple Vision Pro',
                        link: '',
                    },
                    {
                        name: '配件',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '快速链接',
                    links: [
                        {
                            name: '查找零售店',
                            link: ''
                        },
                        {
                            name: '订单状态',
                            link: ''
                        },
                        {
                            name: 'Apple Trade In 换购计划',
                            link: ''
                        },
                        {
                            name: '分期付款',
                            link: ''
                        }
                    ]
                },
                {
                    title: '专属商店选购',
                    links: [
                        {
                            name: '认证的翻新产品',
                            link: ''
                        },
                        {
                            name: '教育',
                            link: ''
                        },
                        {
                            name: '商务',
                            link: ''
                        }
                    ]
                },
            ]
        },
        {
            first: {
                title: "探索 Mac",
                links: [
                    {
                        name: '探索全部 Mac 机型',
                        link: '',
                    },
                    {
                        name: 'MacBook Air',
                        link: '',
                    },
                    {
                        name: 'MacBook Pro',
                        link: '',
                    },
                    {
                        name: 'iMac',
                        link: '',
                    },
                    {
                        name: 'Mac mini',
                        link: '',
                    },
                    {
                        name: 'Mac Studio',
                        link: '',
                    },
                    {
                        name: 'Mac Pro',
                        link: '',
                    },
                    {
                        name: '显示器',
                        link: '',
                    },
                ]
            },
            second: [
                {
                    title: '选购 Mac',
                    links: [
                        {
                            name: '选购 Mac',
                            link: ''
                        },
                        {
                            name: 'Mac 配件',
                            link: ''
                        },
                        {
                            name: 'Apple Trade In 换购计划',
                            link: ''
                        },
                        {
                            name: '分期付款',
                            link: ''
                        }
                    ]
                },
                {
                    title: 'Mac相关',
                    links: [
                        {
                            name: 'Mac 支持',
                            link: ''
                        },
                        {
                            name: 'AppleCare+服务计划(适用于Mac)',
                            link: ''
                        },
                        {
                            name: 'macOS Sonoma',
                            link: ''
                        },
                        {
                            name: 'Apple打造的App',
                            link: ''
                        },
                        {
                            name: '连续互通',
                            link: ''
                        },
                        {
                            name: 'iCloud+',
                            link: ''
                        },
                        {
                            name: 'Mac 商务应用',
                            link: ''
                        },
                        {
                            name: '教育',
                            link: ''
                        }
                    ]
                },
            ]
        },
        {
            first: {
                title: "探索 iPad",
                links: [
                    {
                        name: '探索全部 iPad 机型',
                        link: '',
                    },
                    {
                        name: 'iPad Pro',
                        link: '',
                    },
                    {
                        name: 'iPad Air',
                        link: '',
                    },
                    {
                        name: 'iPad',
                        link: '',
                    },
                    {
                        name: 'iPad mini',
                        link: '',
                    },
                    {
                        name: 'Apple Pencil',
                        link: '',
                    },
                    {
                        name: '键盘',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '选购iPad',
                    links: [
                        {
                            name: '选购iPad',
                            link: ''
                        },
                        {
                            name: 'iPad 配件',
                            link: ''
                        },
                        {
                            name: 'Apple Trade In 换购计划',
                            link: ''
                        },
                        {
                            name: '分期付款',
                            link: ''
                        }
                    ]
                },
                {
                    title: 'iPad 相关',
                    links: [
                        {
                            name: 'iPad 支持',
                            link: ''
                        },
                        {
                            name: 'AppleCare+服务计划(适用于iPad)',
                            link: ''
                        },
                        {
                            name: 'iPadOS 17',
                            link: ''
                        },
                        {
                            name: 'Apple 打造的App',
                            link: ''
                        },
                        {
                            name: 'iCloud+',
                            link: ''
                        },
                        {
                            name: '教育',
                            link: ''
                        }
                    ]
                },
            ]
        },
        {
            first: {
                title: "探索 iPhone",
                links: [
                    {
                        name: '探索全部 iPhone 机型',
                        link: '',
                    },
                    {
                        name: 'iPhone 15 Pro',
                        link: '',
                    },
                    {
                        name: 'iPhone 14',
                        link: '',
                    },
                    {
                        name: 'iPhone 13',
                        link: '',
                    },
                    {
                        name: 'iPhone SE',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '选购 iPhone',
                    links: [
                        {
                            name: '选购 iPhone',
                            link: ''
                        },
                        {
                            name: 'iPhone 配件',
                            link: ''
                        },
                        {
                            name: 'Apple Trade In 换购计划',
                            link: ''
                        },
                        {
                            name: '分期付款',
                            link: ''
                        }
                    ]
                },
                {
                    title: 'iPhone 相关',
                    links: [
                        {
                            name: 'iPhone 支持',
                            link: ''
                        },
                        {
                            name: 'AppleCare+服务计划(iPhone)',
                            link: ''
                        },
                        {
                            name: 'iOS 17',
                            link: ''
                        },
                        {
                            name: 'Apple 打造的App',
                            link: ''
                        },
                        {
                            name: 'iPhone 隐私保护',
                            link: ''
                        },
                        {
                            name: 'iCloud+',
                            link: ''
                        },
                        {
                            name: 'Apple Pay',
                            link: ''
                        },
                        {
                            name: 'Siri',
                            link: ''
                        }
                    ]
                },
            ]
        },
        {
            first: {
                title: "探索 Apple Watch",
                links: [
                    {
                        name: '探索全部 Apple Watch 表款',
                        link: '',
                    },
                    {
                        name: 'Apple Watch Series 9',
                        link: '',
                    },
                    {
                        name: 'Apple Watch Ultra 2',
                        link: '',
                    },
                    {
                        name: 'Apple Watch SE',
                        link: '',
                    },
                    {
                        name: 'Apple Watch Nike',
                        link: '',
                    },
                    {
                        name: 'Apple Watch Hermes',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '选购 Apple Watch',
                    links: [
                        {
                            name: '选购 Apple Watch',
                            link: ''
                        },
                        {
                            name: 'Apple Watch 定制坊',
                            link: ''
                        },
                        {
                            name: 'Apple Watch 表带',
                            link: ''
                        },
                        {
                            name: 'Apple Watch 配件',
                            link: ''
                        },
                        {
                            name: 'Apple Trade In 换购计划',
                            link: ''
                        },
                        {
                            name: '分期付款',
                            link: ''
                        }
                    ]
                },
                {
                    title: 'Apple Watch 相关',
                    links: [
                        {
                            name: 'Apple Watch 支持',
                            link: ''
                        },
                        {
                            name: 'AppleCare+服务计划',
                            link: ''
                        },
                        {
                            name: 'watchOS 10',
                            link: ''
                        },
                        {
                            name: 'Apple 打造的App',
                            link: ''
                        }
                    ]
                },
            ]
        },
        {
            first: {
                title: "探索 Apple Vision Pro",
                links: [
                    {
                        name: '探索 Apple Vision Pro',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '选购 Apple Vision Pro',
                    links: [
                        {
                            name: '选购 Apple Vision Pro',
                            link: ''
                        },
                        {
                            name: 'Apple Vision Pro 配件',
                            link: ''
                        },
                        {
                            name: '预约演示试用',
                            link: ''
                        },
                        {
                            name: '分期付款',
                            link: ''
                        }
                    ]
                }
            ]
        },
        {
            first: {
                title: "探索 AirPods",
                links: [
                    {
                        name: '探索全部 AirPods 机型',
                        link: '',
                    },
                    {
                        name: 'AirPods Pro 第二代',
                        link: '',
                    },
                    {
                        name: 'AirPods 第二代',
                        link: '',
                    },
                    {
                        name: 'AirPods 第三代',
                        link: '',
                    },
                    {
                        name: 'AirPods Max',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '选购 AirPods',
                    links: [
                        {
                            name: '选购 AirPods',
                            link: ''
                        },
                        {
                            name: 'AirPods 配件',
                            link: ''
                        }
                    ]
                },
                {
                    title: 'AirPods 相关',
                    links: [
                        {
                            name: 'AirPods 支持',
                            link: ''
                        },
                        {
                            name: 'AppleCare+服务计划(适用于耳机)',
                            link: ''
                        },
                        {
                            name: 'Apple Music',
                            link: ''
                        }
                    ]
                },
            ]
        },
        {
            first: {
                title: "探索家居",
                links: [
                    {
                        name: '探索家居项目',
                        link: '',
                    },
                    {
                        name: ' HomePod',
                        link: '',
                    },
                    {
                        name: 'HomePod mini',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '选购家居设备',
                    links: [
                        {
                            name: '选购 HomePod',
                            link: ''
                        },
                        {
                            name: '选购 HomePod mini',
                            link: ''
                        },
                        {
                            name: '家居配件',
                            link: ''
                        }
                    ]
                },
                {
                    title: '家居相关',
                    links: [
                        {
                            name: 'HomePod 支持',
                            link: ''
                        },
                        {
                            name: 'AppleCare+服务计划',
                            link: ''
                        },
                        {
                            name: '家庭 App',
                            link: ''
                        },
                        {
                            name: 'Apple Music',
                            link: ''
                        },
                        {
                            name: 'Siri',
                            link: ''
                        },
                        {
                            name: '隔空播放',
                            link: ''
                        }
                    ]
                },
            ]
        },
        {
            first: {
                title: "探索娱乐",
                links: [
                    {
                        name: '探索娱乐内容',
                        link: '',
                    },
                    {
                        name: 'Apple Music',
                        link: '',
                    },
                    {
                        name: 'Apple 播客',
                        link: '',
                    },
                    {
                        name: 'App Store',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '技术支持',
                    links: [
                        {
                            name: 'Apple Music 支持',
                            link: ''
                        }
                    ]
                }
            ]
        },
        {
            first: {
                title: "选购配件",
                links: [
                    {
                        name: '选购所有配件',
                        link: '',
                    },
                    {
                        name: 'Mac',
                        link: '',
                    },
                    {
                        name: 'iPad',
                        link: '',
                    },
                    {
                        name: 'iPhone',
                        link: '',
                    },
                    {
                        name: 'Apple Watch',
                        link: '',
                    },
                    {
                        name: 'Apple Vision Pro',
                        link: '',
                    },
                    {
                        name: 'AirPods',
                        link: '',
                    },
                    {
                        name: '家居',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '件配索探',
                    links: [
                        {
                            name: '来自 Apple 的配件',
                            link: ''
                        }, {
                            name: 'Beats by Dr. Dre',
                            link: ''
                        }, {
                            name: 'AirTag',
                            link: ''
                        }
                    ]
                }
            ]
        },
        {
            first: {
                title: "探索技术支持",
                links: [
                    {
                        name: '探索全部 iPhone 机型',
                        link: '',
                    },
                    {
                        name: 'iPhone',
                        link: '',
                    },
                    {
                        name: 'Mac',
                        link: '',
                    },
                    {
                        name: 'iPad',
                        link: '',
                    },
                    {
                        name: 'Watch',
                        link: '',
                    },
                    {
                        name: 'AirPods',
                        link: '',
                    }, ,
                    {
                        name: 'Music',
                        link: '',
                    }
                ]
            },
            second: [
                {
                    title: '获取帮助',
                    links: [
                        {
                            name: '社区',
                            link: ''
                        },
                        {
                            name: '查看保修服务',
                            link: ''
                        },
                        {
                            name: '维修',
                            link: ''
                        },
                        {
                            name: '联系我们',
                            link: ''
                        }
                    ]
                },
                {
                    title: '实用主题',
                    links: [
                        {
                            name: '获取 AppleCare+服务计划',
                            link: ''
                        },
                        {
                            name: 'Apple ID 和密码',
                            link: ''
                        },
                        {
                            name: '账单和订阅',
                            link: ''
                        },
                        {
                            name: '查找 App',
                            link: ''
                        },
                        {
                            name: '辅助功能',
                            link: ''
                        }
                    ]
                },
            ]
        },
    ]
    const [d, setD] = useState(data[0])
    let timmer: Array<any> = []
    function showBanner(currentBar: number) {
        setD(data[currentBar])
        timmer.map(x => {
            clearTimeout(x)
        })
        const n = data[currentBar].first.links.length
        if (head.current && downMenu.current) {
            head.current.style.height = `100vh`
            // 5 + 5 + 0.7 + 0.75 + 1.75*n + 0.75*n
            downMenu.current.style.height = `${5 + 5 + 0.7 + 0.75 + 1.75 * n + 0.75 * n}rem`
            downMenu.current!.style.opacity = '1'
            downMenu.current.style.transform = `translateY(-2.5rem)`
        }
    }
    function hideBanner(size: any) {
        console.log(size);

        if (head.current && downMenu.current) {
            head.current.style.height = '2.5rem'
            timmer.push(setTimeout(() => {
                downMenu.current!.style.opacity = '0'
            }, 700))
        }
    }
    return (
        <>
            <div ref={head} className=" overflow-hidden scale-y-100 relative z-[3] backdrop-blur-md justify-center" style={{ height: '2.5rem', position: 'fixed', width: '100%', transition: 'height 0.7s ease-in-out' }}>
                <div className=" text-[0.72rem] font-[540] mx-auto  w-[1003.53px] " style={{ zIndex: '100', alignItems: 'center', display: 'flex', gap: '3rem', height: '2.5rem', justifyContent: 'center', position: 'relative' }}>
                    <div className=" cursor-pointer">
                        <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
                    </div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(0)}>商店</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(1)}>Mac</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(2)}>iPad</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(3)}>iPhone</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(4)}>Watch</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(5)}>Vision</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(6)}>AirPods</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(7)}>家居</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(8)}>娱乐</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(9)}>配件</div>
                    <div className=" cursor-pointer" onMouseEnter={(e) => showBanner(10)}>技术支持</div>
                    <div className=" cursor-pointer" ><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
                        <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                    </svg></div>
                    <div className=" cursor-pointer" ><svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg></div>
                </div>
                {/* DownMenu */}
                <div onMouseLeave={(e) => { hideBanner(e.target) }} ref={downMenu} className=" overflow-hidden h-0 bg-white  m my-0  pb-20 pt-20  transition-[height] duration-500 ease-out">
                    <div className=" flex flex-row w-[1003.53px] mx-auto">
                        {
                            //5 + 5 + 0.7 + 0.75 + 1.75*n + 0.75*n
                            <div className=" mr-32">
                                <h2 className=" text-[0.7rem] tracking-[0.03rem] text-gray-500 mb-3">{d.first.title}</h2>
                                <ul>
                                    {d.first.links.map((x,i) => {
                                        //@ts-ignore
                                        return (<li key={x.name} className="mb-3  cursor-pointer  text-xl font-bold">{x.name}</li>)
                                    })}

                                </ul>
                            </div>
                        }
                        {
                            d.second.map(x => {
                                return (

                                    <div key={x.title} className=" mr-32">
                                        <h2 className=" text-[0.7rem] tracking-[0.03rem] text-gray-500 mb-3">{x.title}</h2>
                                        <ul>
                                            {x.links.map(x => {
                                                return (
                                                    <li key={x.name} className=" cursor-pointer text-[0.7rem] tracking-[0.03rem] text-black font-bold mb-3">
                                                        {x.name}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
            <div className=" relative z-[2]" style={{ height: '2.5rem', width: '100%' }}></div>
            <div>some message</div>
        </>
    )
}