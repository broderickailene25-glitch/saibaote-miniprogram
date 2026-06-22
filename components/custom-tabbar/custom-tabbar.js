// components/custom-tabbar/custom-tabbar.js - 自定义TabBar逻辑
Component({
  properties: {
    selected: {
      type: Number,
      value: 0
    },
    list: {
      type: Array,
      value: []
    }
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
    }
  }
})
