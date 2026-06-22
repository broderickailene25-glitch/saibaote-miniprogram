// pages/member/member.js - 会员中心
Page({
  data: {
    memberInfo: {
      level: '银卡会员',
      points: 2680,
      nextLevel: '金卡会员',
      pointsToNext: 2320,
      progressPercent: 35
    },
    benefits: [
      { title: '免费样品申请', desc: '每季度可申请一次免费样品' },
      { title: '专属客服通道', desc: '专属客服一对一服务' },
      { title: '新品优先体验', desc: '第一时间体验新品' },
      { title: '技术指导服务', desc: '专业技术团队在线指导' },
      { title: '会员专享价', desc: '部分产品享受会员折扣' }
    ],
    levels: [
      { name: '普通会员', minPoints: 0, desc: '注册即享' },
      { name: '银卡会员', minPoints: 1000, desc: '累计消费满1000元' },
      { name: '金卡会员', minPoints: 5000, desc: '累计消费满5000元' },
      { name: '钻石会员', minPoints: 10000, desc: '累计消费满10000元' }
    ]
  },

  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return {
      title: '赛宝特会员中心',
      path: '/pages/member/member'
    }
  }
})
