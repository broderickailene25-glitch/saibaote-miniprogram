// components/nav-bar/nav-bar.js
Component({
  options: {
    multipleSlots: true
  },

  properties: {
    title: {
      type: String,
      value: ''
    },
    showBack: {
      type: Boolean,
      value: true
    },
    backText: {
      type: String,
      value: ''
    },
    transparent: {
      type: Boolean,
      value: false
    },
    dark: {
      type: Boolean,
      value: false
    }
  },

  data: {
    statusBarHeight: 20,
    navBarHeight: 44
  },

  lifetimes: {
    attached() {
      const systemInfo = wx.getSystemInfoSync()
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight || 20,
        navBarHeight: 44
      })
    }
  },

  methods: {
    onLeftTap() {
      this.triggerEvent('lefttap')
    },

    onRightTap() {
      this.triggerEvent('righttap')
    }
  }
})
