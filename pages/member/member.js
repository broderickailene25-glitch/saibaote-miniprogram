// pages/member/member.js - 会员中心（Aesop暖白风 + 填充图标 + 活动/优惠券）
const { activities, coupons } = require('../../utils/mock-data')

Page({
  data: {
    // TabBar
    tabList: [
      { pagePath: '/pages/index/index', text: '首页' },
      { pagePath: '/pages/products/products', text: '产品' },
      { pagePath: '/pages/member/member', text: '会员' },
      { pagePath: '/pages/news/news', text: '资讯' },
      { pagePath: '/pages/mine/mine', text: '我的' }
    ],

    // 用户信息
    userInfo: {
      nickName: '赛宝特用户'
    },

    // 会员信息
    memberInfo: {
      level: 2,
      levelName: 'VIP 2',
      exp: 600,
      pointsToNext: 400,
      progressPercent: 60
    },

    // 进度条节点
    levelLabels: [
      { name: 'V1', percent: 0 },
      { name: 'V2', percent: 25 },
      { name: 'V3', percent: 50 },
      { name: 'V4', percent: 75 },
      { name: 'V5', percent: 100 }
    ],

    // 会员专享（长期权益）
    exclusiveBenefits: [
      { icon: '/assets/icons/icon-price.svg', title: '会员专享价', desc: '全线产品折扣' },
      { icon: '/assets/icons/icon-sample.svg', title: '免费样品', desc: '季度申请试用' },
      { icon: '/assets/icons/icon-guide.svg', title: '技术指导', desc: '专家一对一服务' },
      { icon: '/assets/icons/icon-delivery.svg', title: '优先发货', desc: '订单优先处理' },
      { icon: '/assets/icons/icon-plan.svg', title: '定制方案', desc: '种植/养殖方案定制' },
      { icon: '/assets/icons/icon-new.svg', title: '新品优先', desc: '新品上市抢先体验' }
    ],

    // 会员月享（每月福利）
    monthlyBenefits: [
      { icon: '/assets/icons/icon-coupon.svg', title: '月度优惠券', desc: '满减优惠自动发放' },
      { icon: '/assets/icons/icon-course.svg', title: '专属农技课', desc: '线上直播技术培训' },
      { icon: '/assets/icons/icon-points.svg', title: '积分兑换', desc: '积分换购好礼' }
    ],

    // 活动 & 优惠券
    activities: [],
    coupons: [],

    // 活动弹窗
    showPopup: false,
    popupImage: ''
  },

  onLoad() {
    this.getUserInfo()
    this.setData({
      activities,
      coupons
    })

    // TODO: 开发阶段每次清掉标记，上线前删除这行
    wx.removeStorageSync('hideActivityPopup')

    // 活动弹窗：进入会员页时弹出（本次会话只弹一次）
    const hidePopup = wx.getStorageSync('hideActivityPopup')
    if (!hidePopup && activities.length > 0) {
      this.setData({
        showPopup: true,
        popupImage: activities[0].image
      })
    }
  },

  getUserInfo: function () {
    var userInfo = wx.getStorageSync('userInfo')
    if (userInfo && userInfo.nickName) {
      this.setData({ userInfo: userInfo })
    }
  },

  // 领取优惠券
  claimCoupon: function (e) {
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

  // 关闭弹窗（本次会话不再显示）
  closePopup() {
    this.setData({ showPopup: false })
    wx.setStorageSync('hideActivityPopup', true)
  },

  // 阻止事件冒泡
  preventTap() {},

  // 跳转活动列表
  goToActivity() {
    this.setData({ showPopup: false })
    wx.navigateTo({
      url: '/pages/activity/activity'
    })
  },

  // 跳转活动详情
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/activity-detail/activity-detail?id=${id}`
    })
  },

  onShareAppMessage: function () {
    return {
      title: '赛宝特会员中心 — 专享农业技术服务',
      path: '/pages/member/member'
    }
  }
})
