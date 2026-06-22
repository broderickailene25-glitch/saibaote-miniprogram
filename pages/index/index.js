// pages/index/index.js - 赛宝特首页（全屏品牌展示 + 10s轮播）

const { COS_ASSETS } = require('../../utils/cos')

Page({
  data: {
    currentBg: 0,
    heroImagePrimary: COS_ASSETS.heroProduct,
    heroImageSecondary: COS_ASSETS.heroProduct2,
    tabList: [
      {
        pagePath: "/pages/index/index",
        text: "首页"
      },
      {
        pagePath: "/pages/products/products",
        text: "产品"
      },
      {
        pagePath: "/pages/news/news",
        text: "资讯"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的"
      }
    ]
  },

  onLoad: function () {
    this.startBgRotation()
  },

  // 背景轮播：每10秒自动切换
  startBgRotation: function () {
    this._timer = setInterval(() => {
      const next = this.data.currentBg === 0 ? 1 : 0
      this.setData({ currentBg: next })
    }, 10000)
  },

  onUnload: function () {
    clearInterval(this._timer)
  },

  // 跳转到产品列表 Tab
  goToProducts: function () {
    wx.switchTab({
      url: '/pages/products/products'
    })
  },

  onShareAppMessage: function () {
    return {
      title: '赛宝特 - 全农业产业链科技企业',
      path: '/pages/index/index'
    }
  }
})
