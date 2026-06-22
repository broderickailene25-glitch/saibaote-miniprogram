// pages/news/news.js - 资讯页（全屏封面 + 详情）
const { news } = require('../../utils/mock-data')

Page({
  data: {
    coverImage: news.length > 0 ? news[0].cover : '',
    showDetail: false,
    currentItem: null,
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad: function (options) {
    // 有 id 参数：直接从文章列表页跳过来的，显示详情
    if (options.id) {
      const item = news.find(n => n._id === options.id)
      if (item) {
        this.setData({
          showDetail: true,
          currentItem: {
            _id: item._id,
            title: item.title,
            content: item.content,
            image: item.cover,
            createTime: item.createTime
          }
        })
        return
      }
    }
    // 无 id：封面模式，使用第一篇作为每日推荐
    if (news.length > 0) {
      this._article = news[0]
    }
  },

  // 点击封面 → 打开文章
  openArticle: function () {
    const item = this._article
    if (item) {
      this.setData({
        showDetail: true,
        currentItem: {
          _id: item._id,
          title: item.title,
          content: item.content,
          image: item.cover,
          createTime: item.createTime
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
    this.setData({ showDetail: false, currentItem: null })
  },

  onShareAppMessage: function () {
    return { title: '立夏适合种植的作物', path: '/pages/news/news' }
  }
})
