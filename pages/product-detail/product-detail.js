// pages/product-detail/product-detail.js - 产品详情页逻辑
const { products } = require('../../utils/mock-data')

Page({
  data: {
    product: null,
    cartCount: 0
  },

  onLoad: function (options) {
    const id = options.id
    const product = products.find(p => p._id === id)
    if (product) {
      this.setData({ product })
      wx.setNavigationBarTitle({ title: product.name })
    }
    this.updateCartCount()
  },

  onShow: function () {
    this.updateCartCount()
  },

  // 更新购物车数量
  updateCartCount: function () {
    const cart = wx.getStorageSync('cart') || []
    const count = cart.reduce((sum, item) => sum + item.quantity, 0)
    this.setData({ cartCount: count })
  },

  // 加入购物车
  addToCart: function () {
    const product = this.data.product
    if (!product) return

    let cart = wx.getStorageSync('cart') || []
    const existingIndex = cart.findIndex(item => item._id === product._id)

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1
    } else {
      cart.push({
        _id: product._id,
        name: product.name,
        image: product.images[0],
        priceText: product.priceText,
        subtitle: product.subtitle,
        quantity: 1
      })
    }

    wx.setStorageSync('cart', cart)
    this.updateCartCount()

    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 1500
    })
  },

  // 联系客服
  contactService: function () {
    wx.showModal({
      title: '联系客服',
      content: '客服电话：400-XXX-XXXX\n工作时间：9:00-18:00',
      showCancel: false,
      confirmText: '知道了'
    })
  },

  // 去购物车
  goToCart: function () {
    wx.navigateTo({ url: '/pages/cart/cart' })
  },

  // 回首页
  goToHome: function () {
    wx.switchTab({ url: '/pages/index/index' })
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    const product = this.data.product
    return {
      title: product ? `${product.name} - 赛宝特` : '赛宝特产品详情',
      path: `/pages/product-detail/product-detail?id=${product._id}`
    }
  }
})
