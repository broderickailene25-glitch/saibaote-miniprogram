// pages/index/index.js - 赛宝特首页（图片完整 + 底部留白极简）

const { COS_ASSETS } = require('../../utils/cos')

Page({
  data: {
    heroImage: COS_ASSETS.heroProduct,
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/member/member', text: '会员' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad() {
    // 首页纯展示，活动弹窗已移至会员页
  },

  // 跳转到产品列表 Tab
  goToProducts() {
    wx.switchTab({
      url: '/pages/products/products'
    })
  },

  onShareAppMessage() {
    return {
      title: '赛宝特 - 全农业产业链科技企业',
      path: '/pages/index/index'
    }
  }
})
