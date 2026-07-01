// pages/news/news.js - 资讯页（全屏封面 + 详情）
const { news } = require('../../utils/mock-data')

Page({
  data: {
    swiperList: news,
    swiperIndex: 0,
    showDetail: false,
    currentItem: null,
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/member/member', text: '会员' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad: function (options) {
    // 有 id 参数：从文章列表跳过来的，显示详情
    if (options.id) {
      const item = news.find(n => n._id === options.id)
      if (item) {
        this._article = item
        this.setData({
          showDetail: true,
          currentItem: {
            _id: item._id,
            title: item.title,
            content: item.content,
            image: item.cover,
            createTime: item.createTime,
            column: item.column
          }
        })
        return
      }
    }
    // 无 id：封面模式，选中第一篇
    if (news.length > 0) {
      this._article = news[0]
    }
  },

  // 轮播切换
  onSwiperChange: function (e) {
    const index = e.detail.current
    this._article = news[index] || null
    this.setData({ swiperIndex: index })
  },

  // 点击指示点跳转
  swipeTo: function (e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this._article = news[index] || null
    this.setData({ swiperIndex: index })
  },

  // 点击封面 → 打开当前轮播文章
  openArticle: function () {
    const item = this._article || news[this.data.swiperIndex]
    if (item) {
      this.setData({
        showDetail: true,
        currentItem: {
          _id: item._id,
          title: item.title,
          content: item.content,
          image: item.cover,
          createTime: item.createTime,
          column: item.column
        }
      })
    }
  },

  // 查看更多文章
  showMoreArticles: function () {
    wx.navigateTo({ url: '/pages/news-list/news-list' })
  },

  // 返回封面
  closeArticle: function () {
    const item = this._article || news[this.data.swiperIndex || 0]
    const cover = item ? item.cover : (news[0] ? news[0].cover : '')
    this.setData({ showDetail: false, currentItem: null })
  },

  onShareAppMessage: function () {
    return { title: '立夏适合种植的作物', path: '/pages/news/news' }
  }
})
