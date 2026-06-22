// utils/animation.js - 全局动画工具

/**
 * 列表项渐入动画（stagger）
 * @param {Array} items 数据列表
 * @param {Number} delay 每项延迟(ms)
 * @returns {Array} 带动画类名的数据
 */
function staggerFadeIn(items, delay = 80) {
  return items.map((item, index) => ({
    ...item,
    _animClass: 'anim-stagger',
    _animDelay: `animation-delay: ${index * delay}ms`
  }))
}

/**
 * 数字滚动动画
 * @param {Object} ctx Page实例
 * @param {String} key data中的key
 * @param {Number} target 目标值
 * @param {Number} duration 动画时长(ms)
 */
function animateNumber(ctx, key, target, duration = 1000) {
  const startTime = Date.now()
  const startValue = 0

  function step() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    // easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(startValue + (target - startValue) * eased)

    ctx.setData({ [key]: current })

    if (progress < 1) {
      setTimeout(step, 16)
    }
  }

  step()
}

/**
 * 视差滚动计算
 * @param {Number} scrollTop 滚动距离
 * @param {Number} rate 视差速率 (0-1, 越小越慢)
 * @returns {Number} 偏移量
 */
function parallaxOffset(scrollTop, rate = 0.5) {
  return scrollTop * rate
}

/**
 * 元素可见性检测（用于列表懒加载动画）
 * @param {Object} ctx Page实例
 * @param {String} selector 选择器
 * @param {String} animClass 动画类名
 */
function observeVisibility(ctx, selector, animClass = 'anim-visible') {
  const observer = ctx.createIntersectionObserver()
  observer.relativeToViewport({ top: 50, bottom: 50 })

  observer.observe(selector, (res) => {
    if (res.intersectionRatio > 0) {
      const path = selector.replace(/[^a-zA-Z0-9_-]/g, '_')
      ctx.setData({ [`${path}_visible`]: true })
    }
  })

  return observer
}

module.exports = {
  staggerFadeIn,
  animateNumber,
  parallaxOffset,
  observeVisibility
}
