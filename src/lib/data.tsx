'use server'
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
export async function getNavigationData() {
    return data
}