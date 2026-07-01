// components/share-banner/share-banner.js - 通用分享横幅
Component({
  properties: {
    // 自定义文案（可选）
    text: {
      type: String,
      value: '分享好友下单成功，你也能得'
    },
    highlight: {
      type: String,
      value: '小包肥料'
    }
  },

  methods: {
    onTap() {
      wx.showModal({
        title: '分享有礼',
        content: '分享活动给好友，好友通过你的分享下单成功并完成支付，你也能免费获得一包阳台专用有机肥（300g）。每成功邀请1位好友得1包，每月最多累计5次奖励，赠品随下次订单一同发货。',
        confirmText: '知道了',
        showCancel: false
      })
    }
  }
})
