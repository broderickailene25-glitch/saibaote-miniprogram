// pages/contact/contact.js - 联系客服页逻辑
Page({
  data: {
    formData: {
      name: '',
      phone: '',
      content: ''
    },
    expandedFaq: null,
    faqs: [
      { question: '如何购买赛宝特产品？', answer: '您可以在小程序"产品中心"浏览产品，选择心仪的产品加入购物车，填写收货地址后提交订单即可。如有特殊需求，也可联系客服咨询。' },
      { question: '产品价格如何？', answer: '赛宝特产品采用透明定价，具体价格请查看各产品详情页。部分产品支持面议，欢迎来电咨询获取优惠报价。' },
      { question: '发货范围和时效？', answer: '我们支持全国发货，广东省内一般2-3天到达，省外3-5天。大批量订单可安排专车配送。' },
      { question: '售后服务如何保障？', answer: '所有产品均享受质量保证，如有质量问题可联系客服退换。我们提供全程技术指导，确保使用效果。' },
      { question: '可以申请样品试用吗？', answer: '可以！欢迎联系客服申请样品试用，我们会根据您的需求推荐合适的产品并安排寄送。' }
    ]
  },

  // 输入绑定
  onInput: function (e) {
    const field = e.currentTarget.dataset.field
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },

  // 拨打电话
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '400-XXX-XXXX',
      fail: () => {}
    })
  },

  // 复制微信号
  copyWechat: function () {
    wx.setClipboardData({
      data: 'SaibaoteService',
      success: () => {
        wx.showToast({ title: '微信号已复制', icon: 'success' })
      }
    })
  },

  // 发送邮件
  sendEmail: function () {
    wx.setClipboardData({
      data: 'service@saibaote.com',
      success: () => {
        wx.showToast({ title: '邮箱已复制', icon: 'success' })
      }
    })
  },

  // 打开地图
  openLocation: function () {
    wx.showModal({
      title: '公司地址',
      content: '广东省深圳市粤港澳大湾区',
      showCancel: false,
      confirmText: '知道了'
    })
  },

  // 提交留言
  submitMessage: function () {
    const { name, phone, content } = this.data.formData
    if (!name.trim()) {
      wx.showToast({ title: '请输入姓名', icon: 'none' })
      return
    }
    if (!phone.trim() || phone.length !== 11) {
      wx.showToast({ title: '请输入正确手机号', icon: 'none' })
      return
    }
    if (!content.trim()) {
      wx.showToast({ title: '请输入咨询内容', icon: 'none' })
      return
    }

    wx.showLoading({ title: '提交中...' })
    setTimeout(() => {
      wx.hideLoading()
      this.setData({ formData: { name: '', phone: '', content: '' } })
      wx.showModal({
        title: '留言成功',
        content: '感谢您的留言，我们会在24小时内与您联系。',
        showCancel: false,
        confirmText: '知道了'
      })
    }, 1000)
  },

  // 展开/收起FAQ
  toggleFaq: function (e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      expandedFaq: this.data.expandedFaq === index ? null : index
    })
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return {
      title: '联系赛宝特 - 全农业产业链科技企业',
      path: '/pages/contact/contact'
    }
  }
})
