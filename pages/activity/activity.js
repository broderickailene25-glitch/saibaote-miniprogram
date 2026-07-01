// pages/activity/activity.js
const { activities, coupons } = require('../../utils/mock-data')

Page({
  data: {
    activities: [],
    coupons: []
  },

  onLoad() {
    this.setData({
      activities,
      coupons
    })
  },

  // 领取优惠券
  claimCoupon(e) {
    const couponId = e.currentTarget.dataset.id
    const coupons = this.data.coupons.map(c => {
      if (c._id === couponId && c.status === 'available') {
        wx.showToast({
          title: '领取成功',
          icon: 'success'
        })
        return { ...c, status: 'claimed' }
      }
      return c
    })
    this.setData({ coupons })
  },

  goBack() {
    wx.navigateBack()
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/activity-detail/activity-detail?id=${id}`
    })
  }
})
