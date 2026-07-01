// pages/mine/mine.js - 个人中心页逻辑
Page({
  data: {
    userInfo: {},
    cartCount: 0,
    orderCounts: {
      pending: 0,
      paid: 0,
      shipped: 0,
      completed: 0
    },
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/member/member', text: '会员' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad: function () {
    this.loadUserInfo()
  },

  onShow: function () {
    this.updateCartCount()
  },

  // 加载用户信息
  loadUserInfo: function () {
    const userInfo = wx.getStorageSync('userInfo') || {}
    this.setData({ userInfo })
  },

  // 获取用户信息
  getUserProfile: function () {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        const userInfo = res.userInfo
        wx.setStorageSync('userInfo', userInfo)
        this.setData({ userInfo })
        wx.showToast({ title: '登录成功', icon: 'success' })
      },
      fail: () => {
        wx.showToast({ title: '登录已取消', icon: 'none' })
      }
    })
  },

  // 更新购物车数量
  updateCartCount: function () {
    const cart = wx.getStorageSync('cart') || []
    const count = cart.reduce((sum, item) => sum + item.quantity, 0)
    this.setData({ cartCount: count })
  },

  // 跳转购物车
  goToCart: function () {
    wx.navigateTo({ url: '/pages/cart/cart' })
  },

  // 跳转地址管理
  goToAddress: function () {
    wx.chooseAddress({
      success: (addr) => {
        const address = {
          name: addr.userName,
          phone: addr.telNumber,
          province: addr.provinceName,
          city: addr.cityName,
          district: addr.countyName,
          detail: addr.detailInfo
        }
        wx.setStorageSync('address', address)
        wx.showToast({ title: '地址已保存', icon: 'success' })
      },
      fail: () => {}
    })
  },

  // 跳转评价
  goToEvaluation: function () {
    wx.navigateTo({ url: '/pages/evaluation/evaluation' })
  },

  // 跳转联系客服
  goToContact: function () {
    wx.navigateTo({ url: '/pages/contact/contact' })
  },

  // 跳转订单
  goToOrders: function () {
    wx.showModal({
      title: '我的订单',
      content: '订单功能将在微信支付接入后开放，敬请期待。',
      showCancel: false,
      confirmText: '知道了'
    })
  },

  // 跳转关于我们
  goToAbout: function () {
    wx.navigateTo({ url: '/pages/about/about' })
  },

  // 跳转专利
  goToPatents: function () {
    wx.navigateTo({ url: '/pages/patents/patents' })
  },

  // 跳转资讯
  goToNews: function () {
    wx.switchTab({ url: '/pages/news/news' })
  },

  // 会员中心
  goToMember: function () {
    wx.navigateTo({ url: '/pages/member/member' })
  },

  // 分享
  shareApp: function () {},

  onShareAppMessage: function () {
    return {
      title: '赛宝特 - 全农业产业链科技企业',
      path: '/pages/index/index'
    }
  }
})
