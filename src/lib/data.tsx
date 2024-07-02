'use server'

export async function getNavigationData() {
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
    return data
}

export async function getGoodsImgs() {
    const data = [
        {
            name: 'Mac',
            link: '/goods/mac.png'
        }, {
            name: 'iPhone',
            link: '/goods/iphone.png'
        }, {
            name: 'iPad',
            link: '/goods/ipad.png'
        }, {
            name: 'Apple Watch',
            link: '/goods/iwatch.png'
        }, {
            name: 'Apple Vision Pro',
            link: '/goods/vision.png'
        }, {
            name: 'AirPods',
            link: '/goods/airpods.png'
        }, {
            name: 'AirTag',
            link: '/goods/airtag.png'
        }, {
            name: 'HomePod',
            link: '/goods/homepod.png'
        }, {
            name: '配件',
            link: '/goods/attachment.png'
        },

    ]
    return data
}

export async function getNewGoodsImgs() {
    const data = [
        {
            category: 'APPLE VISION PRO',
            title: '现可接受预购',
            des: '6月28日发售',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/newGoods/vision.jpg'
        }, {
            category: 'IPHONE 15 PRO',
            title: '钛金属',
            des: 'RMB 7999 起',
            colorCategory: 'white',
            color: 'white',
            imgLink: '/newGoods/iphone15pro.jpg'
        }, {
            category: 'IPAD PRO',
            title: '磅礴的薄',
            des: 'RMB 8999 起',
            colorCategory: 'white',
            color: 'white',
            imgLink: '/newGoods/ipadpro.jpg'
        }, {
            category: 'MACBOOK AIR',
            title: '主打一个行动力',
            des: 'RMB 7999 起',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/newGoods/macbookair.jpg'
        }, {
            category: 'IPAD AIR',
            title: '好轻新',
            des: 'RMB 4799 起',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/newGoods/ipadair.jpg'
        }, {
            category: 'APPLE PENCIL PRO',
            title: '为创意一画开天',
            des: 'RMB 999',
            colorCategory: 'white',
            color: 'white',
            imgLink: '/newGoods/pencil.jpg'
        }, {
            category: '彩虹版编织单圈表带',
            title: '心有光彩自飞扬',
            des: 'RMB 779',
            colorCategory: 'white',
            color: 'white',
            imgLink: '/newGoods/strap.jpg'
        }, {
            category: 'APPLE WATCH SERIES 9',
            title: '智能加成,加亮加实力。',
            des: 'RMB 2999 起',
            colorCategory: 'white',
            color: 'white',
            imgLink: '/newGoods/iwatch.jpg'
        }, {
            category: 'IPHONE 15',
            title: '开新的,超开心。',
            des: 'RMB 5999 起',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/newGoods/iphone15.jpg'
        }, {
            category: 'APPLE WATCH ULTRA 2',
            title: '野出新维度',
            des: 'RMB 6499 起',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/newGoods/iwatchultra.jpg'
        }, {
            category: 'MACBOOK PRO',
            title: '狠角色,很绝色。',
            des: 'RMB 12,999 起',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/newGoods/macbookpro.jpg'
        }, {
            category: 'APPLE WATCH SE',
            title: '好赞好入手',
            des: 'RMB 1999 起',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/newGoods/iwatchse.jpg'
        }
    ]
    return data
}

export async function getAttachmentGoods() {
    const data = [{
        title: '45 毫米彩虹版编制单圈表带 - 6 号',
        _new: '新款',
        price: 'RMB 779',
        imgLink: '/attachment/strap.jpg',
        hueLinks: [
            '/attachment/hue/strap/1.jpg',
        ]
    },
    {
        title: 'Apple Pencile Pro',
        _new: '新款',
        price: 'RMB 999',
        imgLink: '/attachment/pencil.jpg',
        hueLinks: [

        ]
    },
    {
        title: '妙控键盘 - 适用于 13 英寸 iPad Pro (M4) - 中文 (拼音) - 黑色',
        _new: '新款',
        price: 'RMB 2,799',
        imgLink: '/attachment/keyboard.jpg',
        hueLinks: [
            '/attachment/hue/keyboard/1.jpg',
            '/attachment/hue/keyboard/2.jpg',
        ]
    },
    {
        title: 'iPhone 15 Pro 专用 MagSafe 精织斜纹保护壳 - 冬青色',
        _new: '',
        price: 'RMB 479',
        imgLink: '/attachment/cover.jpg',
        hueLinks: [
            '/attachment/hue/cover/1.jpg',
            '/attachment/hue/cover/2.jpg',
            '/attachment/hue/cover/3.jpg',
            '/attachment/hue/cover/4.jpg',
            '/attachment/hue/cover/5.jpg',
        ]
    }, {
        title: 'iPhone 专用 MagSafe 精织斜纹卡包 - 海蓝色',
        _new: '',
        price: 'RMB 479',
        imgLink: '/attachment/magsafe.jpg',
        hueLinks: [
            '/attachment/hue/magsafe/1.jpg',
            '/attachment/hue/magsafe/2.jpg',
            '/attachment/hue/magsafe/3.jpg',
            '/attachment/hue/magsafe/4.jpg',
            '/attachment/hue/magsafe/5.jpg',
        ]
    },
    {
        title: '45 毫米淡薄荷色回环式运动表带',
        _new: '',
        price: 'RMB 379',
        imgLink: '/attachment/strap2.jpg',
        hueLinks: [
            '/attachment/hue/strap2/1.jpg',
            '/attachment/hue/strap2/2.jpg',
            '/attachment/hue/strap2/3.jpg',
            '/attachment/hue/strap2/4.jpg',
            '/attachment/hue/strap2/5.jpg',
            '/attachment/hue/strap2/6.jpg'
        ]
    },
    {
        title: 'iPhone 15 专用 MagSafe 硅胶保护壳 - 浅蓝色',
        _new: '',
        price: 'RMB 399',
        imgLink: '/attachment/MagSafecover.jpg',
        hueLinks: [
            '/attachment/hue/MagSafecover/1.jpg',
            '/attachment/hue/MagSafecover/2.jpg',
            '/attachment/hue/MagSafecover/3.jpg',
            '/attachment/hue/MagSafecover/4.jpg',
            '/attachment/hue/MagSafecover/5.jpg',
        ]
    },
    {
        title: '45 毫米彩虹版编制单圈表带 - 6 号',
        _new: '',
        price: 'RMB 779',
        imgLink: '/attachment/strap.jpg',
        hueLinks: [
            '/attachment/hue/strap/1.jpg',
        ]
    },
    {
        title: 'Tech21 EvoArt 保护壳 (适用于 AirPods Max)',
        _new: '',
        price: 'RMB 328',
        imgLink: '/attachment/AirPodscover.jpg',
        hueLinks: [
            '/attachment/hue/AirPodscover/1.jpg',
            '/attachment/hue/AirPodscover/2.jpg',
        ]
    }
    ]
    return data
}
export async function getMusciGoods() {
    const data = [{
        title: 'AirPods Pro (第二代) - 配 MagSafe 充电盒 (USB‑C)',
        _new: '免费镌刻服务',
        price: 'RMB 779',
        imgLink: '/music/airpodspro.jpg',
        hueLinks: [
            // '/attachment/hue/strap/1.jpg',
        ]
    },
    {
        title: 'HomePod - 午夜色',
        _new: '新款',
        price: 'RMB 999',
        imgLink: '/music/homepod.jpg',
        hueLinks: [

        ]
    },
    {
        title: 'AirPods Max - 银色',
        _new: '免费镌刻服务',
        price: 'RMB 2,799',
        imgLink: '/music/airpods-max.jpg',
        hueLinks: [
            '/attachment/hue/keyboard/1.jpg',
            '/attachment/hue/keyboard/2.jpg',
        ]
    },
    {
        title: 'HomePod mini - 黄色',
        _new: '',
        price: 'RMB 479',
        imgLink: '/music/homepod-mini.jpg',
        hueLinks: [
            '/attachment/hue/cover/1.jpg',
            '/attachment/hue/cover/2.jpg',
            '/attachment/hue/cover/3.jpg',
            '/attachment/hue/cover/4.jpg',
            '/attachment/hue/cover/5.jpg',
        ]
    }, {
        title: 'Beats Solo 4 — 无线头戴式耳机 – 云彩粉',
        _new: '',
        price: 'RMB 479',
        imgLink: '/music/pink.jpg',
        hueLinks: [
            '/attachment/hue/magsafe/1.jpg',
            '/attachment/hue/magsafe/2.jpg',
            '/attachment/hue/magsafe/3.jpg',
            '/attachment/hue/magsafe/4.jpg',
            '/attachment/hue/magsafe/5.jpg',
        ]
    },
    {
        title: 'AirPods (第三代) - 配闪电充电盒',
        _new: '免费镌刻服务',
        price: 'RMB 379',
        imgLink: '/music/apipods.jpg',
        hueLinks: [
        ]
    },
    {
        title: 'Beats Solo Buds - 真无线耳机 - 晶透红',
        _new: '新款',
        price: 'RMB 399',
        imgLink: '/music/red.jpg',
        hueLinks: [
            '/attachment/hue/MagSafecover/1.jpg',
            '/attachment/hue/MagSafecover/2.jpg',
            '/attachment/hue/MagSafecover/3.jpg',
            '/attachment/hue/MagSafecover/4.jpg',
            '/attachment/hue/MagSafecover/5.jpg',
        ]
    }
    ]
    return data
}

export async function getInfomation() {
    const data = [
        {
            category: 'ICLOUD+',
            title: '激活新 iPad 或 iPhone，免⁠费⁠试⁠用 6 个月 iCloud+ 轻⁠松⁠备⁠份^。  ',
            des: '',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/information/icloud.jpg'
        },
        {
            category: '',
            title: '周全保护有保障。   ',
            des: 'AppleCare+ 服务计划现可提供不限次数的意外损坏保修服务。',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/information/care.jpg'
        },
        {
            category: '',
            title: '探索 Apple Pay 的各种用‍法‍。',
            des: '',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/information/applepay.jpg'
        }, {
            category: '家庭',
            title: '看看一个 app 如何掌控你的整个家。',
            des: '',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/information/home.jpg'
        }
    ]
    return data
}

export async function getSpecialShops() {
    const data = [
        {
            category: '教育',
            title: '以教育优惠购买新 iPad 或 Mac，省更多',
            des: '',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/specialshop/education.jpg'
        },
        {
            category: '商务',
            title: '从大公司到小企业，我们都能助你一臂之力',
            des: '',
            colorCategory: 'gray',
            color: 'white',
            imgLink: '/specialshop/business.jpg'
        },
        {
            category: '认证的翻新产品',
            title: '选购 Apple 翻新产‍品‍，享‍受一年保修服务。',
            des: '',
            colorCategory: 'gray',
            color: 'black',
            imgLink: '/specialshop/renew.jpg'
        }
    ]
    return data
}

export async function getMacs() {
    const data = [

        [{
            "image": "/shop/mac/mbp.jpg",
            'hue':[ '/attachment/hue/cover/1.jpg',
                '/attachment/hue/cover/2.jpg',
                '/attachment/hue/cover/3.jpg',
                '/attachment/hue/cover/4.jpg',
                '/attachment/hue/cover/5.jpg',],
            "name": "MacBook Pro",
            "secondName":"14 英寸和 16 英寸",
             
            "chips":'M3、M3 Pro 或 M3 Max 芯片',
            "des": [
                '超先进的 Mac 笔电，',
                '艰巨任务巨拿手。'
            ],
            "price": 'RMB 542/月起或 RMB 12,999 起*'
        },
        {
            "image": "/shop/mac/mba.jpg",
            'hue':[ '/attachment/hue/cover/1.jpg',
                '/attachment/hue/cover/2.jpg',
                '/attachment/hue/cover/3.jpg',
                '/attachment/hue/cover/4.jpg',
                '/attachment/hue/cover/5.jpg',],
            "name": "MacBook Air",
            "secondName":"13 英寸和 15 英寸",
             
            "chips":'M2 或 M3 芯片',
            "des": [
                '超薄超快超便携，',
                '玩转工作创作和娱乐。'
            ],
            "price":"RMB 333/月起或 RMB 7999 起*"
        }],
        [{
            "image": "/shop/mac/imac.jpg",
            'hue':[ '/attachment/hue/cover/1.jpg',
                '/attachment/hue/cover/2.jpg',
                '/attachment/hue/cover/3.jpg',
                '/attachment/hue/cover/4.jpg',
                '/attachment/hue/cover/5.jpg',],
            "name": "iMac",
            "secondName":"",
             
            "chips":'M2 或 M2 Pro 芯片',
            "des": [
                '出色的一体机，',
                '创作和工作都出彩。'
            ],
            "price":"RMB 458/月起或 RMB 10,999 起*"
        },
        {
            "image": "/shop/mac/macmini.jpg",
            'hue':[],
            "name": "Mac mini",
            "secondName":"",
            "chips":'M2 或 M2 Pro 芯片',
            "des": [
                '超值的 Mac 台式机，',
                '实力不容小看。'
            ],
            "price":"RMB 187/月起或 RMB 4499 起*"
        },
        {
            "image": "/shop/mac/macstudio.jpg",
            'hue':[],
            "name": "Mac Studio",
            "secondName":"",
            "chips":'M2 Max 或 M2 Ultra 芯片',
            "des": [
                '性能强端口多，',
                '专业各种对口。'
            ],
            "price":"RMB 687/月起或 RMB 16,499 起*"
        },
        {
            "image": "/shop/mac/macpro.jpg",
            'hue':[],
            "name": "Mac Pro",
            "secondName":"",
            "chips":'M2 Ultra 芯片',
            "des": [
                '可 PCIe 扩展的专业工作站，',
                '专攻重大任务。'
            ],
            "price":"RMB 2,333/月起或 RMB 55,999 起*"
        },],
        [{
            "image": "/shop/mac/display.jpg",
            'hue':[],
            "name": "Studio Display",
            "secondName":"",
            "chips":'M2 Ultra 芯片',
            "des": [
                '5K 视网膜显示屏，',
                '联手惊艳的摄像头和音响。'
            ],
            "price":"RMB 479/月起或 RMB 11,499 起*"
        },
        {
            "image": "/shop/mac/displayxdr.jpg",
            'hue':[],
            "name": "Pro Display XDR",
            "secondName":"",
            "chips":'M2 Ultra 芯片',
            "des": [
                '先进的 6K XDR 显示屏，',
                '专为专业工作而设。'
            ],
            "price":"RMB 1,667/月起或 RMB 39,999 起*"
        }]
    ]
    return data
}

export async function getMacFeatures () {

    const data = [
        {
            "image": "/shop/mac/feature/1.png",
            title:[
                '分期付款方案任你选。',
                ''
            ],
            information:'各种方便的分期付款方案，为你更添轻松。'
        },
        {
            "image": "/shop/mac/feature/2.png",
            title:[
                'Apple Trade In',
                '换购计划，帮你省一笔。'
            ],
            information:'用符合条件的设备换购新Mac,可享折抵享受优惠。'
        },
        {
            "image": "/shop/mac/feature/3.png",
            title:[
                '可免费送货，',
                '也可到店取货。'
            ],
            information:'免费送货服务，或前往Apple Store零售店取货。'
        },
        {
            "image": "/shop/mac/feature/4.png",
            title:[
                'Mac定制',
                ''
            ],
            information:'选择你想要的芯片、内存、存储容量，以及外观颜色。'
        },
        {
            "image": "/shop/mac/feature/5.png",
            title:[
                'Specialist专家',
                '一对一协助选购。'
            ],
            information:'无论在线或是在店内，我们都乐意为你提供协助。'
        },
        {
            "image": "/shop/mac/feature/6.png",
            title:[
                '专属于你的购物体验。',
                ''
            ],
            information:'更个性化的购物方式，尽在 Apple Store app。'
        },
    ]
    return data
}