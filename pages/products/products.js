// pages/products/products.js — Aesop式编辑排版
const { products } = require('../../utils/mock-data')

Page({
  data: {
    products: products,
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad: function () {},

  // 加入购物车
  addToCart: function (e) {
    const { id, name, price, image, unit } = e.currentTarget.dataset
    let cart = wx.getStorageSync('product_cart') || []

    const existIndex = cart.findIndex(item => item.id === id)
    if (existIndex > -1) {
      cart[existIndex].quantity += 1
    } else {
      cart.push({
        id,
        name,
        price: Number(price) || 0,
        unit: unit || '',
        image: image || '',
        quantity: 1
      })
    }

    wx.setStorageSync('product_cart', cart)
    wx.showToast({ title: '已加入购物车', icon: 'success', duration: 800 })
  },

  // 跳转产品详情
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/product-detail/product-detail?id=${id}` })
  },

  // 分享
  onShareAppMessage: function () {
    return {
      title: '赛宝特 — 专业有机肥产品',
      path: '/pages/products/products'
    }
  }
})
