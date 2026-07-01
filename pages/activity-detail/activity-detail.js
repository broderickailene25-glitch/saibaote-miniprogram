// pages/activity-detail/activity-detail.js
const { activities } = require('../../utils/mock-data')

Page({
  data: {
    activity: null
  },

  onLoad(options) {
    const id = options.id
    const activity = activities.find(a => a._id === id)
    if (activity) {
      this.setData({ activity })
    }
  },

  goBack() {
    wx.navigateBack()
  }
})
