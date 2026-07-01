// pages/products/products.js — Aesop式编辑排版
const { products } = require('../../utils/mock-data')

Page({
  data: {
    products: products,
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/member/member', text: '会员' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ],
    showCartBar: false,
    cartCount: 0,
    cartTotal: '0'
  },

  onLoad: function () {},

  onShow: function () {
    this.loadCart()
  },

  // 读取购物车状态
  loadCart: function () {
    const cart = wx.getStorageSync('product_cart') || []
    let count = 0
    let total = 0
    cart.forEach(function (item) {
      count += item.quantity
      total += (item.price || 0) * item.quantity
    })
    this.setData({
      cartCount: count,
      cartTotal: total > 0 ? total.toFixed(total % 1 === 0 ? 0 : 1) : '0'
    })
  },

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
    this.setData({ showCartBar: true })
    this.loadCart()
    wx.showToast({ title: '已加入购物车', icon: 'success', duration: 800 })
  },

  // 跳转产品详情
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/product-detail/product-detail?id=${id}` })
  },

  // 跳转购物车页
  goToCartPage: function () {
    wx.navigateTo({ url: '/pages/cart/cart' })
  },

  // 分享
  onShareAppMessage: function () {
    return {
      title: '赛宝特 — 专业有机肥产品',
      path: '/pages/products/products'
    }
  }
})
