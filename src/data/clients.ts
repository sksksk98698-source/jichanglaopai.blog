/**
 * 2026 跨平台机场代理客户端资料大全
 * 整理自官方文档与开源项目，涵盖 Windows, Android, iOS, macOS, Linux, OpenWrt
 */

export interface ClientApp {
  name: string;
  category: "Windows" | "Android" | "iOS" | "macOS" | "Linux" | "OpenWrt";
  highlight: string;
  kernel: string;
  downloadUrl: string;
  sourceType: "GitHub" | "App Store" | "Official Site";
  isRecommended: boolean;
  features: string[];
}

export const clients: ClientApp[] = [
  // Windows
  {
    name: "Clash Verge Rev",
    category: "Windows",
    highlight: "目前 Windows 平台最主流的代理工具，基于开源 Mihomo 内核，界面现代，支持智能分流与全局 TUN 模式。",
    kernel: "Mihomo (Clash.Meta)",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["TUN 虚拟网卡模式", "内置中文界面", "订阅自动更新与测速", "自定义规则分流"]
  },
  {
    name: "v2rayN",
    category: "Windows",
    highlight: "老牌经典多协议客户端，支持 Xray 与 sing-box 核心，适合对底层节点与协议有调试需求的用户。",
    kernel: "Xray / sing-box",
    downloadUrl: "https://github.com/2dust/v2rayN/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["支持 VLESS / VMess / SS / Trojan", "支持自定义路由规则", "轻量低内存占用"]
  },
  {
    name: "FlClash",
    category: "Windows",
    highlight: "基于 Flutter 构建的现代化跨平台代理客户端，UI 优雅极简，对新手极其友好。",
    kernel: "Mihomo",
    downloadUrl: "https://github.com/chen08209/FlClash/releases",
    sourceType: "GitHub",
    isRecommended: false,
    features: ["跨平台统一体验", "支持暗黑主题", "一键导入订阅"]
  },
  {
    name: "Hiddify",
    category: "Windows",
    highlight: "支持多协议、全自动选点的新一代多平台客户端，开箱即用。",
    kernel: "sing-box",
    downloadUrl: "https://github.com/hiddify/hiddify-next/releases",
    sourceType: "GitHub",
    isRecommended: false,
    features: ["自动测速选路", "零配置快速启动", "多国语言支持"]
  },

  // Android
  {
    name: "v2rayNG",
    category: "Android",
    highlight: "安卓平台使用最广泛的代理工具，稳定可靠，支持几乎所有主流代理协议与分应用代理。",
    kernel: "Xray",
    downloadUrl: "https://github.com/2dust/v2rayNG/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["分应用代理 (绕过国内 App)", "扫码或剪贴板一键导入", "电量消耗极低"]
  },
  {
    name: "FlClash (Android)",
    category: "Android",
    highlight: "基于 Mihomo 核心的安卓精美代理客户端，界面现代流畅。",
    kernel: "Mihomo",
    downloadUrl: "https://github.com/chen08209/FlClash/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["精美 Material You 风格", "支持 Clash 订阅与规则分流"]
  },
  {
    name: "sing-box for Android (SFA)",
    category: "Android",
    highlight: "sing-box 官方安卓客户端，性能极强，低延迟与低能耗表现卓越。",
    kernel: "sing-box",
    downloadUrl: "https://github.com/SagerNet/sing-box/releases",
    sourceType: "GitHub",
    isRecommended: false,
    features: ["官方原生支持", "新一代协议支持", "规则配置灵活"]
  },

  // iOS
  {
    name: "Shadowrocket (小火箭)",
    category: "iOS",
    highlight: "iOS 平台最经典的规则网络工具，需使用美区/非国区 Apple ID 购买下载，支持一键扫码添加节点。",
    kernel: "自研多协议引擎",
    downloadUrl: "https://apps.apple.com/app/shadowrocket/id932747118",
    sourceType: "App Store",
    isRecommended: true,
    features: ["国内/国外流量自动分流", "支持按需连接与场景切换", "支持节点批量测速与延迟测试"]
  },
  {
    name: "Stash",
    category: "iOS",
    highlight: "iOS 上的 Clash 最佳替代品，完美兼容 Clash 配置文件与策略组规则。",
    kernel: "Stash Core (Clash Compatible)",
    downloadUrl: "https://apps.apple.com/app/stash/id1596063718",
    sourceType: "App Store",
    isRecommended: true,
    features: ["原生 iOS UI 设计", "完整的 Clash 策略组支持", "支持按需连接规则"]
  },
  {
    name: "Quantumult X (圈 X)",
    category: "iOS",
    highlight: "高端极客首选，提供强大的分流规则定制、重写脚本与精细网络抓包分析。",
    kernel: "自研高性能内核",
    downloadUrl: "https://apps.apple.com/app/quantumult-x/id1453926364",
    sourceType: "App Store",
    isRecommended: false,
    features: ["精细流量重写", "丰富的分流规则生态", "强大的网络诊断控制台"]
  },

  // macOS
  {
    name: "Clash Verge Rev (macOS)",
    category: "macOS",
    highlight: "macOS 首选客户端，全面适配 Apple Silicon (M1/M2/M3/M4) 与 Intel 架构，支持增强型 TUN 模式。",
    kernel: "Mihomo",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["Apple Silicon 原生适配", "菜单栏快速切换节点", "全局接管与旁路代理"]
  },
  {
    name: "Surge Mac",
    category: "macOS",
    highlight: "Mac 生态中最顶级的网络调试与代理中继系统，性能卓越，支持网关接管。",
    kernel: "Surge Core",
    downloadUrl: "https://nssurge.com/",
    sourceType: "Official Site",
    isRecommended: false,
    features: ["专业级网络监控", "支持作为局域网网关", "极高并发处理能力"]
  },

  // Linux
  {
    name: "Clash Verge Rev (Linux)",
    category: "Linux",
    highlight: "为 Ubuntu, Debian, Arch, Fedora 等 Linux 桌面提供现代图形操作体验。",
    kernel: "Mihomo",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["支持 AppImage / DEB / RPM / Tar 安装", "支持系统全局代理", "无须手动命令行启停"]
  },
  {
    name: "v2rayA",
    category: "Linux",
    highlight: "基于 Web 界面的透明代理客户端，特别适合无头服务器、NAS 及家庭网关。",
    kernel: "Xray / V2Ray",
    downloadUrl: "https://github.com/v2rayA/v2rayA/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["通过浏览器管理节点", "自动透明代理全局流量", "适合长期后台运行守护"]
  },

  // OpenWrt
  {
    name: "OpenClash",
    category: "OpenWrt",
    highlight: "软路由平台最主流插件，基于 Mihomo 核心，实现全屋设备透明网络加速。",
    kernel: "Mihomo / Clash Core",
    downloadUrl: "https://github.com/vernesong/OpenClash/releases",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["全屋设备免客户端上网", "支持国内流媒体直连", "规则策略细化到 IP/端口"]
  },
  {
    name: "PassWall 2",
    category: "OpenWrt",
    highlight: "轻量高效的路由器翻墙插件，对低配硬件友好，支持丰富的备份容灾节点配置。",
    kernel: "Xray / sing-box",
    downloadUrl: "https://github.com/xiaorouji/openwrt-passwall",
    sourceType: "GitHub",
    isRecommended: true,
    features: ["主备节点自动故障切换", "支持分流 DNS 防污染", "低 CPU 与内存占用"]
  }
];
