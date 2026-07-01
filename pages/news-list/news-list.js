// pages/news-list/news-list.js - 往期文章（分类标签 + 焦点轮播 + 文章列表）
const { news } = require('../../utils/mock-data')

Page({
  data: {
    columns: [],
    activeColumn: 'all',
    filteredArticles: [],
    carouselList: [],
    carouselIndex: 0,
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/member/member', text: '会员' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad() {
    const colSet = new Set(news.map(n => n.column))
    const columns = [{ key: 'all', name: '全部' }, ...Array.from(colSet).map(c => ({ key: c, name: c }))]
    this.setData({
      columns,
      filteredArticles: news,
      carouselList: news
    })
  },

  switchColumn(e) {
    const key = e.currentTarget.dataset.key
    const list = key === 'all' ? news : news.filter(n => n.column === key)
    this.setData({
      activeColumn: key,
      filteredArticles: list,
      carouselList: list,
      carouselIndex: 0
    })
  },

  prevCarousel() {
    const { carouselList, carouselIndex } = this.data
    if (carouselList.length === 0) return
    const idx = (carouselIndex - 1 + carouselList.length) % carouselList.length
    this.setData({ carouselIndex: idx })
  },

  nextCarousel() {
    const { carouselList, carouselIndex } = this.data
    if (carouselList.length === 0) return
    const idx = (carouselIndex + 1) % carouselList.length
    this.setData({ carouselIndex: idx })
  },

  openArticle(e) {
    const id = e.currentTarget.dataset.id
    wx.reLaunch({
      url: `/pages/news/news?id=${id}`
    })
  },

  openCarouselArticle() {
    const item = this.data.carouselList[this.data.carouselIndex]
    if (item) {
      wx.reLaunch({
        url: `/pages/news/news?id=${item._id}`
      })
    }
  },

  onNavBack() {
    wx.navigateBack()
  },

  loadMore() {
    // 预留：后续接入分页加载
  },

  onShareAppMessage() {
    return { title: '赛宝特资讯', path: '/pages/news-list/news-list' }
  }
})
