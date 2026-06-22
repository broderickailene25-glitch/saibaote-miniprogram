// components/section-header/section-header.js
Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    subtitle: {
      type: String,
      value: ''
    },
    showMore: {
      type: Boolean,
      value: true
    },
    moreText: {
      type: String,
      value: '查看全部'
    }
  },

  methods: {
    onMoreTap() {
      this.triggerEvent('moretap')
    }
  }
})
