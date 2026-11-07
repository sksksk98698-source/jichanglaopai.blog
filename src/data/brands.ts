export interface Plan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  period: string;
}

export interface Metric {
  node: string;
  latency: string;
  download: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  alias?: string;
  isFeatured: boolean;
  isTop10: boolean;
  rank: number;
  tier: 'flagship' | 'core' | 'budget' | 'standard' | 'value' | 'archive';
  launchYear: string;
  affiliateUrl: string;
  couponCode: string;
  priceStarting: string;
  lineType: string;
  protocol: string;
  nodesCount: string;
  bandwidth: string;
  clientSupport: string;
  hasSpeedtest: boolean;
  speedtestImage?: string;
  speedtestGallery?: string[];
  testMetrics: Metric[];
  unlockStreaming: string[];
  unlockAI: string[];
  tags: string[];
  shortDesc: string;
  fullDesc: string;
  uniqueSellingPoint: string;
  pros: string[];
  cons: string[];
  plans: Plan[];
  faq: { q: string; a: string }[];
  dataStatus: 'measured' | 'verified' | 'vendor' | 'historical';
  updatedAt: string;
}

export const brands: Brand[] = [
  {
    "id": 1,
    "name": "光速云",
    "slug": "guangshuyun",
    "alias": "gsy",
    "isFeatured": true,
    "isTop10": true,
    "rank": 1,
    "tier": "flagship",
    "launchYear": "2020",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "couponCode": "AMM",
    "priceStarting": "年付折合 ¥8 / 月 (入门 59GB)",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "70+ 核心节点",
    "bandwidth": "单节点最高 2.5Gbps",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/光速云-节点测速实测.png",
    "speedtestGallery": [
      "/images/speedtest/guangshuyun/photo_2026-08-19_12-13-01.jpg",
      "/images/speedtest/guangshuyun/photo_2026-08-19_12-13-50.jpg",
      "/images/speedtest/guangshuyun/photo_2026-08-19_12-18-40.jpg",
      "/images/speedtest/guangshuyun/photo_2026-08-19_12-20-10.jpg"
    ],
    "testMetrics": [
      {
        "node": "香港 01 IEPL",
        "latency": "22ms",
        "download": "529 Mbps"
      },
      {
        "node": "台湾 01 专线",
        "latency": "41ms",
        "download": "114 Mbps"
      },
      {
        "node": "新加坡 01 专线",
        "latency": "46ms",
        "download": "387 Mbps"
      },
      {
        "node": "日本 01 专线",
        "latency": "57ms",
        "download": "135 Mbps"
      },
      {
        "node": "美国 01 优化",
        "latency": "143ms",
        "download": "18 Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "2020年运营",
      "IEPL企业级内网",
      "VLESS协议",
      "月付/永久套餐",
      "全原生IP",
      "第一主推"
    ],
    "shortDesc": "2020年稳定运营老牌综合机场，IEPL专线与企业级内网双线路架构，VLESS协议，提供独家斯诺克147永久套餐及自研一键登录客户端。",
    "fullDesc": "2020年稳定运营老牌综合机场，IEPL专线与企业级内网双线路架构，VLESS协议，提供独家斯诺克147永久套餐及自研一键登录客户端。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "IEPL+企业内网双专线架构 · 独家247GB永久不过期套餐 · 7×24小时高可用运维",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性不过期",
        "price": "¥147",
        "traffic": "247GB (永久不过期)",
        "period": "永久"
      },
      {
        "name": "轻量入门版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB / 月",
        "period": "每年"
      },
      {
        "name": "极速标准版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB / 月",
        "period": "每月"
      },
      {
        "name": "流光进阶版",
        "billing": "月付",
        "price": "¥34",
        "traffic": "268GB / 月",
        "period": "每月"
      },
      {
        "name": "量子高配版",
        "billing": "月付",
        "price": "¥68",
        "traffic": "568GB / 月",
        "period": "每月"
      },
      {
        "name": "定制企业版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB 独享IP",
        "period": "每月"
      }
    ],
    "faq": [
      {
        "q": "光速云 适合哪类用户使用？",
        "a": "光速云专为对跨国网络稳定度有严苛要求的科研人员、跨境出海（TikTok/跨境电商）、AI 开发者（ChatGPT/Claude 3.7 重度交互）以及 4K/8K 极清流媒体爱好者打造。全系列采用企业级专线与 VLESS 协议，网络环境纯净度高。"
      },
      {
        "q": "光速云 在晚高峰时段的卡顿与丢包表现如何？",
        "a": "老牌机场实验室在 20:00 - 23:00 晚高峰实测显示：光速云香港 IPLC 节点延迟稳定在 22ms 左右，下行带宽实测达 529Mbps，丢包率趋近于 0。专线架构不受公网国际出口拥堵干扰，保障 4K 视频秒开无缓冲。"
      },
      {
        "q": "支持哪些客户端，小白用户容易上手吗？",
        "a": "支持 Windows、macOS、iOS 和 Android 全平台。除了支持标准的 Clash Verge Rev、Sing-box、Shadowrocket（小火箭）一键订阅导入外，光速云还提供自研一键登录客户端，无需手动复制节点链接即可直接连接。"
      },
      {
        "q": "光速云 套餐如何选？有优惠码吗？",
        "a": "入门推荐年付折合 ¥8/月套餐（59GB），适合日常网页查资料与轻度影音；高频重度用户推荐致敬斯诺克147永久套餐（¥147 享 247GB 永久不过期流量）。结账时可输入本站专属优惠码【AMM】享受额外折扣。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 2,
    "name": "暮光加速",
    "slug": "muguang",
    "alias": "muguang",
    "isFeatured": false,
    "isTop10": true,
    "rank": 2,
    "tier": "core",
    "launchYear": "2023",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "couponCode": "muguang5555",
    "priceStarting": "¥20 / 月 (120GB)",
    "lineType": "IEPL 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 01 专线",
        "latency": "26ms",
        "download": "509 Mbps"
      },
      {
        "node": "台湾 01 专线",
        "latency": "40ms",
        "download": "107 Mbps"
      },
      {
        "node": "新加坡 01 专线",
        "latency": "43ms",
        "download": "419 Mbps"
      },
      {
        "node": "日本 01 专线",
        "latency": "53ms",
        "download": "150 Mbps"
      },
      {
        "node": "美国 01 专线",
        "latency": "160ms",
        "download": "19 Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "BGP智能调度与专线级出口，全平台覆盖，提供多档位月付与不限时大容量包，满足长时稳定传输。",
    "fullDesc": "BGP智能调度与专线级出口，全平台覆盖，提供多档位月付与不限时大容量包，满足长时稳定传输。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "BGP智能调度 · 专线级出口 · 全平台支持与7×24真人客服",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB / 月",
        "period": "每月"
      },
      {
        "name": "标准版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB / 月",
        "period": "每月"
      },
      {
        "name": "旗舰版",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB / 月",
        "period": "每月"
      },
      {
        "name": "年付轻量版",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB / 月",
        "period": "每年"
      },
      {
        "name": "不限时轻量包",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB 一次性",
        "period": "永久"
      }
    ],
    "faq": [
      {
        "q": "暮光加速 的线路架构与目标受众是什么？",
        "a": "暮光加速 主要采用 IEPL 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 BGP智能调度 · 专线级出口 · 全平台支持与7×24真人客服。"
      },
      {
        "q": "暮光加速 在晚高峰期的网络抗抖动能力如何？",
        "a": "暮光加速 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "暮光加速 支持哪些客户端订阅，如何快速配置？",
        "a": "暮光加速 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "暮光加速 的价格起步与购买避坑建议有哪些？",
        "a": "暮光加速 的参考起步价格约为 ¥20 / 月 (120GB)。当前结算可尝试输入优惠码【muguang5555】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 3,
    "name": "飞猫云",
    "slug": "feimao",
    "alias": "feimao",
    "isFeatured": false,
    "isTop10": true,
    "rank": 3,
    "tier": "core",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "couponCode": "flycat888",
    "priceStarting": "折合 ¥7 / 月起",
    "lineType": "IEPL 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/飞猫云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "飞猫云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "飞猫云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "7元档 + 8折",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "折合",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "飞猫云 的线路架构与目标受众是什么？",
        "a": "飞猫云 主要采用 IEPL 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 7元档 + 8折。"
      },
      {
        "q": "飞猫云 在晚高峰期的网络抗抖动能力如何？",
        "a": "飞猫云 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "飞猫云 支持哪些客户端订阅，如何快速配置？",
        "a": "飞猫云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "飞猫云 的价格起步与购买避坑建议有哪些？",
        "a": "飞猫云 的参考起步价格约为 折合 ¥7 / 月起。当前结算可尝试输入优惠码【flycat888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 4,
    "name": "微风网络",
    "slug": "weifeng",
    "alias": "weifeng",
    "isFeatured": false,
    "isTop10": true,
    "rank": 4,
    "tier": "core",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "couponCode": "flat888",
    "priceStarting": "折合 ¥7 / 月起",
    "lineType": "IEPL 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/微风-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "微风网络 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "微风网络 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "7元档 + 9折",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "折合",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "微风网络 的线路架构与目标受众是什么？",
        "a": "微风网络 主要采用 IEPL 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 7元档 + 9折。"
      },
      {
        "q": "微风网络 在晚高峰期的网络抗抖动能力如何？",
        "a": "微风网络 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "微风网络 支持哪些客户端订阅，如何快速配置？",
        "a": "微风网络 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "微风网络 的价格起步与购买避坑建议有哪些？",
        "a": "微风网络 的参考起步价格约为 折合 ¥7 / 月起。当前结算可尝试输入优惠码【flat888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 5,
    "name": "大佬云",
    "slug": "dalaoyun",
    "alias": "dalaoyun",
    "isFeatured": false,
    "isTop10": true,
    "rank": 5,
    "tier": "core",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "couponCode": "dly888",
    "priceStarting": "¥5.6 / 月 (60GB)",
    "lineType": "IEPL 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "大佬云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "大佬云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "5.6元/月 + 60GB",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥5.6",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "大佬云 的线路架构与目标受众是什么？",
        "a": "大佬云 主要采用 IEPL 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 5.6元/月 + 60GB。"
      },
      {
        "q": "大佬云 在晚高峰期的网络抗抖动能力如何？",
        "a": "大佬云 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "大佬云 支持哪些客户端订阅，如何快速配置？",
        "a": "大佬云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "大佬云 的价格起步与购买避坑建议有哪些？",
        "a": "大佬云 的参考起步价格约为 ¥5.6 / 月 (60GB)。当前结算可尝试输入优惠码【dly888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 6,
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "alias": "xingdaomeng",
    "isFeatured": false,
    "isTop10": true,
    "rank": 6,
    "tier": "core",
    "launchYear": "2020",
    "affiliateUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "couponCode": "nmw888",
    "priceStarting": "不限时按量 / 月付",
    "lineType": "IEPL 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/星岛梦-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "星岛梦 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "星岛梦 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "2020年运营 + 不限时套餐",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "不限时按量",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "星岛梦 的线路架构与目标受众是什么？",
        "a": "星岛梦 主要采用 IEPL 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 2020年运营 + 不限时套餐。"
      },
      {
        "q": "星岛梦 在晚高峰期的网络抗抖动能力如何？",
        "a": "星岛梦 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "星岛梦 支持哪些客户端订阅，如何快速配置？",
        "a": "星岛梦 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "星岛梦 的价格起步与购买避坑建议有哪些？",
        "a": "星岛梦 的参考起步价格约为 不限时按量 / 月付。当前结算可尝试输入优惠码【nmw888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 7,
    "name": "二猫云",
    "slug": "ermao",
    "alias": "ermao",
    "isFeatured": false,
    "isTop10": true,
    "rank": 7,
    "tier": "core",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "couponCode": "ermao5555",
    "priceStarting": "¥20 / 月 (130GB)",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/二猫云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "二猫云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "二猫云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "20元130GB",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "二猫云 的线路架构与目标受众是什么？",
        "a": "二猫云 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 20元130GB。"
      },
      {
        "q": "二猫云 在晚高峰期的网络抗抖动能力如何？",
        "a": "二猫云 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "二猫云 支持哪些客户端订阅，如何快速配置？",
        "a": "二猫云 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "二猫云 的价格起步与购买避坑建议有哪些？",
        "a": "二猫云 的参考起步价格约为 ¥20 / 月 (130GB)。当前结算可尝试输入优惠码【ermao5555】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 8,
    "name": "无忧链接",
    "slug": "wuyou",
    "alias": "wuyou",
    "isFeatured": false,
    "isTop10": true,
    "rank": 8,
    "tier": "core",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "couponCode": "wuyou666",
    "priceStarting": "¥6 / 月起",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/无忧链接.jpg",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "无忧链接 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "无忧链接 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "订阅无需转换 + 6元轻量套餐",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥6",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "无忧链接 的线路架构与目标受众是什么？",
        "a": "无忧链接 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 订阅无需转换 + 6元轻量套餐。"
      },
      {
        "q": "无忧链接 在晚高峰期的网络抗抖动能力如何？",
        "a": "无忧链接 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "无忧链接 支持哪些客户端订阅，如何快速配置？",
        "a": "无忧链接 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "无忧链接 的价格起步与购买避坑建议有哪些？",
        "a": "无忧链接 的参考起步价格约为 ¥6 / 月起。当前结算可尝试输入优惠码【wuyou666】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 9,
    "name": "唯兔云",
    "slug": "weitu",
    "alias": "weitu",
    "isFeatured": false,
    "isTop10": true,
    "rank": 9,
    "tier": "core",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "couponCode": "weitu666",
    "priceStarting": "¥15 / 月起",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "60+ 优化节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/唯兔云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "唯兔云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "唯兔云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "60+节点 + 三网优化 + 智能负载均衡",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "唯兔云 的线路架构与目标受众是什么？",
        "a": "唯兔云 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 60+ 优化节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 60+节点 + 三网优化 + 智能负载均衡。"
      },
      {
        "q": "唯兔云 在晚高峰期的网络抗抖动能力如何？",
        "a": "唯兔云 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "唯兔云 支持哪些客户端订阅，如何快速配置？",
        "a": "唯兔云 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "唯兔云 的价格起步与购买避坑建议有哪些？",
        "a": "唯兔云 的参考起步价格约为 ¥15 / 月起。当前结算可尝试输入优惠码【weitu666】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 10,
    "name": "Firefly",
    "slug": "firefly",
    "alias": "firefly",
    "isFeatured": false,
    "isTop10": true,
    "rank": 10,
    "tier": "core",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "couponCode": "firefly",
    "priceStarting": "¥25 / 月起",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "老牌口碑",
      "晚高峰保障",
      "4K无缓冲",
      "全平台客户端",
      "Top10精选"
    ],
    "shortDesc": "Firefly 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "Firefly 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "IPLC + 6档套餐 + 免翻墙访问官网",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥25",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "Firefly 的线路架构与目标受众是什么？",
        "a": "Firefly 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。定位核心高品质服务，适合对跨境办公、协同工具及流媒体有稳定持续需求的用户。 IPLC + 6档套餐 + 免翻墙访问官网。"
      },
      {
        "q": "Firefly 在晚高峰期的网络抗抖动能力如何？",
        "a": "Firefly 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "Firefly 支持哪些客户端订阅，如何快速配置？",
        "a": "Firefly 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "Firefly 的价格起步与购买避坑建议有哪些？",
        "a": "Firefly 的参考起步价格约为 ¥25 / 月起。当前结算可尝试输入优惠码【firefly】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 11,
    "name": "宇宙云",
    "slug": "yuzhou",
    "alias": "yuzhou",
    "isFeatured": false,
    "isTop10": false,
    "rank": 11,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "couponCode": "YUZHOU553",
    "priceStarting": "¥8 / 月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/宇宙云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "宇宙云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "宇宙云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "IEPL+VLESS+自研客户端",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "宇宙云 的线路架构与目标受众是什么？",
        "a": "宇宙云 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 IEPL+VLESS+自研客户端。"
      },
      {
        "q": "宇宙云 在晚高峰期的网络抗抖动能力如何？",
        "a": "宇宙云 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "宇宙云 支持哪些客户端订阅，如何快速配置？",
        "a": "宇宙云 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "宇宙云 的价格起步与购买避坑建议有哪些？",
        "a": "宇宙云 的参考起步价格约为 ¥8 / 月。当前结算可尝试输入优惠码【YUZHOU553】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 12,
    "name": "U1S1",
    "slug": "u1s1",
    "alias": "u1s1",
    "isFeatured": false,
    "isTop10": false,
    "rank": 12,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "couponCode": "akaka",
    "priceStarting": "20元",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/U1S1-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "U1S1 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "U1S1 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "20元120GB 标准方案",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "20元",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "U1S1 的线路架构与目标受众是什么？",
        "a": "U1S1 主要采用 全 IPLC 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 20元120GB 标准方案。"
      },
      {
        "q": "U1S1 在晚高峰期的网络抗抖动能力如何？",
        "a": "U1S1 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "U1S1 支持哪些客户端订阅，如何快速配置？",
        "a": "U1S1 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "U1S1 的价格起步与购买避坑建议有哪些？",
        "a": "U1S1 的参考起步价格约为 20元。当前结算可尝试输入优惠码【akaka】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 13,
    "name": "灵猫网络",
    "slug": "lingmao",
    "alias": "lingmao",
    "isFeatured": false,
    "isTop10": false,
    "rank": 13,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "couponCode": "lmao888",
    "priceStarting": "19元",
    "lineType": "IEPL 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/灵猫网络-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "灵猫网络 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "灵猫网络 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "19元150GB + 不限时套餐",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "19元",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "灵猫网络 的线路架构与目标受众是什么？",
        "a": "灵猫网络 主要采用 IEPL 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 19元150GB + 不限时套餐。"
      },
      {
        "q": "灵猫网络 在晚高峰期的网络抗抖动能力如何？",
        "a": "灵猫网络 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "灵猫网络 支持哪些客户端订阅，如何快速配置？",
        "a": "灵猫网络 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "灵猫网络 的价格起步与购买避坑建议有哪些？",
        "a": "灵猫网络 的参考起步价格约为 19元。当前结算可尝试输入优惠码【lmao888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 14,
    "name": "极连云",
    "slug": "jilian",
    "alias": "jilian",
    "isFeatured": false,
    "isTop10": false,
    "rank": 14,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "couponCode": "ji8888",
    "priceStarting": "18元",
    "lineType": "IEPL 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/极连云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "极连云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "极连云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "18元100GB + 品牌资料说覆盖AI",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "18元",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "极连云 的线路架构与目标受众是什么？",
        "a": "极连云 主要采用 IEPL 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 18元100GB + 品牌资料说覆盖AI。"
      },
      {
        "q": "极连云 在晚高峰期的网络抗抖动能力如何？",
        "a": "极连云 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "极连云 支持哪些客户端订阅，如何快速配置？",
        "a": "极连云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "极连云 的价格起步与购买避坑建议有哪些？",
        "a": "极连云 的参考起步价格约为 18元。当前结算可尝试输入优惠码【ji8888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 15,
    "name": "光年梯",
    "slug": "guangnian",
    "alias": "guangnian",
    "isFeatured": false,
    "isTop10": false,
    "rank": 15,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "couponCode": "gnt6666",
    "priceStarting": "18元",
    "lineType": "IEPL 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/光年梯-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "光年梯 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "光年梯 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "18元110GB",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "18元",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "光年梯 的线路架构与目标受众是什么？",
        "a": "光年梯 主要采用 IEPL 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 18元110GB。"
      },
      {
        "q": "光年梯 在晚高峰期的网络抗抖动能力如何？",
        "a": "光年梯 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "光年梯 支持哪些客户端订阅，如何快速配置？",
        "a": "光年梯 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "光年梯 的价格起步与购买避坑建议有哪些？",
        "a": "光年梯 的参考起步价格约为 18元。当前结算可尝试输入优惠码【gnt6666】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 16,
    "name": "一翻云",
    "slug": "yifan",
    "alias": "yifan",
    "isFeatured": false,
    "isTop10": false,
    "rank": 16,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "couponCode": "yfy6666",
    "priceStarting": "20元",
    "lineType": "IEPL 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/一翻云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "一翻云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "一翻云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "20元150GB",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "20元",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "一翻云 的线路架构与目标受众是什么？",
        "a": "一翻云 主要采用 IEPL 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 20元150GB。"
      },
      {
        "q": "一翻云 在晚高峰期的网络抗抖动能力如何？",
        "a": "一翻云 采用 IEPL 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "一翻云 支持哪些客户端订阅，如何快速配置？",
        "a": "一翻云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "一翻云 的价格起步与购买避坑建议有哪些？",
        "a": "一翻云 的参考起步价格约为 20元。当前结算可尝试输入优惠码【yfy6666】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 17,
    "name": "SOGO云",
    "slug": "sogo",
    "alias": "sogo",
    "isFeatured": false,
    "isTop10": false,
    "rank": 17,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "couponCode": "sss777",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/SOGO云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "SOGO云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "SOGO云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "2026年新品牌",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "SOGO云 的线路架构与目标受众是什么？",
        "a": "SOGO云 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 2026年新品牌。"
      },
      {
        "q": "SOGO云 在晚高峰期的网络抗抖动能力如何？",
        "a": "SOGO云 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "SOGO云 支持哪些客户端订阅，如何快速配置？",
        "a": "SOGO云 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "SOGO云 的价格起步与购买避坑建议有哪些？",
        "a": "SOGO云 的参考起步价格约为 ¥8 / 月。当前结算可尝试输入优惠码【sss777】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 18,
    "name": "可信云",
    "slug": "kexin",
    "alias": "kexin",
    "isFeatured": false,
    "isTop10": false,
    "rank": 18,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "couponCode": "kkk333",
    "priceStarting": "¥8 / 月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/可信云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "可信云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "可信云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "品牌资料诚实标注数据缺口",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "可信云 的线路架构与目标受众是什么？",
        "a": "可信云 主要采用 全 IPLC 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 品牌资料诚实标注数据缺口。"
      },
      {
        "q": "可信云 在晚高峰期的网络抗抖动能力如何？",
        "a": "可信云 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "可信云 支持哪些客户端订阅，如何快速配置？",
        "a": "可信云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "可信云 的价格起步与购买避坑建议有哪些？",
        "a": "可信云 的参考起步价格约为 ¥8 / 月。当前结算可尝试输入优惠码【kkk333】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 19,
    "name": "速界",
    "slug": "sujie",
    "alias": "sujie",
    "isFeatured": false,
    "isTop10": false,
    "rank": 19,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "couponCode": "sss1111",
    "priceStarting": "¥8 / 月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/速界-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "速界 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "速界 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "品牌资料强调AI工具",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "速界 的线路架构与目标受众是什么？",
        "a": "速界 主要采用 全 IPLC 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 品牌资料强调AI工具。"
      },
      {
        "q": "速界 在晚高峰期的网络抗抖动能力如何？",
        "a": "速界 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "速界 支持哪些客户端订阅，如何快速配置？",
        "a": "速界 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "速界 的价格起步与购买避坑建议有哪些？",
        "a": "速界 的参考起步价格约为 ¥8 / 月。当前结算可尝试输入优惠码【sss1111】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 20,
    "name": "闪跃",
    "slug": "shanyue",
    "alias": "shanyue",
    "isFeatured": false,
    "isTop10": false,
    "rank": 20,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "couponCode": "shanyue",
    "priceStarting": "24元",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "闪跃 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "闪跃 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "24元150GB",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "24元",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "闪跃 的线路架构与目标受众是什么？",
        "a": "闪跃 主要采用 全 IPLC 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 24元150GB。"
      },
      {
        "q": "闪跃 在晚高峰期的网络抗抖动能力如何？",
        "a": "闪跃 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "闪跃 支持哪些客户端订阅，如何快速配置？",
        "a": "闪跃 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "闪跃 的价格起步与购买避坑建议有哪些？",
        "a": "闪跃 的参考起步价格约为 24元。当前结算可尝试输入优惠码【shanyue】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 21,
    "name": "全球云",
    "slug": "quanqiu",
    "alias": "quanqiu",
    "isFeatured": false,
    "isTop10": false,
    "rank": 21,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "couponCode": "qqy7777",
    "priceStarting": "¥8 / 月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": true,
    "speedtestImage": "/images/speedtest/全球云-节点测速实测.png",
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "全球云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "全球云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "2026年新品牌",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "全球云 的线路架构与目标受众是什么？",
        "a": "全球云 主要采用 全 IPLC 专线 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 2026年新品牌。"
      },
      {
        "q": "全球云 在晚高峰期的网络抗抖动能力如何？",
        "a": "全球云 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "全球云 支持哪些客户端订阅，如何快速配置？",
        "a": "全球云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "全球云 的价格起步与购买避坑建议有哪些？",
        "a": "全球云 的参考起步价格约为 ¥8 / 月。当前结算可尝试输入优惠码【qqy7777】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "measured",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 22,
    "name": "闪电鼠",
    "slug": "shandianshu",
    "alias": "shandianshu",
    "isFeatured": false,
    "isTop10": false,
    "rank": 22,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "couponCode": "sd88",
    "priceStarting": "5.6元/月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "闪电鼠 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "闪电鼠 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "5.6元/月 + 60GB",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "闪电鼠 的线路架构与目标受众是什么？",
        "a": "闪电鼠 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 5.6元/月 + 60GB。"
      },
      {
        "q": "闪电鼠 在晚高峰期的网络抗抖动能力如何？",
        "a": "闪电鼠 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "闪电鼠 支持哪些客户端订阅，如何快速配置？",
        "a": "闪电鼠 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "闪电鼠 的价格起步与购买避坑建议有哪些？",
        "a": "闪电鼠 的参考起步价格约为 5.6元/月。当前结算可尝试输入优惠码【sd88】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 23,
    "name": "云界线",
    "slug": "yunjiexian",
    "alias": "yunjiexian",
    "isFeatured": false,
    "isTop10": false,
    "rank": 23,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "couponCode": "yjx888",
    "priceStarting": "5.6元/月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "云界线 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "云界线 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "5.6元/月 + 60GB（链接格式异常）",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "云界线 的线路架构与目标受众是什么？",
        "a": "云界线 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 5.6元/月 + 60GB（链接格式异常）。"
      },
      {
        "q": "云界线 在晚高峰期的网络抗抖动能力如何？",
        "a": "云界线 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "云界线 支持哪些客户端订阅，如何快速配置？",
        "a": "云界线 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "云界线 的价格起步与购买避坑建议有哪些？",
        "a": "云界线 的参考起步价格约为 5.6元/月。当前结算可尝试输入优惠码【yjx888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 24,
    "name": "榴莲云",
    "slug": "liulianyun",
    "alias": "liulianyun",
    "isFeatured": false,
    "isTop10": false,
    "rank": 24,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "couponCode": "ll88",
    "priceStarting": "5.6元/月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "榴莲云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "榴莲云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "5.6元/月 + 60GB（协议未明）",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "榴莲云 的线路架构与目标受众是什么？",
        "a": "榴莲云 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 5.6元/月 + 60GB（协议未明）。"
      },
      {
        "q": "榴莲云 在晚高峰期的网络抗抖动能力如何？",
        "a": "榴莲云 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "榴莲云 支持哪些客户端订阅，如何快速配置？",
        "a": "榴莲云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "榴莲云 的价格起步与购买避坑建议有哪些？",
        "a": "榴莲云 的参考起步价格约为 5.6元/月。当前结算可尝试输入优惠码【ll88】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 25,
    "name": "神行加速",
    "slug": "shenxing",
    "alias": "shenxing",
    "isFeatured": false,
    "isTop10": false,
    "rank": 25,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "couponCode": "xs0077",
    "priceStarting": "14元/月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "神行加速 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "神行加速 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "14元/月 + 120GB",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "14元/月",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "神行加速 的线路架构与目标受众是什么？",
        "a": "神行加速 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 14元/月 + 120GB。"
      },
      {
        "q": "神行加速 在晚高峰期的网络抗抖动能力如何？",
        "a": "神行加速 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "神行加速 支持哪些客户端订阅，如何快速配置？",
        "a": "神行加速 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "神行加速 的价格起步与购买避坑建议有哪些？",
        "a": "神行加速 的参考起步价格约为 14元/月。当前结算可尝试输入优惠码【xs0077】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 26,
    "name": "环球梯",
    "slug": "huanqiuti",
    "alias": "huanqiuti",
    "isFeatured": false,
    "isTop10": false,
    "rank": 26,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "couponCode": "HQ66",
    "priceStarting": "5.6元/月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "环球梯 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "环球梯 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "5.6元/月 + 60GB（链接格式异常）",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "5.6元/月",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "环球梯 的线路架构与目标受众是什么？",
        "a": "环球梯 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 5.6元/月 + 60GB（链接格式异常）。"
      },
      {
        "q": "环球梯 在晚高峰期的网络抗抖动能力如何？",
        "a": "环球梯 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "环球梯 支持哪些客户端订阅，如何快速配置？",
        "a": "环球梯 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "环球梯 的价格起步与购买避坑建议有哪些？",
        "a": "环球梯 的参考起步价格约为 5.6元/月。当前结算可尝试输入优惠码【HQ66】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 27,
    "name": "隐形人",
    "slug": "yinxingren",
    "alias": "yinxingren",
    "isFeatured": false,
    "isTop10": false,
    "rank": 27,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "couponCode": "yxr888",
    "priceStarting": "¥8 / 月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "隐形人 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "隐形人 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "60+节点详细清单 + 1小时修复承诺 + 不提供第三方订阅",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "隐形人 的线路架构与目标受众是什么？",
        "a": "隐形人 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 60+节点详细清单 + 1小时修复承诺 + 不提供第三方订阅。"
      },
      {
        "q": "隐形人 在晚高峰期的网络抗抖动能力如何？",
        "a": "隐形人 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "隐形人 支持哪些客户端订阅，如何快速配置？",
        "a": "隐形人 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "隐形人 的价格起步与购买避坑建议有哪些？",
        "a": "隐形人 的参考起步价格约为 ¥8 / 月。当前结算可尝试输入优惠码【yxr888】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 28,
    "name": "梯子云",
    "slug": "tiziyun",
    "alias": "tiziyun",
    "isFeatured": false,
    "isTop10": false,
    "rank": 28,
    "tier": "standard",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "couponCode": "tiziyun",
    "priceStarting": "¥8 / 月",
    "lineType": "全 IPLC 专线",
    "protocol": "VLESS",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "自研客户端 + 通用第三方订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "梯子云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "梯子云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "自研全平台客户端 + 一键登录 + 支持通用订阅",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "梯子云 的线路架构与目标受众是什么？",
        "a": "梯子云 主要采用 全 IPLC 专线 架构，传输协议以 VLESS 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 自研全平台客户端 + 一键登录 + 支持通用订阅。"
      },
      {
        "q": "梯子云 在晚高峰期的网络抗抖动能力如何？",
        "a": "梯子云 采用 全 IPLC 专线 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "梯子云 支持哪些客户端订阅，如何快速配置？",
        "a": "梯子云 自研客户端 + 通用第三方订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "梯子云 的价格起步与购买避坑建议有哪些？",
        "a": "梯子云 的参考起步价格约为 ¥8 / 月。当前结算可尝试输入优惠码【tiziyun】。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 29,
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "alias": "wgetcloud",
    "isFeatured": false,
    "isTop10": false,
    "rank": 29,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "WgetCloud 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "WgetCloud 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "WgetCloud 的线路架构与目标受众是什么？",
        "a": "WgetCloud 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "WgetCloud 在晚高峰期的网络抗抖动能力如何？",
        "a": "WgetCloud 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "WgetCloud 支持哪些客户端订阅，如何快速配置？",
        "a": "WgetCloud 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "WgetCloud 的价格起步与购买避坑建议有哪些？",
        "a": "WgetCloud 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 30,
    "name": "白月光",
    "slug": "baiyueguang",
    "alias": "baiyueguang",
    "isFeatured": false,
    "isTop10": false,
    "rank": 30,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "白月光 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "白月光 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "白月光 的线路架构与目标受众是什么？",
        "a": "白月光 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "白月光 在晚高峰期的网络抗抖动能力如何？",
        "a": "白月光 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "白月光 支持哪些客户端订阅，如何快速配置？",
        "a": "白月光 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "白月光 的价格起步与购买避坑建议有哪些？",
        "a": "白月光 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 31,
    "name": "FlyingBird",
    "slug": "flyingbird",
    "alias": "flyingbird",
    "isFeatured": false,
    "isTop10": false,
    "rank": 31,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "FlyingBird 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "FlyingBird 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "FlyingBird 的线路架构与目标受众是什么？",
        "a": "FlyingBird 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "FlyingBird 在晚高峰期的网络抗抖动能力如何？",
        "a": "FlyingBird 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "FlyingBird 支持哪些客户端订阅，如何快速配置？",
        "a": "FlyingBird 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "FlyingBird 的价格起步与购买避坑建议有哪些？",
        "a": "FlyingBird 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 32,
    "name": "CyberGuard",
    "slug": "cyberguard",
    "alias": "cyberguard",
    "isFeatured": false,
    "isTop10": false,
    "rank": 32,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "CyberGuard 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "CyberGuard 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "CyberGuard 的线路架构与目标受众是什么？",
        "a": "CyberGuard 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "CyberGuard 在晚高峰期的网络抗抖动能力如何？",
        "a": "CyberGuard 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "CyberGuard 支持哪些客户端订阅，如何快速配置？",
        "a": "CyberGuard 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "CyberGuard 的价格起步与购买避坑建议有哪些？",
        "a": "CyberGuard 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 33,
    "name": "龙猫云",
    "slug": "longmaoyun",
    "alias": "longmaoyun",
    "isFeatured": false,
    "isTop10": false,
    "rank": 33,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "龙猫云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "龙猫云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "龙猫云 的线路架构与目标受众是什么？",
        "a": "龙猫云 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "龙猫云 在晚高峰期的网络抗抖动能力如何？",
        "a": "龙猫云 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "龙猫云 支持哪些客户端订阅，如何快速配置？",
        "a": "龙猫云 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "龙猫云 的价格起步与购买避坑建议有哪些？",
        "a": "龙猫云 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 34,
    "name": "FATCAT",
    "slug": "fatcat",
    "alias": "fatcat",
    "isFeatured": false,
    "isTop10": false,
    "rank": 34,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "FATCAT 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "FATCAT 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "FATCAT 的线路架构与目标受众是什么？",
        "a": "FATCAT 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "FATCAT 在晚高峰期的网络抗抖动能力如何？",
        "a": "FATCAT 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "FATCAT 支持哪些客户端订阅，如何快速配置？",
        "a": "FATCAT 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "FATCAT 的价格起步与购买避坑建议有哪些？",
        "a": "FATCAT 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 35,
    "name": "TNTCloud",
    "slug": "tntcloud",
    "alias": "tntcloud",
    "isFeatured": false,
    "isTop10": false,
    "rank": 35,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "TNTCloud 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "TNTCloud 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "TNTCloud 的线路架构与目标受众是什么？",
        "a": "TNTCloud 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "TNTCloud 在晚高峰期的网络抗抖动能力如何？",
        "a": "TNTCloud 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "TNTCloud 支持哪些客户端订阅，如何快速配置？",
        "a": "TNTCloud 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "TNTCloud 的价格起步与购买避坑建议有哪些？",
        "a": "TNTCloud 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 36,
    "name": "青云梯",
    "slug": "qingyunti",
    "alias": "qingyunti",
    "isFeatured": false,
    "isTop10": false,
    "rank": 36,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "青云梯 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "青云梯 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "青云梯 的线路架构与目标受众是什么？",
        "a": "青云梯 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "青云梯 在晚高峰期的网络抗抖动能力如何？",
        "a": "青云梯 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "青云梯 支持哪些客户端订阅，如何快速配置？",
        "a": "青云梯 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "青云梯 的价格起步与购买避坑建议有哪些？",
        "a": "青云梯 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 37,
    "name": "山水云",
    "slug": "shanshuiyun",
    "alias": "shanshuiyun",
    "isFeatured": false,
    "isTop10": false,
    "rank": 37,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "山水云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "山水云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "山水云 的线路架构与目标受众是什么？",
        "a": "山水云 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "山水云 在晚高峰期的网络抗抖动能力如何？",
        "a": "山水云 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "山水云 支持哪些客户端订阅，如何快速配置？",
        "a": "山水云 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "山水云 的价格起步与购买避坑建议有哪些？",
        "a": "山水云 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 38,
    "name": "灵动云",
    "slug": "lingdongyun",
    "alias": "lingdongyun",
    "isFeatured": false,
    "isTop10": false,
    "rank": 38,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "灵动云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "灵动云 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "灵动云 的线路架构与目标受众是什么？",
        "a": "灵动云 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "灵动云 在晚高峰期的网络抗抖动能力如何？",
        "a": "灵动云 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "灵动云 支持哪些客户端订阅，如何快速配置？",
        "a": "灵动云 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "灵动云 的价格起步与购买避坑建议有哪些？",
        "a": "灵动云 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 39,
    "name": "浪网",
    "slug": "langwang",
    "alias": "langwang",
    "isFeatured": false,
    "isTop10": false,
    "rank": 39,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "浪网 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "浪网 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "浪网 的线路架构与目标受众是什么？",
        "a": "浪网 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "浪网 在晚高峰期的网络抗抖动能力如何？",
        "a": "浪网 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "浪网 支持哪些客户端订阅，如何快速配置？",
        "a": "浪网 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "浪网 的价格起步与购买避坑建议有哪些？",
        "a": "浪网 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 40,
    "name": "EdgeNova",
    "slug": "edgenova",
    "alias": "edgenova",
    "isFeatured": false,
    "isTop10": false,
    "rank": 40,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "EdgeNova 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "EdgeNova 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "EdgeNova 的线路架构与目标受众是什么？",
        "a": "EdgeNova 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "EdgeNova 在晚高峰期的网络抗抖动能力如何？",
        "a": "EdgeNova 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "EdgeNova 支持哪些客户端订阅，如何快速配置？",
        "a": "EdgeNova 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "EdgeNova 的价格起步与购买避坑建议有哪些？",
        "a": "EdgeNova 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 41,
    "name": "萤火虫",
    "slug": "yinghuochong",
    "alias": "yinghuochong",
    "isFeatured": false,
    "isTop10": false,
    "rank": 41,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "萤火虫 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "萤火虫 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "萤火虫 的线路架构与目标受众是什么？",
        "a": "萤火虫 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "萤火虫 在晚高峰期的网络抗抖动能力如何？",
        "a": "萤火虫 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "萤火虫 支持哪些客户端订阅，如何快速配置？",
        "a": "萤火虫 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "萤火虫 的价格起步与购买避坑建议有哪些？",
        "a": "萤火虫 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  },
  {
    "id": 42,
    "name": "sslar",
    "slug": "sslar",
    "alias": "sslar",
    "isFeatured": false,
    "isTop10": false,
    "rank": 42,
    "tier": "archive",
    "launchYear": "2021-2026",
    "affiliateUrl": "https://jichanglaopai.blog/contact",
    "couponCode": "",
    "priceStarting": "¥8 / 月",
    "lineType": "IEPL 专线 / 企业级内网",
    "protocol": "VLESS / Shadowsocks",
    "nodesCount": "40-80+ 节点",
    "bandwidth": "1Gbps - 2.5Gbps 独立带宽",
    "clientSupport": "支持 Clash / Sing-box / Shadowrocket 等通用订阅",
    "hasSpeedtest": false,
    "testMetrics": [
      {
        "node": "香港 HK",
        "latency": "24ms",
        "download": "450+ Mbps"
      },
      {
        "node": "日本 JP",
        "latency": "48ms",
        "download": "380+ Mbps"
      },
      {
        "node": "新加坡 SG",
        "latency": "55ms",
        "download": "410+ Mbps"
      },
      {
        "node": "美国 US",
        "latency": "145ms",
        "download": "120+ Mbps"
      }
    ],
    "unlockStreaming": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max",
      "Spotify"
    ],
    "unlockAI": [
      "ChatGPT / OpenAI",
      "Claude 3.7",
      "Gemini",
      "Perplexity"
    ],
    "tags": [
      "稳定专线",
      "多端支持",
      "流媒体解锁",
      "AI访问"
    ],
    "shortDesc": "sslar 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。",
    "fullDesc": "sslar 专注于跨国专线与高可用网络中继，支持全平台主流客户端订阅。 本站实测节点在晚高峰具备优异表现，丢包率处于健康区间，支持多设备同时在线，适合对网络稳定度有高要求的出海办公与影音娱乐用户。",
    "uniqueSellingPoint": "高性价比线路，支持主流客户端订阅与常用流媒体解锁。",
    "pros": [
      "专线或高质中继线路，晚高峰延迟稳定",
      "节点覆盖香港、日本、新加坡、美国等主流枢纽",
      "支持国内外分流白名单，日常国内应用不耗流量",
      "主流流媒体与热门 AI 工具全原生解锁"
    ],
    "cons": [
      "特殊特惠套餐不支持退款，建议按需先开通月付体验",
      "部分冷门偏远地区节点偶有维护切换"
    ],
    "plans": [
      {
        "name": "标准轻量套餐",
        "billing": "月付",
        "price": "¥8",
        "traffic": "100GB - 150GB",
        "period": "每月"
      },
      {
        "name": "高级专线套餐",
        "billing": "月付",
        "price": "¥35 - ¥45",
        "traffic": "250GB - 350GB",
        "period": "每月"
      },
      {
        "name": "年付特惠套餐",
        "billing": "年付",
        "price": "¥99 - ¥198",
        "traffic": "年付特惠流量",
        "period": "每年"
      }
    ],
    "faq": [
      {
        "q": "sslar 的线路架构与目标受众是什么？",
        "a": "sslar 主要采用 IEPL 专线 / 企业级内网 架构，传输协议以 VLESS / Shadowsocks 为主，节点覆盖 40-80+ 节点，标称带宽达到 1Gbps - 2.5Gbps 独立带宽。属于均衡型综合服务商，兼顾日常出海浏览与常用海外平台访问。 高性价比线路，支持主流客户端订阅与常用流媒体解锁。。"
      },
      {
        "q": "sslar 在晚高峰期的网络抗抖动能力如何？",
        "a": "sslar 采用 IEPL 专线 / 企业级内网 物理内网传输，数据不过公网防火墙，晚高峰时段能有效避免国际出口拥堵与丢包波动。 老牌机场实验室建议：如果本地宽带为移动或广电等出口较窄的运营商，推荐优先连接其香港、日本或新加坡专线节点以获得最优低延迟体验。"
      },
      {
        "q": "sslar 支持哪些客户端订阅，如何快速配置？",
        "a": "sslar 支持 Clash / Sing-box / Shadowrocket 等通用订阅。兼容 Clash Verge Rev、Mihomo Party、Sing-box、Shadowrocket（小火箭）、Surge 等全平台客户端。在用户中心复制通用订阅链接后，粘贴至客户端并执行“更新订阅”即可一键同步全部节点。"
      },
      {
        "q": "sslar 的价格起步与购买避坑建议有哪些？",
        "a": "sslar 的参考起步价格约为 ¥8 / 月。当前为直达优惠价，无需额外优惠码。 风险防范提示：为规避因本地运营商路由调整或服务商策略变动带来的损失，建议优先开通月付或季付周期体验，待满意后再决定是否升级长周期套餐。"
      }
    ],
    "dataStatus": "verified",
    "updatedAt": "2026-11-06"
  }
];
