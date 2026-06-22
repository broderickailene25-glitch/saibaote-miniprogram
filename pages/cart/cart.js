// pages/cart/cart.js - 购物车页逻辑
Page({
  data: {
    cartItems: [],
    totalCount: 0,
    totalPrice: 0
  },

  onLoad: function () {
    this.loadCart()
  },

  onShow: function () {
    this.loadCart()
  },

  // 加载购物车数据
  loadCart: function () {
    const cart = wx.getStorageSync('cart') || []
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    this.setData({ cartItems: cart, totalCount, totalPrice })
  },

  // 增加数量
  increaseQty: function (e) {
    const id = e.currentTarget.dataset.id
    let cart = wx.getStorageSync('cart') || []
    const index = cart.findIndex(item => item.id === id)
    if (index >= 0) {
      cart[index].quantity += 1
      wx.setStorageSync('cart', cart)
      this.loadCart()
    }
  },

  // 减少数量
  decreaseQty: function (e) {
    const id = e.currentTarget.dataset.id
    let cart = wx.getStorageSync('cart') || []
    const index = cart.findIndex(item => item.id === id)
    if (index >= 0 && cart[index].quantity > 1) {
      cart[index].quantity -= 1
      wx.setStorageSync('cart', cart)
      this.loadCart()
    }
  },

  // 删除商品
  removeItem: function (e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示',
      content: '确定要从购物车中移除该商品吗？',
      success: (res) => {
        if (res.confirm) {
          let cart = wx.getStorageSync('cart') || []
          cart = cart.filter(item => item.id !== id)
          wx.setStorageSync('cart', cart)
          this.loadCart()
          wx.showToast({ title: '已移除', icon: 'success' })
        }
      }
    })
  },

  // 去产品详情
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
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
    const cart = wx.getStorageSync('cart') || []
    if (cart.length === 0) {
      wx.showToast({ title: '购物车为空', icon: 'none' })
      return
    }
    wx.navigateTo({ url: '/pages/order/order' })
  }
})
