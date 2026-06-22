// pages/order/order.js - 结算页逻辑
Page({
  data: {
    orderItems: [],
    subtotalText: '0',
    totalText: '0',
    address: null,
    remark: ''
  },

  onLoad: function () {
    this.loadOrderData()
    this.loadAddress()
  },

  // 从购物车缓存加载商品
  loadOrderData: function () {
    const cart = wx.getStorageSync('product_cart') || []
    const subtotal = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)
    this.setData({
      orderItems: cart,
      subtotalText: subtotal.toFixed(subtotal % 1 === 0 ? 0 : 1),
      totalText: subtotal.toFixed(subtotal % 1 === 0 ? 0 : 1)
    })
  },

  // 加载收货地址
  loadAddress: function () {
    const address = wx.getStorageSync('address') || null
    this.setData({ address })
  },

  // 编辑地址
  editAddress: function () {
    wx.showActionSheet({
      itemList: ['使用微信地址', '手动填写地址'],
      success: (res) => {
        if (res.tapIndex === 0) {
          this.chooseWechatAddress()
        } else {
          wx.showToast({ title: '请在微信地址管理中添加', icon: 'none' })
        }
      }
    })
  },

  // 调用微信地址
  chooseWechatAddress: function () {
    wx.chooseAddress({
      success: (addr) => {
        const address = {
          name: addr.userName,
          phone: addr.telNumber,
          province: addr.provinceName,
          city: addr.cityName,
          district: addr.countyName,
          detail: addr.detailInfo
        }
        wx.setStorageSync('address', address)
        this.setData({ address })
      },
      fail: () => {
        wx.showToast({ title: '获取地址失败', icon: 'none' })
      }
    })
  },

  // 备注输入
  onRemarkInput: function (e) {
    this.setData({ remark: e.detail.value })
  },

  // 提交订单 → 调起微信支付
  submitOrder: function () {
    const { orderItems, address, totalText } = this.data

    // 校验
    if (orderItems.length === 0) {
      wx.showToast({ title: '购物车为空', icon: 'none' })
      return
    }

    if (!address) {
      wx.showToast({ title: '请填写收货地址', icon: 'none' })
      return
    }

    // 模拟支付流程（后续替换为真实微信支付）
    this.mockPayment()
  },

  // 模拟支付（后续替换为 wx.requestPayment）
  mockPayment: function () {
    wx.showLoading({ title: '处理支付...', mask: true })

    setTimeout(() => {
      wx.hideLoading()

      // 清空购物车
      wx.setStorageSync('product_cart', [])

      // 支付成功弹窗
      wx.showModal({
        title: '支付成功',
        content: '您的订单已提交，我们将尽快安排发货。',
        showCancel: false,
        confirmText: '完成',
        confirmColor: '#3A6B4F',
        success: () => {
          wx.switchTab({ url: '/pages/index/index' })
        }
      })
    }, 1500)
  },

  // 真实微信支付（预留，后续替换 mockPayment）
  wechatPay: function (orderInfo) {
    // wx.requestPayment({
    //   timeStamp: orderInfo.timeStamp,
    //   nonceStr: orderInfo.nonceStr,
    //   package: orderInfo.package,
    //   signType: orderInfo.signType,
    //   paySign: orderInfo.paySign,
    //   success: () => {
    //     wx.setStorageSync('product_cart', [])
    //     wx.showModal({
    //       title: '支付成功',
    //       content: '订单已提交，我们会尽快发货。',
    //       showCancel: false,
    //       confirmText: '完成',
    //       success: () => wx.switchTab({ url: '/pages/index/index' })
    //     })
    //   },
    //   fail: () => {
    //     wx.showToast({ title: '支付取消或失败', icon: 'none' })
    //   }
    // })
  },

  // 联系客服
  contactService: function () {
    wx.showModal({
      title: '联系客服',
      content: '客服电话：400-XXX-XXXX\n服务时间：9:00-18:00',
      showCancel: false,
      confirmText: '知道了',
      confirmColor: '#3A6B4F'
    })
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  }
})
