// pages/products/products.js - 赛宝特产品页逻辑
const { products } = require('../../utils/mock-data')

Page({
  data: {
    activeCategory: 'hot',
    filteredProducts: [],
    currentCategoryName: '热销推荐',
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/news/news', text: '案例' },
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

  // 加入询价单
  addToInquiry: function (e) {
    const { id, name } = e.currentTarget.dataset

    // 获取询价单数据
    let inquiry = wx.getStorageSync('inquiry') || []

    // 检查是否已存在
    const existIndex = inquiry.findIndex(item => item.id === id)
    if (existIndex > -1) {
      wx.showToast({ title: '已在询价单中', icon: 'none' })
      return
    }

    // 添加到询价单
    inquiry.push({ id, name, addTime: Date.now() })
    wx.setStorageSync('inquiry', inquiry)

    wx.showToast({
      title: '已加入询价单',
      icon: 'success',
      duration: 1500
    })
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
