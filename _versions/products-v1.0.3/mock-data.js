// utils/mock-data.js - 假数据（前端确定后替换为真实数据）

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
      '/images/product-organic.jpg'
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
      '/images/product-organic-2.png'
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
      '/images/product-organic-3.png'
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
      '/images/product-organic.jpg'
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
      '/images/product-organic-2.png'
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
      '/images/product-organic-3.png'
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
      '/images/product-balcony.png'
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
      '/images/case-pengchang.jpg',
      '/images/case-pengchang-2.png'
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
      '/images/case-base.jpg',
      '/images/case-base-2.png'
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
    title: '有机肥使用指南：如何提高作物产量',
    summary: '详细介绍有机肥的正确使用方法，包括施用时间、施用量、配合使用等技巧，帮助农户提高作物产量。',
    content: `
      <h2>有机肥使用指南</h2>
      <p>有机肥是一种天然肥料，能够改善土壤结构，增加土壤肥力，提高作物产量和品质。</p>
      <h3>1. 施用时间</h3>
      <p>基肥：播种前7-15天施用</p>
      <p>追肥：作物生长期根据需要追施</p>
      <h3>2. 施用量</h3>
      <p>一般每亩施用200-400kg，具体根据土壤肥力和作物需求调整。</p>
      <h3>3. 注意事项</h3>
      <p>避免与碱性肥料混用</p>
      <p>施用后及时覆土</p>
    `,
    cover: '/images/news-1.jpg',
    author: '赛宝特农技团队',
    readTime: '5分钟',
    createTime: '2026-05-28'
  },
  {
    _id: 'news_002',
    title: '绿色防控技术：生物农药的优势与应用',
    summary: '介绍生物农药相比传统化学农药的优势，以及在实际农业生产中的应用案例。',
    content: `
      <h2>绿色防控技术</h2>
      <p>生物农药是利用生物活体或其代谢产物对有害生物进行防治的一类农药，具有安全、环保、高效的特点。</p>
      <h3>1. 生物农药的优势</h3>
      <p>• 对人畜安全</p>
      <p>• 不污染环境</p>
      <p>• 不易产生抗药性</p>
      <p>• 对天敌安全</p>
      <h3>2. 应用案例</h3>
      <p>在某蔬菜基地应用生物农药后，病虫害防治效果达到85%以上，同时蔬菜品质显著提升。</p>
    `,
    cover: '/images/news-2.jpg',
    author: '赛宝特农技团队',
    readTime: '4分钟',
    createTime: '2026-05-25'
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
    userAvatar: '/images/avatar-default.png',
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
    userAvatar: '/images/avatar-default.png',
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
    userAvatar: '/images/avatar-default.png',
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
