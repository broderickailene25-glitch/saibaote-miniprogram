// app.js - 赛宝特小程序入口
App({
  onLaunch: function () {
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用
        //   （wx.cloud.bindFunction、wx.cloud.bindDatabase、wx.cloud.bindUploadFile、wx.cloud.bindDownloadFile）的请求
        //   此处请填入环境 ID, 环境 ID 可在云开发控制台获取
        env: 'saibaote-prod', // 替换为你的云开发环境 ID
        traceUser: true,
      })
    }

    // 获取用户信息
    this.globalData = {}
  },

  globalData: {
    userInfo: null,
    cart: [], // 购物车数据
  }
})
