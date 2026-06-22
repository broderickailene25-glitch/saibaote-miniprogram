// components/product-card/product-card.js
Component({
  properties: {
    image: {
      type: String,
      value: ''
    },
    imageMode: {
      type: String,
      value: 'aspectFill'
    },
    title: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    price: {
      type: String,
      value: ''
    },
    unit: {
      type: String,
      value: ''
    },
    badge: {
      type: String,
      value: ''
    },
    badgeType: {
      type: String,
      value: ''
    },
    tags: {
      type: Array,
      value: []
    },
    showAction: {
      type: Boolean,
      value: true
    },
    actionText: {
      type: String,
      value: '了解详情'
    },
    shadow: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onTap() {
      this.triggerEvent('tap')
    }
  }
})
