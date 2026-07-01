// pages/splash/splash.js - 开屏视频页
// 通过文件系统读取本地视频到临时目录播放（开发者工具不支持直接 src）

Page({
  data: {
    videoSrc: '',
    showSkip: false,
    videoReady: false
  },

  onLoad() {
    console.log('[Splash] 页面加载')
    this.loadVideoToTemp()
  },

  // 从项目目录读取视频到临时目录（兼容开发工具）
  loadVideoToTemp() {
    const that = this
    const fs = wx.getFileSystemManager()

    // 读取项目内的视频文件
    fs.readFile({
      filePath: 'splash.mp4',
      success(res) {
        // 写入临时目录（视频组件可播放）
        const tempPath = `${wx.env.USER_DATA_PATH}/splash.mp4`
        fs.writeFile({
          filePath: tempPath,
          data: res.data,
          success() {
            console.log('[Splash] 视频已加载到临时目录:', tempPath)
            that.setData({
              videoSrc: tempPath,
              videoReady: true
            })
          },
          fail(err) {
            console.error('[Splash] 写入临时文件失败:', err)
            that.fallback()
          }
        })
      },
      fail(err) {
        console.error('[Splash] 读取视频文件失败:', err)
        that.fallback()
      }
    })
  },

  onReady() {
    if (!this.data.videoReady) return
    this.playVideo()
  },

  // 视频就绪后触发的回调
  onVideoReady() {
    console.log('[Splash] 视频就绪')
    // 延迟显示跳过按钮
    setTimeout(() => {
      this.setData({ showSkip: true })
    }, 500)
  },

  // 手动触发播放
  playVideo() {
    try {
      const ctx = wx.createVideoContext('splashVideo', this)
      ctx.play()
      console.log('[Splash] 手动触发播放')
    } catch (e) {
      console.warn('[Splash] 播放失败:', e)
    }
  },

  onVideoEnded() {
    console.log('[Splash] 视频播放完成')
    this.goToHome()
  },

  onSkip() {
    console.log('[Splash] 用户点击跳过')
    this.goToHome()
  },

  onVideoError(e) {
    console.error('[Splash] 视频加载失败:', JSON.stringify(e.detail))
    this.fallback()
  },

  fallback() {
    // 兜底：显示提示后跳转首页
    this.setData({ debugInfo: '视频加载失败，即将跳转...' })
    setTimeout(() => this.goToHome(), 1500)
  },

  goToHome() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})
