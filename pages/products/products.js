// pages/products/products.js - 赛宝特产品页逻辑
const { products } = require('../../utils/mock-data')
const { COS_ASSETS } = require('../../utils/cos')

Page({
  data: {
    activeCategory: 'hot',
    brandCardLeftImage: COS_ASSETS.brandCardLeft,
    brandCardRightImage: COS_ASSETS.brandCardRight,
    filteredProducts: [],
    currentCategoryName: '热销推荐',
    animatedProductId: '',
    showCartSheet: false,
    cartItems: [],
    cartTotalCount: 0,
    cartTotalPriceText: '0',
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ],
    categories: [
      { key: 'hot', name: '热销推荐' },
      { key: 'organic', name: '生物有机肥' },
      { key: 'balcony', name: '阳台专用' },
      { key: 'soil', name: '土壤改良' },
      { key: 'tea', name: '茶园专用' },
      { key: 'fruit', name: '果蔬专用' },
      { key: 'microbe', name: '微生物菌剂' },
      { key: 'plan', name: '使用方案' }
    ]
  },

  onLoad: function () {
    this.loadProducts('hot')
    this.loadCart()
  },

  // 加载产品数据
  loadProducts: function (category) {
    let filtered = []
    let categoryName = ''

    if (category === 'hot') {
      // 热销推荐：显示所有产品
      filtered = products
      categoryName = '热销推荐'
    } else if (category === 'plan') {
      // 使用方案：跳转到方案页面
      wx.showToast({ title: '方案页面开发中', icon: 'none' })
      return
    } else {
      // 按分类过滤
      filtered = products.filter(p => p.category === category)
      categoryName = this.data.categories.find(c => c.key === category)?.name || '全部'
    }

    this.setData({
      activeCategory: category,
      filteredProducts: filtered,
      currentCategoryName: categoryName
    })
  },

  // 切换分类
  switchCategory: function (e) {
    const category = e.currentTarget.dataset.category
    this.loadProducts(category)
  },

  // 跳转到搜索
  goToSearch: function () {
    wx.showToast({ title: '搜索功能开发中', icon: 'none' })
  },

  // 联系客服
  contactService: function () {
    wx.showModal({
      title: '联系客服',
      content: '客服电话：400-xxx-xxxx\n服务时间：9:00-18:00',
      showCancel: false
    })
  },

  // 显示更多
  showMore: function () {
    wx.showActionSheet({
      itemList: ['分享给朋友', '复制链接', '关于我们'],
      success: (res) => {
        if (res.tapIndex === 0) {
          // 分享功能
        } else if (res.tapIndex === 1) {
          wx.showToast({ title: '链接已复制', icon: 'success' })
        } else if (res.tapIndex === 2) {
          wx.navigateTo({ url: '/pages/about/about' })
        }
      }
    })
  },

  // 咨询产品
  contactForProduct: function (e) {
    const name = e.currentTarget.dataset.name
    wx.showModal({
      title: '咨询产品',
      content: `您想咨询「${name}」，请留下您的联系方式，我们会尽快与您联系。`,
      confirmText: '拨打电话',
      success: (res) => {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: '400-xxx-xxxx'
          })
        }
      }
    })
  },

  // ==================== 购物车逻辑 ====================

  // 从缓存加载购物车
  loadCart: function () {
    const cartItems = wx.getStorageSync('product_cart') || []
    this.setData({ cartItems })
    this.computeCartDisplay()
  },

  // 保存购物车到缓存
  saveCart: function (cartItems) {
    wx.setStorageSync('product_cart', cartItems)
    this.setData({ cartItems })
    this.computeCartDisplay()
  },

  // 计算购物车显示数据
  computeCartDisplay: function () {
    const items = this.data.cartItems
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    this.setData({
      cartTotalCount: totalCount,
      cartTotalPriceText: totalPrice.toFixed(totalPrice % 1 === 0 ? 0 : 1)
    })
  },

  // 加入购物车
  addToCart: function (e) {
    const { id, name, price, image, unit } = e.currentTarget.dataset
    let cartItems = [...this.data.cartItems]

    // 检查是否已存在
    const existIndex = cartItems.findIndex(item => item.id === id)
    if (existIndex > -1) {
      cartItems[existIndex].quantity += 1
    } else {
      cartItems.push({
        id,
        name,
        price: Number(price) || 0,
        unit: unit || '',
        image: image || '',
        quantity: 1
      })
    }

    this.saveCart(cartItems)

    // 按钮缩放动效
    this.setData({ animatedProductId: id })
    setTimeout(() => {
      this.setData({ animatedProductId: '' })
    }, 300)

    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 800
    })
  },

  // 购物车主按钮：去结算 / 去选购
  handleCartBtn: function () {
    if (this.data.cartTotalCount > 0) {
      // 关闭浮层后跳转到结算页
      this.setData({ showCartSheet: false })
      wx.navigateTo({ url: '/pages/order/order' })
    } else {
      wx.showToast({ title: '请先选择商品', icon: 'none' })
    }
  },

  // 点击购物车栏 → 弹出底部浮层
  goToCartPage: function () {
    this.setData({ showCartSheet: true })
  },

  // 关闭浮层（点击遮罩 / 关闭按钮）
  closeCartSheet: function () {
    this.setData({ showCartSheet: false })
  },

  // 阻止点击浮层内部穿透到遮罩
  noop: function () {},

  // 增加购物车商品数量
  increaseCartItem: function (e) {
    const { id } = e.currentTarget.dataset
    let cartItems = [...this.data.cartItems]
    const idx = cartItems.findIndex(item => item.id === id)
    if (idx > -1) {
      cartItems[idx].quantity += 1
      this.saveCart(cartItems)
    }
  },

  // 减少购物车商品数量（到 0 自动移除）
  decreaseCartItem: function (e) {
    const { id } = e.currentTarget.dataset
    let cartItems = [...this.data.cartItems]
    const idx = cartItems.findIndex(item => item.id === id)
    if (idx > -1) {
      if (cartItems[idx].quantity <= 1) {
        cartItems.splice(idx, 1)
      } else {
        cartItems[idx].quantity -= 1
      }
      this.saveCart(cartItems)
    }
  },

  // 跳转到产品详情
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
    })
  },

  onShareAppMessage: function () {
    return {
      title: '福聚多农业 - 专业有机肥产品',
      path: '/pages/products/products'
    }
  }
})
