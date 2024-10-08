import { AppConfig } from "@/config/config";

/*
 * @Author: kasuie
 * @Date: 2024-06-13 10:00:42
 * @LastEditors: l cx lcx1029lcx1029@outlook.com
 * @LastEditTime: 2024-08-25 20:16:08
 * @Description:
 */
export interface ItemsItem {
  label: string;
  value: string;
  controlKey?: string;
  desc?: string;
  controlProps?: any;
}

export interface RuleItem {
  controlKey?: string;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  transform?: Function;
  items?: Array<ItemsItem>;
  field: string;
  desc?: string;
  controlProps?: any;
  default?: string | number | string[];
}

const mainRules: RuleItem[] = [
  {
    field: "favicon",
    isRequired: false,
    label: "站点图标",
  },
  {
    field: "name",
    isRequired: true,
    label: "站点标题",
  },
  {
    field: "keywords",
    isRequired: false,
    label: "站点关键词",
  },
  {
    field: "description",
    isRequired: false,
    label: "站点描述性信息",
  },
  {
    field: "subTitle",
    isRequired: false,
    label: "站点次标题",
  },
  {
    controlKey: "list",
    field: "links",
    isRequired: false,
    label: "社媒链接",
    items: [
      { label: "标题", value: "title", controlKey: "input" },
      { label: "颜色", value: "color", controlKey: "input" },
      { label: "链接", value: "url", controlKey: "input" },
      { label: "图标链接", value: "icon", controlKey: "input" },
    ],
  },
  {
    controlKey: "list",
    field: "sites",
    isRequired: false,
    label: "站点链接",
    items: [
      { label: "标题", value: "title", controlKey: "input" },
      { label: "描述", value: "desc", controlKey: "input" },
      { label: "链接", value: "url", controlKey: "input" },
      { label: "图标链接", value: "icon", controlKey: "input" },
    ],
  },
];

const globalStyleRules: RuleItem[] = [
  {
    field: "primaryColor",
    isRequired: false,
    label: "主题颜色",
    default: "#229fff",
  },
  {
    controlKey: "radio",
    field: "theme",
    isRequired: false,
    label: "主题设置",
    items: [
      { label: "亮色", value: "light" },
      { label: "暗色", value: "dark" },
      { label: "手动切换", value: "switcher" },
    ],
    default: ["light"],
  },
  {
    field: "fallback",
    isRequired: false,
    label: "次要字体",
    desc: "系统自带字体，优先级低低于自定义字体，作字体垫片",
  },
  {
    controlKey: "list",
    field: "fonts",
    isRequired: false,
    label: "自定义字体",
    items: [
      { label: "字体名称", value: "name", controlKey: "input" },
      { label: "字体资源路径", value: "src", controlKey: "input" },
    ],
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果",
    items: [{ label: "显示地理天气", value: "weather" }],
  },
];

const avatarRules: RuleItem[] = [
  {
    field: "src",
    isRequired: false,
    label: "头像资源路径",
  },
  {
    field: "size",
    isRequired: true,
    label: "头像尺寸",
    controlProps: {
      type: "number",
      min: 0,
    },
  },
  {
    controlKey: "select",
    field: "round",
    isRequired: false,
    label: "圆角程度",
    items: [
      { label: "100%", value: "full" },
      { label: "24px", value: "3xl" },
      { label: "12px", value: "xl" },
      { label: "8px", value: "lg" },
      { label: "6px", value: "md" },
      { label: "2px", value: "sm" },
    ],
    default: "full",
  },
  {
    controlKey: "radio",
    field: "style",
    isRequired: false,
    label: "头像动画",
    items: [
      { label: "无动画", value: "none" },
      { label: "边框闪烁", value: "glint" },
      { label: "涟漪动画", value: "wave" },
    ],
    default: ["none"],
  },
  {
    controlKey: "radio",
    field: "hoverAnimate",
    isRequired: false,
    label: "头像hover动画",
    items: [
      { label: "无动画", value: "none" },
      { label: "上移", value: "top" },
      { label: "旋转", value: "rotate" },
    ],
    default: ["none"],
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果",
    items: [
      { label: "隐藏组件", value: "hidden" },
      {
        label: "头像单独在右侧",
        value: "aloneRight",
        desc: "layoutConfig.style为horizontal生效",
      },
    ],
  },
];

const layoutRules: RuleItem[] = [
  {
    controlKey: "select",
    field: "gapSize",
    isRequired: false,
    label: "布局组件间隔",
    items: [
      { label: "组件间隙48px", value: "lg" },
      { label: "组件间隙32px", value: "md" },
      { label: "组件间隙30px", value: "sm" },
    ],
    default: "md",
  },
  {
    controlKey: "select",
    field: "style",
    isRequired: false,
    label: "布局风格",
    items: [
      { label: "horizontal", value: "horizontal" },
      { label: "vertical", value: "vertical" },
    ],
    default: "vertical",
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果",
    items: [{ label: "渲染过渡动画", value: "istTransition" }],
    default: ["istTransition"],
  },
];

const bgRules: RuleItem[] = [
  {
    field: "bg",
    isRequired: false,
    label: "pc背景图",
    transform: (val: any, input?: boolean) => {
      if (!val) return val;
      if (input) {
        return Array.isArray(val) ? val.join(";") : val;
      } else {
        return val.split(";");
      }
    },
    default: "http://i0.hdslb.com/bfs/new_dyn/74c51db9518898d6aeca2271046472e8662154608.jpg",
    desc: "多张背景请以英文分号';'分隔",
  },
  {
    field: "mbg",
    isRequired: false,
    label: "移动端背景图",
    transform: (val: any, input?: boolean) => {
      if (!val) return val;
      if (input) {
        return Array.isArray(val) ? val.join(";") : val;
      } else {
        return val.split(";");
      }
    },
    default: "http://i0.hdslb.com/bfs/new_dyn/1270dafe266bae26cb7d78e3071494f1662154608.jpg",
    desc: "多张背景请以英文分号';'分隔",
  },
  {
    field: "bgStyle",
    isRequired: false,
    label: "背景飘浮",
    desc: "内置sakura(樱花)，snow(雪花)",
  },
  {
    controlKey: "select",
    field: "blur",
    isRequired: false,
    label: "背景模糊",
    items: [
      { label: "无模糊", value: "none" },
      { label: "4px", value: "sm" },
      { label: "12px", value: "md" },
      { label: "16px", value: "lg" },
    ],
    default: "sm",
  },
  {
    field: "cardOpacity",
    isRequired: false,
    label: "卡片的透明度",
    desc: "0-1之间，默认0.3",
    controlProps: {
      type: "number",
      max: 1,
      min: 0,
      step: "0.05",
    },
    default: 0.1,
  },
  {
    field: "carouselGap",
    isRequired: false,
    label: "图片轮播间隔时间",
    desc: "单位s(秒)，默认5s，最小3s",
    controlProps: {
      type: "number",
      min: 3,
    },
    default: 5,
  },
  {
    controlKey: "select",
    field: "transitionStyle",
    isRequired: false,
    label: "图片轮播过渡动画",
    items: [
      { label: "默认", value: "default" },
      { label: "向下", value: "toBottom" },
      { label: "向上", value: "toTop" },
      { label: "向左", value: "toLeft" },
      { label: "向右", value: "toRight" },
      { label: "由远及近", value: "toIn" },
      { label: "远近混合", value: "toInOut" },
    ],
    default: "default",
  },
  {
    field: "transitionTime",
    isRequired: false,
    label: "图片轮播过渡时间",
    desc: "单位s(秒)，默认0.7s",
    controlProps: {
      type: "number",
    },
    default: 0.7,
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果",
    items: [
      { label: "图片轮播", value: "carousel" },
      { label: "背景图动画", value: "autoAnimate" },
    ],
  },
];

const footerRules: RuleItem[] = [
  {
    field: "text",
    isRequired: false,
    label: "展示文字",
  },
  {
    field: "url",
    isRequired: false,
    label: "文字的链接",
  },
  {
    field: "ICP",
    isRequired: false,
    label: "备案号",
    desc: "填写后会链接到工信部",
  },
  {
    controlKey: "select",
    field: "direction",
    isRequired: false,
    label: "元素排列方式",
    items: [
      { label: "垂直排列", value: "col" },
      { label: "水平排列", value: "row" },
      { label: "反向垂直排列", value: "col-reverse" },
      { label: "反向水平排列", value: "row-reverse" },
    ],
    desc: "默认col",
    default: "col",
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果",
    items: [{ label: "链接图标", value: "isExternal" }],
  },
];

const sitesRules: RuleItem[] = [
  {
    controlKey: "select",
    field: "cardStyle",
    isRequired: false,
    label: "站点卡片风格",
    items: [
      { label: "默认", value: "default" },
      { label: "翻转", value: "flip" },
    ],
    default: "default",
  },
  {
    controlKey: "select",
    field: "direction",
    isRequired: false,
    label: "卡片排列方式",
    items: [
      { label: "垂直排列", value: "col" },
      { label: "水平排列", value: "row" },
    ],
    desc: "默认col，cardStyle为flip生效",
    default: "col",
  },
  {
    field: "modalTitle",
    isRequired: false,
    label: "modal的标题",
  },
  {
    field: "modalTips",
    isRequired: false,
    label: "modal次标题",
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果",
    items: [
      { label: "隐藏该组件", value: "hidden" },
      { label: "hover状态模糊", value: "hoverBlur" },
      { label: "hover状态伸缩", value: "hoverScale" },
      { label: "卡片是否可翻转", value: "hoverFlip" },
      { label: "是否显示modal", value: "modal" },
    ],
    default: ["hoverFlip"],
  },
];

const subTitleRules: RuleItem[] = [
  {
    controlKey: "select",
    field: "loading",
    isRequired: false,
    label: "出现动画",
    items: [
      { label: "无动画", value: "none" },
      { label: "波浪渐入", value: "wave" },
    ],
    default: "none",
  },
  {
    field: "typingGap",
    isRequired: false,
    label: "一言间隔多久开始清除",
    desc: "单位秒(s)，默认为10s，最小3s",
    controlProps: {
      type: "number",
      min: 3,
      step: "0.5",
    },
    default: 10,
  },
  {
    controlKey: "select",
    field: "style",
    isRequired: false,
    label: "样式风格",
    items: [
      { label: "默认", value: "default" },
      { label: "介绍风格", value: "desc" },
    ],
    default: "default",
    desc: "layoutConfig.style 为 horizontal 生效",
  },
  {
    field: "desc",
    isRequired: false,
    label: "简要的描述",
    desc: "subTitleConfig.style 为 desc 生效，如果需要分行展示以;分隔",
  },
  {
    field: "content",
    isRequired: false,
    label: "详细描述内容",
    desc: "subTitleConfig.style 为 desc 生效，如果需要分行展示以;分隔",
  },
  {
    field: "gapDelay",
    isRequired: false,
    label: "单个文字出现间隔",
    controlProps: {
      type: "number",
      step: "0.01",
    },
    default: 0.05,
    desc: "单位秒(s)，默认0.05s，搭配loading属性定义动画",
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果/功能",
    items: [
      { label: "爱心图标", value: "heart" },
      { label: "打字效果", value: "typing" },
      { label: "打字循环", value: "loopTyping", desc: "开启打字效果生效" },
      { label: "文字阴影", value: "shadow" },
      { label: "打字光标", value: "typingCursor", desc: "开启打字效果生效" },
      { label: "显示来源", value: "showFrom" },
    ],
    default: ["heart", "typingCursor", "showFrom"],
  },
];

const socialRules: RuleItem[] = [
  {
    controlKey: "select",
    field: "loading",
    isRequired: false,
    label: "出现动画",
    items: [
      { label: "无动画", value: "default" },
      { label: "波浪渐入", value: "wave" },
    ],
    default: "default",
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果/功能",
    items: [{ label: "涟漪动画", value: "ripple" }],
    default: ["ripple"],
  },
];

const slidersRules: RuleItem[] = [
  {
    field: "title",
    isRequired: false,
    label: "标题",
    desc: "为空不展示",
  },
  {
    field: "color",
    isRequired: false,
    label: "进度条颜色",
    default: "#fff",
  },
  {
    field: "column",
    isRequired: false,
    label: "一行展示几列",
    desc: "2-4的范围，默认2",
    controlProps: {
      type: "number",
      min: 2,
      max: 4,
    },
    default: 2,
  },
  {
    controlKey: "checkbox",
    field: "$boolean",
    isRequired: false,
    label: "启用效果/功能",
    items: [{ label: "隐藏该组件", value: "hidden" }],
  },
  {
    controlKey: "list",
    field: "data",
    isRequired: false,
    label: "技能数据",
    items: [
      { label: "标题", value: "title", controlKey: "input" },
      { label: "颜色", value: "color", controlKey: "input" },
      {
        label: "掌握程度",
        value: "value",
        controlKey: "input",
        controlProps: {
          type: "number",
          min: 0,
          max: 100,
        },
      },
      { label: "图标链接", value: "icon", controlKey: "input" },
    ],
  },
];

const resourcesRules: RuleItem[] = [
  {
    field: "css",
    isRequired: false,
    label: "自定义css",
    transform: (val: any, input?: boolean) => {
      if (!val) return val;
      if (input) {
        return Array.isArray(val) ? val.join(";") : val;
      } else {
        return val.split(";");
      }
    },
    default: [],
    desc: "多个css资源请以';'分隔",
  },
  {
    field: "js",
    isRequired: false,
    label: "自定义js",
    transform: (val: any, input?: boolean) => {
      if (!val) return val;
      if (input) {
        return Array.isArray(val) ? val.join(";") : val;
      } else {
        return val.split(";");
      }
    },
    default: [],
    desc: "多个js资源请以';'分隔",
  },
  {
    field: "bodyHtml",
    isRequired: false,
    label: "自定义body元素",
    controlKey: "textarea",
    controlProps: {
      type: "textarea",
    },
    desc: "将以html文本渲染",
  },
];

export const AppRules = [
  { title: "主要设置", rules: mainRules },
  { title: "样式设置", rules: globalStyleRules, field: "globalStyle" },
  { title: "头像设置", rules: avatarRules, field: "avatarConfig" },
  { title: "布局设置", rules: layoutRules, field: "layoutConfig" },
  { title: "背景设置", rules: bgRules, field: "bgConfig" },
  { title: "底部设置", rules: footerRules, field: "footer" },
  { title: "站点设置", rules: sitesRules, field: "sitesConfig" },
  { title: "标题设置", rules: subTitleRules, field: "subTitleConfig" },
  { title: "社媒设置", rules: socialRules, field: "socialConfig" },
  { title: "技能设置", rules: slidersRules, field: "sliders" },
  { title: "资源设置", rules: resourcesRules, field: "resources" },
];

export const defaultAppConfig: AppConfig = {
  name: "我的主页✨",
  favicon: "/favicon.ico",
  keywords: "remio,rem,mio,C.C.,CX,个人主页,主页",
  description: "CXの次元，兴趣至上，内容随缘，个人主页",
  avatarConfig: {
    src: "https://i0.hdslb.com/bfs/new_dyn/d55ac776fc1fdd458691c81c967cb6b0662154608.jpg",
    size: 150,
    round: "full",
    hoverAnimate: "top",
    style: "glint",
  },
  bgConfig: {
    bg: "http://i0.hdslb.com/bfs/new_dyn/74c51db9518898d6aeca2271046472e8662154608.jpg",
    mbg: "http://i0.hdslb.com/bfs/new_dyn/1270dafe266bae26cb7d78e3071494f1662154608.jpg",
    bgStyle: "snow",
    blur: "sm",
    cardOpacity: 0.1,
    carousel: true,
    carouselGap: 5,
    transitionTime: 0.7,
    transitionStyle: "default",
    autoAnimate: false,
  },
  globalStyle: {
    theme: "light",
    primaryColor: "#229fff",
    fallback: "",
    fonts: [],
    weather: false,
  },
  layoutConfig: {
    gapSize: "md",
    style: "vertical",
    istTransition: true,
  },
  subTitle: "https://v1.hitokoto.cn?c=a&c=b&c=c",
  subTitleConfig: {
    typing: false,
    loading: "",
    loopTyping: false,
    shadow: false,
    typingCursor: true,
    typingGap: 10,
    heart: true,
    showFrom: true,
    style: "",
    gapDelay: 0.05,
    content: "Hello💫",
    desc: "这里是我の主页",
  },
  "links": [
    {
      "title": "github",
      "color": "#000000",
      "url": "https://github.com/lcx1029",
      "icon": "github"
    },
    {
      "title": "email",
      "color": "#fd3232",
      "url": "mailto:lcx1029lcx1029@dingtalk.com",
      "icon": "email"
    },
    {
      "title": "bilibili",
      "color": "#0088cc",
      "url": "https://space.bilibili.com/662154608",
      "icon": "bilibili"
    }
  ],
  "sites": [
    {
      "icon": "https://i0.hdslb.com/bfs/new_dyn/4ecf9df2ba5971f7db8b23cf1c53865d662154608.jpg",
      "title": "CXの博客",
      "url": "https://blog.deep-sea.us.kg/",
      "desc": "博客主页"
    },
    {
      "icon": "https://i0.hdslb.com/bfs/new_dyn/f06c37f2da236659a743ed46662836ec662154608.jpg",
      "title": "CX导航",
      "url": "https://nav.deep-sea.us.kg/",
      "desc": "CX 网站导航"
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/c1b9221f2a7708fdafc9f03d13d1ce91662154608.jpg",
      "title": "CXのAI",
      "url": "https://ai.deep-sea.us.kg",
      "desc": "NewBing"
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/d7bf3946c72b22382294037d564abfa1662154608.jpg",
      "title": "CXの音乐",
      "url": "https://www.deep-sea.us.kg/music/indexm.html",
      "desc": "听首歌"
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/2976b62e9b0ccc3e3203e48713380fed662154608.jpg",
      "title": "CXのOS",
      "url": "https://bilios.deep-sea.us.kg/",
      "desc": "网页版的哔哩哔哩OS"
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/d63909e3f86dc0f118611a0d273ba8de662154608.jpg",
      "title": "抖音",
      "url": "https://douyin.deep-sea.us.kg/",
      "desc": "自制的抖音，来尝尝"
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/221d1fd10cf43ba9e03c5b3d5b954d0d662154608.jpg",
      "title": "CXのhome",
      "url": "https://www.deep-sea.us.kg/",
      "desc": "起始页"
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/183efc66be320935a8dea28a0e0ebd83662154608.jpg",
      "title": "杂七杂八",
      "desc": "阿巴阿巴..."
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/5989af97c18f632c31a52b8f788e1225662154608.jpg",
      "title": "chatgpt",
      "url": "https://gpt.deep-sea.us.kg/",
      "desc": "没有key"
    },
    {
      "icon": "http://i0.hdslb.com/bfs/new_dyn/019590c69e6dbca442bb0bdd98b6839c662154608.jpg",
      "title": "CXのFlux",
      "url": "https://www.deep-sea.us.kg/flux/indexf.html",
      "desc": "被玩疯的Flux"
    }
  ],
  sitesConfig: {
    hidden: false,
    cardStyle: "",
    hoverBlur: false,
    hoverScale: false,
    hoverFlip: true,
    direction: "",
    modal: false,
    modalTips: "",
    modalTitle: "",
  },
  socialConfig: {
    loading: "default",
    ripple: true,
  },
  sliders: {
    data: [],
    title: "技能加点",
    color: "#fff",
    hidden: true,
    column: 2,
  },
  footer: {
    text: "© 2020 - 2024 By CX",
    url: "https://home.deep-sea.us.kg",
    ICP: "ICP备xxxxxxxx号",
    direction: "col-reverse",
    isExternal: true,
  },
  resources: {
    css: [],
    js: [],
    bodyHtml: "",
  },
};
