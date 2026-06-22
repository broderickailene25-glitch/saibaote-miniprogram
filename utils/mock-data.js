// utils/mock-data.js - 假数据（前端确定后替换为真实数据）

const { cosUrl } = require('./cos')

/**
 * 产品假数据
 */
const products = [
  {
    _id: 'product_001',
    name: '赛宝特生物有机肥',
    category: 'organic',
    tags: ['有机质', 'NY525标准'],
    subtitle: '五项专利 · 改良土壤 · 提高产量',
    description: '采用中土环科验证工艺，有效改善土壤结构，提高作物产量和品质。适用各类农作物、果蔬、茶叶等。',
    price: 68,
    priceText: '68',
    unit: '40kg/袋',
    images: [
      cosUrl('products/product-organic.jpg')
    ],
    specs: [
      { name: '规格', value: '40kg/袋' },
      { name: '标准', value: 'NY525' },
      { name: '原料', value: '优质有机质' },
      { name: '适用', value: '各类农作物' }
    ],
    features: [
      '五项核心专利技术',
      '中土环科权威验证',
      '改善土壤结构',
      '提高作物产量',
      '绿色环保无污染'
    ],
    isRecommend: true,
    sales: 2386,
    sort: 1,
    createTime: '2026-01-01'
  },
  {
    _id: 'product_002',
    name: '土壤活化有机肥',
    category: 'soil',
    tags: ['土壤活化', '改良板结'],
    subtitle: '活化土壤 · 改良板结 · 提升肥效',
    description: '针对板结、酸化、盐渍化土壤研发，有效活化土壤，恢复土壤活力。',
    price: 78,
    priceText: '78',
    unit: '40kg/袋',
    images: [
      cosUrl('products/product-organic-2.jpg')
    ],
    specs: [
      { name: '规格', value: '40kg/袋' },
      { name: '功能', value: '土壤活化' },
      { name: '特点', value: '改良板结' },
      { name: '适用', value: '板结土壤' }
    ],
    features: [
      '活化板结土壤',
      '调节酸碱平衡',
      '提升肥料利用率',
      '恢复土壤活力',
      '促进根系生长'
    ],
    isRecommend: true,
    sales: 1853,
    sort: 2,
    createTime: '2026-01-01'
  },
  {
    _id: 'product_003',
    name: '茶园专用有机肥',
    category: 'tea',
    tags: ['茶园适用', '提升茶质'],
    subtitle: '茶树专用 · 提升香气 · 改善口感',
    description: '针对茶树生长特点研发，改善茶叶品质，提升香气和口感。',
    price: 88,
    priceText: '88',
    unit: '25kg/袋',
    images: [
      cosUrl('products/product-organic-3.jpg')
    ],
    specs: [
      { name: '规格', value: '25kg/袋' },
      { name: '适用', value: '茶园' },
      { name: '特点', value: '提升茶质' },
      { name: '功能', value: '改善口感' }
    ],
    features: [
      '茶树专用配方',
      '提升茶叶香气',
      '改善茶汤口感',
      '促进茶芽萌发',
      '增强抗寒能力'
    ],
    isRecommend: true,
    sales: 1245,
    sort: 3,
    createTime: '2026-01-01'
  },
  {
    _id: 'product_004',
    name: '果园专用有机肥',
    category: 'fruit',
    tags: ['果园适用', '增甜着色'],
    subtitle: '果树专用 · 增甜着色 · 提高糖度',
    description: '针对果树生长需求研发，促进果实膨大，提高糖度和着色。',
    price: 82,
    priceText: '82',
    unit: '40kg/袋',
    images: [
      cosUrl('products/product-organic.jpg')
    ],
    specs: [
      { name: '规格', value: '40kg/袋' },
      { name: '适用', value: '果园' },
      { name: '特点', value: '增甜着色' },
      { name: '功能', value: '提高糖度' }
    ],
    features: [
      '果树专用配方',
      '促进果实膨大',
      '提高糖度',
      '改善着色',
      '增强树势'
    ],
    isRecommend: false,
    sales: 986,
    sort: 4,
    createTime: '2026-01-01'
  },
  {
    _id: 'product_005',
    name: '微生物菌剂',
    category: 'microbe',
    tags: ['微生物菌', '生根壮苗'],
    subtitle: '活性菌≥2亿/g · 生根壮苗',
    description: '富含多种有益微生物菌群，有效促进根系生长，增强作物抗逆性。',
    price: 98,
    priceText: '98',
    unit: '10kg/袋',
    images: [
      cosUrl('products/product-organic-2.jpg')
    ],
    specs: [
      { name: '规格', value: '10kg/袋' },
      { name: '有效菌', value: '≥2亿/g' },
      { name: '功能', value: '生根壮苗' },
      { name: '适用', value: '各类作物' }
    ],
    features: [
      '活性有益菌≥2亿/g',
      '促进根系生长',
      '增强抗逆性',
      '减少土传病害',
      '提高成活率'
    ],
    isRecommend: true,
    sales: 3120,
    sort: 5,
    createTime: '2026-01-01'
  },
  {
    _id: 'product_006',
    name: '水溶性有机肥',
    category: 'organic',
    tags: ['全水溶', '滴灌适用'],
    subtitle: '全水溶 · 滴灌喷灌适用',
    description: '全水溶配方，适用于滴灌、喷灌、冲施等多种施肥方式，吸收快，见效快。',
    price: 108,
    priceText: '108',
    unit: '5kg/袋',
    images: [
      cosUrl('products/product-organic-3.jpg')
    ],
    specs: [
      { name: '规格', value: '5kg/袋' },
      { name: '溶解性', value: '全水溶' },
      { name: '用法', value: '滴灌/喷灌/冲施' },
      { name: '适用', value: '设施农业' }
    ],
    features: [
      '全水溶配方',
      '滴灌喷灌适用',
      '吸收快见效快',
      '省工省时',
      '不堵塞管道'
    ],
    isRecommend: false,
    sales: 1678,
    sort: 6,
    createTime: '2026-01-01'
  },
  {
    _id: 'product_007',
    name: '阳台专用有机肥',
    category: 'balcony',
    tags: ['阳台适用', '小包装'],
    subtitle: '300g小包装 · 轻便易用 · 家庭园艺首选',
    description: '专为阳台种植设计的小包装有机肥，300g轻便装，使用方便，适合家庭盆栽、阳台蔬菜、花卉种植。',
    price: 9.8,
    priceText: '9.8',
    unit: '300g/袋',
    images: [
      cosUrl('products/product-balcony.jpg')
    ],
    specs: [
      { name: '规格', value: '300g/袋' },
      { name: '适用', value: '阳台/盆栽' },
      { name: '特点', value: '小包装轻便' },
      { name: '用法', value: '直接施用' }
    ],
    features: [
      '小包装轻便易储存',
      '家庭园艺专用配方',
      '阳台蔬菜花卉适用',
      '干净无味不招虫',
      '用量省效果好'
    ],
    isRecommend: false,
    sales: 328,
    sort: 7,
    createTime: '2026-06-07'
  }
]

/**
 * 案例假数据
 */
const cases = [
  {
    _id: 'case_001',
    title: '鹏昌养殖基地',
    subtitle: '1.5万羽蛋鸡实测',
    description: '在鹏昌养殖基地进行1.5万羽蛋鸡实测，使用赛宝特预混饲料后，产蛋率提升12%，饲料转化率提高15%，投入产出比达到1:1。',
    images: [
      cosUrl('cases/case-pengchang.jpg'),
      cosUrl('cases/case-pengchang-2.png')
    ],
    stats: {
      scale: '1.5万羽',
      improvement: '产蛋率+12%',
      ratio: '1:1'
    },
    location: '广东',
    createTime: '2026-03-15'
  },
  {
    _id: 'case_002',
    title: '种养殖基地建设',
    subtitle: '全产业链闭环模式',
    description: '从研发、种养殖基地建设到产品销售，形成完整的全产业链闭环，实现生产→产品→基地→销售的一体化运营。',
    images: [
      cosUrl('cases/case-base.jpg'),
      cosUrl('cases/case-base-2.png')
    ],
    stats: {
      model: '全产业链',
      coverage: '生产→销售'
    },
    location: '粤港澳大湾区',
    createTime: '2026-04-20'
  }
]

/**
 * 资讯假数据
 */
const news = [
  {
    _id: 'news_001',
    column: '节气',
    title: '立夏适合种植的作物',
    summary: '立夏是二十四节气之一，气温升高，雨水增多，正是农作物生长的关键时期。',
    content: `
      <h2>立夏 — 农作物生长的黄金期</h2>
      <p>立夏是二十四节气中的第7个节气，标志着夏季正式开始。此时气温明显升高，降水量增多，光照充足，非常适合多种作物的种植和生长。</p>
      <h3>1. 水稻</h3>
      <p>立夏是水稻移栽的关键时期。此时气温稳定在15℃以上，适合水稻扎根生长。及时插秧、合理密植，可为后期高产打下基础。</p>
      <h3>2. 玉米</h3>
      <p>春玉米在立夏前后播种最为适宜。充足的光照和温度有利于玉米出苗和幼苗生长，注意保持土壤湿润。</p>
      <h3>3. 蔬菜类</h3>
      <p>立夏时节适合种植的蔬菜包括：茄子、辣椒、番茄、黄瓜、豆角等。这些喜温蔬菜在立夏后生长迅速，注意及时浇水施肥。</p>
      <h3>4. 豆类</h3>
      <p>大豆、绿豆等豆类作物适合在立夏播种。豆类具有固氮作用，对土壤要求不高，适合轮作种植。</p>
      <h3>5. 瓜果类</h3>
      <p>西瓜、甜瓜、南瓜等瓜果类作物在立夏后进入生长旺季，注意适时整枝、追肥，保证果实品质。</p>
      <h2>立夏施肥建议</h2>
      <p>立夏时节作物生长旺盛，对养分的需求量大。建议：</p>
      <p>• 基肥：使用赛宝特生物有机肥（40kg/袋），每亩施用200-300kg</p>
      <p>• 追肥：根据作物生长情况适时追施水溶性有机肥</p>
      <p>• 叶面肥：可配合微生物菌剂喷施，提高作物抗逆性</p>
      <p>赛宝特有机肥富含有机质和多种有益微生物，能有效改善土壤结构，提高作物产量和品质。欢迎登录小程序选购。</p>
    `,
    cover: cosUrl('news/news-lixia.jpg'),
    author: '赛宝特农技团队',
    readTime: '3分钟',
    createTime: '2026-06-08'
  },
  {
    _id: 'news_002',
    column: '害虫防治',
    title: '常见蔬菜害虫识别与防治',
    summary: '蚜虫、白粉虱、红蜘蛛等常见蔬菜害虫的识别特征和绿色防治方法。',
    content: `
      <h2>常见蔬菜害虫绿色防治指南</h2>
      <p>农业生产中，害虫防治是保证作物健康生长的关键环节。以下是几种常见蔬菜害虫的识别与防治方法。</p>
      <h3>1. 蚜虫</h3>
      <p>识别：体小柔软，绿色或黑色，群集于嫩叶、嫩芽上吸食汁液。</p>
      <p>防治：使用赛宝特生物农药喷雾，或悬挂黄色粘虫板诱杀。</p>
      <h3>2. 白粉虱</h3>
      <p>识别：体长约1mm，白色，成虫有翅，在叶背吸食汁液。</p>
      <p>防治：释放丽蚜小蜂天敌，或使用微生物菌剂喷施。</p>
      <h3>3. 红蜘蛛</h3>
      <p>识别：体小红色，在叶背结网，受害叶片出现黄白色斑点。</p>
      <p>防治：保持田间湿度，使用赛宝特生物质农药喷洒叶背。</p>
      <h3>4. 菜青虫</h3>
      <p>识别：绿色幼虫，啃食叶片，留下孔洞和粪便。</p>
      <p>防治：使用Bt生物杀虫剂，或覆盖防虫网物理隔离。</p>
      <p>以上防治方法均可配合赛宝特微生物菌剂使用，减药增效，绿色环保。</p>
    `,
    cover: cosUrl('news/ink-vegetables.jpg'),
    author: '赛宝特农技团队',
    readTime: '4分钟',
    createTime: '2026-06-08'
  },
  {
    _id: 'news_003',
    column: '阳台种植',
    title: '阳台种菜入门指南',
    summary: '想在阳台种菜？从选盆选土到浇水施肥，一篇讲清楚。',
    content: `
      <h2>阳台种菜入门指南</h2>
      <p>在城市阳台种菜，既能体验种植乐趣，又能吃上放心菜。以下是一份完整的入门指南。</p>
      <h3>1. 容器选择</h3>
      <p>建议使用深度15-30cm的种植盆，底部要有排水孔。可选择塑料盆、陶盆或种植袋。</p>
      <h3>2. 土壤配置</h3>
      <p>推荐使用赛宝特阳台专用有机肥（300g小包装）混合园土使用，营养全面不烧根。</p>
      <h3>3. 适合阳台种植的蔬菜</h3>
      <p>• 叶菜类：生菜、菠菜、小白菜（生长快，周期短）</p>
      <p>• 茄果类：番茄、辣椒（需要充足光照）</p>
      <p>• 香草类：薄荷、罗勒、香菜（不占空间）</p>
      <h3>4. 日常养护</h3>
      <p>浇水：见干见湿，避免积水。</p>
      <p>施肥：每两周追施一次赛宝特水溶性有机肥。</p>
      <p>光照：每天保证4-6小时光照。</p>
      <p>阳台种菜并不复杂，选对方法和产品，人人都能收获满满。</p>
    `,
    cover: cosUrl('products/product-balcony.jpg'),
    author: '赛宝特农技团队',
    readTime: '3分钟',
    createTime: '2026-06-08'
  }
]

/**
 * 评价假数据
 */
const evaluations = [
  {
    _id: 'eval_001',
    productId: 'product_001',
    productName: '有机肥料',
    userName: '张**',
    userAvatar: '/avatar-default.png',
    rating: 5,
    content: '用了赛宝特的有机肥，土壤明显变好了，作物长势比以前强很多。值得推荐！',
    images: [],
    createTime: '2026-05-20'
  },
  {
    _id: 'eval_002',
    productId: 'product_002',
    productName: '禽用预混饲料',
    userName: '李**',
    userAvatar: '/avatar-default.png',
    rating: 5,
    content: '在鹏昌基地用过，效果确实不错，产蛋率提升明显，投入产出比很高。',
    images: [],
    createTime: '2026-05-18'
  },
  {
    _id: 'eval_003',
    productId: 'product_003',
    productName: '生物质农药',
    userName: '王**',
    userAvatar: '/avatar-default.png',
    rating: 4,
    content: '生物农药用着放心，没有残留，效果也可以，就是价格比化学农药贵一点。',
    images: [],
    createTime: '2026-05-15'
  }
]

/**
 * 公司信息
 */
const companyInfo = {
  name: '深圳赛宝特生物环保科技有限公司',
  shortName: '赛宝特',
  slogan: '全农业产业链科技企业',
  description: '赛宝特是一家立足于粤港澳大湾区的全农业产业链科技企业，母公司旗下两家子公司，握有14项核心专利，覆盖有机肥料、预混饲料、生物农药。',
  location: '粤港澳大湾区·深圳',
  patents: 14,
  subsidiaries: [
    {
      name: '深圳赛宝嘉科技有限公司',
      role: '技术/生产',
      highlight: '14项专利'
    },
    {
      name: '广东福聚多生态农业有限公司',
      role: '基地/品牌/运营',
      highlight: '老区甄选品牌'
    }
  ],
  advantages: [
    {
      icon: '🏆',
      title: '14项专利',
      desc: '核心技术自主可控'
    },
    {
      icon: '🏭',
      title: '全产业链',
      desc: '生产→产品→基地→销售'
    },
    {
      icon: '🌿',
      title: '绿色防控',
      desc: '台湾进口原料'
    },
    {
      icon: '📍',
      title: '大湾区',
      desc: '粤港澳核心区域'
    }
  ]
}

module.exports = {
  products,
  cases,
  news,
  evaluations,
  companyInfo
}
