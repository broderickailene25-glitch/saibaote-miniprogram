// pages/news-list/news-list.js - 往期文章列表（栏目分类）
const { news } = require('../../utils/mock-data')

Page({
  data: {
    columns: [],
    activeColumn: 'all',
    filteredArticles: [],
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad: function () {
    // 提取所有栏目
    const colSet = new Set(news.map(n => n.column))
    const columns = [{ key: 'all', name: '全部' }, ...Array.from(colSet).map(c => ({ key: c, name: c }))]
    this.setData({
      columns,
      filteredArticles: news
    })
  },

  // 切换栏目
  switchColumn: function (e) {
    const key = e.currentTarget.dataset.key
    if (key === 'all') {
      this.setData({ activeColumn: 'all', filteredArticles: news })
    } else {
      this.setData({
        activeColumn: key,
        filteredArticles: news.filter(n => n.column === key)
      })
    }
  },

  // 打开文章
  openArticle: function (e) {
    const id = e.currentTarget.dataset.id
    const item = news.find(n => n._id === id)
    if (item) {
      wx.navigateTo({
        url: `/pages/news/news?id=${id}`
      })
    }
  },

  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return { title: '赛宝特资讯', path: '/pages/news-list/news-list' }
  }
})
