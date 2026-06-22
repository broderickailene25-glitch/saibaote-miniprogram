// pages/evaluation/evaluation.js - 客户评价页逻辑
const { evaluations } = require('../../utils/mock-data')

Page({
  data: {
    activeFilter: 'all',
    filteredEvals: [],
    ratingBars: [
      { stars: 5, count: 2, percent: 67 },
      { stars: 4, count: 1, percent: 33 },
      { stars: 3, count: 0, percent: 0 },
      { stars: 2, count: 0, percent: 0 },
      { stars: 1, count: 0, percent: 0 }
    ]
  },

  onLoad: function () {
    this.setData({ filteredEvals: evaluations })
  },

  setFilter: function (e) {
    const filter = e.currentTarget.dataset.filter
    this.setData({ activeFilter: filter })
    if (filter === 'all') {
      this.setData({ filteredEvals: evaluations })
    } else {
      const filtered = evaluations.filter(ev => ev.productId === filter)
      this.setData({ filteredEvals: filtered })
    }
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return {
      title: '赛宝特客户评价 - 真实用户见证',
      path: '/pages/evaluation/evaluation'
    }
  }
})
