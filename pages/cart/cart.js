// pages/cart/cart.js — Aesop式编辑清单
Page({
  data: {
    cartItems: [],
    totalCount: 0,
    totalPrice: '0'
  },

  onLoad: function () {
    this.loadCart()
  },

  onShow: function () {
    this.loadCart()
  },

  // 加载购物车数据（统一使用 product_cart key）
  loadCart: function () {
    const cart = wx.getStorageSync('product_cart') || []
    const totalCount = cart.reduce(function (sum, item) { return sum + item.quantity }, 0)
    const totalPrice = cart.reduce(function (sum, item) { return sum + (item.price || 0) * item.quantity }, 0)
    this.setData({
      cartItems: cart,
      totalCount: totalCount,
      totalPrice: totalPrice > 0 ? totalPrice.toFixed(totalPrice % 1 === 0 ? 0 : 1) : '0'
    })
  },

  // 增加数量
  increaseQty: function (e) {
    var id = e.currentTarget.dataset.id
    var cart = wx.getStorageSync('product_cart') || []
    var index = cart.findIndex(function (item) { return item.id === id })
    if (index >= 0) {
      cart[index].quantity += 1
      wx.setStorageSync('product_cart', cart)
      this.loadCart()
    }
  },

  // 减少数量
  decreaseQty: function (e) {
    var id = e.currentTarget.dataset.id
    var cart = wx.getStorageSync('product_cart') || []
    var index = cart.findIndex(function (item) { return item.id === id })
    if (index >= 0) {
      if (cart[index].quantity <= 1) {
        // 数量为1时减号即移除
        cart.splice(index, 1)
      } else {
        cart[index].quantity -= 1
      }
      wx.setStorageSync('product_cart', cart)
      this.loadCart()
    }
  },

  // 移除商品（淡灰文字链，直接移除不弹确认）
  removeItem: function (e) {
    var id = e.currentTarget.dataset.id
    var cart = wx.getStorageSync('product_cart') || []
    cart = cart.filter(function (item) { return item.id !== id })
    wx.setStorageSync('product_cart', cart)
    this.loadCart()
    wx.showToast({ title: '已移除', icon: 'success', duration: 800 })
  },

  // 去产品详情
  goToDetail: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/product-detail/product-detail?id=' + id
    })
  },

  // 去产品列表
  goToProducts: function () {
    wx.switchTab({ url: '/pages/products/products' })
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  },

  // 去结算
  goToOrder: function () {
    var cart = wx.getStorageSync('product_cart') || []
    if (cart.length === 0) {
      wx.showToast({ title: '购物车为空', icon: 'none' })
      return
    }
    wx.navigateTo({ url: '/pages/order/order' })
  }
})
