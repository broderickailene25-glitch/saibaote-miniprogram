// pages/news/news.js - 咨询页逻辑（画廊风格）
const { news, cases } = require('../../utils/mock-data')

Page({
  data: {
    galleryItems: [],
    showDetail: false,
    currentItem: null,
    activeFilter: 'all',
    showFilter: false,
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/news/news', text: '咨询' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ]
  },

  onLoad: function (options) {
    this.buildGallery()

    // 如果有 id 参数，直接显示详情
    if (options.id) {
      this.showDetail(options.id)
    }
  },

  // 构建画廊数据
  buildGallery: function () {
    const caseItems = cases.map(item => ({
      _id: item._id,
      type: 'case',
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image: item.images[0],
      stats: item.stats,
      createTime: item.createTime,
      source: item
    }))

    const newsItems = news.map(item => ({
      _id: item._id,
      type: 'news',
      title: item.title,
      subtitle: item.summary,
      description: item.summary,
      image: item.cover,
      content: item.content,
      author: item.author,
      readTime: item.readTime,
      createTime: item.createTime,
      source: item
    }))

    // 合并并按时间排序
    const allItems = [...caseItems, ...newsItems].sort((a, b) =>
      new Date(b.createTime) - new Date(a.createTime)
    )

    this.setData({
      galleryItems: allItems,
      showFilter: allItems.length > 3
    })
  },

  // 分类筛选
  setFilter: function (e) {
    const filter = e.currentTarget.dataset.filter
    this.buildGallery()

    if (filter !== 'all') {
      const filtered = this.data.galleryItems.filter(item => item.type === filter)
      this.setData({
        activeFilter: filter,
        galleryItems: filtered
      })
    } else {
      this.setData({ activeFilter: 'all' })
    }
  },

  // 进入详情
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    this.showDetail(id)
  },

  showDetail: function (id) {
    const items = this.data.galleryItems
    const item = items.find(n => n._id === id)
    if (item) {
      this.setData({ currentItem: item, showDetail: true })
    }
  },

  // 返回列表
  goBack: function () {
    this.setData({ showDetail: false, currentItem: null })
  },

  onShareAppMessage: function () {
    if (this.data.currentItem) {
      return {
        title: this.data.currentItem.title,
        path: `/pages/news/news?id=${this.data.currentItem._id}`
      }
    }
    return { title: '赛宝特咨询', path: '/pages/news/news' }
  }
})
