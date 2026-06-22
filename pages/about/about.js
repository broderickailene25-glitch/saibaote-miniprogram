// pages/about/about.js - 公司介绍页逻辑
Page({
  data: {
    advantages: [
      { icon: '🏆', title: '14项专利', desc: '核心技术自主可控' },
      { icon: '🏭', title: '全产业链', desc: '生产→产品→基地→销售' },
      { icon: '🌿', title: '绿色防控', desc: '台湾进口原料' },
      { icon: '📍', title: '大湾区', desc: '粤港澳核心区域' }
    ],
    products: [
      { name: '有机肥料', highlight: '5项专利', desc: '覆盖525和884标准，中土环科验证工艺' },
      { name: '禽用复合预混合饲料', highlight: '实测验证', desc: '鹏昌1.5万羽蛋鸡实测，投入产出比1:1' },
      { name: '生物质农药', highlight: '9款产品', desc: '台湾进口原料，绿色防控安全高效' }
    ],
    qualifications: [
      '国家高新技术企业',
      '14项核心专利技术',
      'NY525/NY884有机肥标准认证',
      '中土环科权威验证',
      '粤港澳大湾区重点农业企业',
      '深圳赛宝嘉科技生产资质'
    ]
  },

  goToProducts: function () {
    wx.switchTab({ url: '/pages/products/products' })
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return {
      title: '赛宝特 - 全农业产业链科技企业',
      path: '/pages/about/about'
    }
  }
})
