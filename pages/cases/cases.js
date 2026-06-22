// pages/cases/cases.js - 项目案例页逻辑
const { cases } = require('../../utils/mock-data')

Page({
  data: {
    cases: [],
    expandedId: null
  },

  onLoad: function () {
    this.setData({ cases })
  },

  // 展开/收起详情
  toggleDetail: function (e) {
    const id = e.currentTarget.dataset.id
    this.setData({
      expandedId: this.data.expandedId === id ? null : id
    })
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return {
      title: '赛宝特项目案例 - 真实数据，见证实力',
      path: '/pages/cases/cases'
    }
  }
})
