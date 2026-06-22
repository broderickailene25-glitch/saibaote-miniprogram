// utils/util.js - 工具函数

/**
 * 格式化日期
 * @param {Date|string|number} date - 日期对象、时间戳或日期字符串
 * @param {string} format - 格式化模式，如 'YYYY-MM-DD HH:mm:ss'
 * @returns {string} 格式化后的日期字符串
 */
const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!date) return ''

  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

/**
 * 格式化价格
 * @param {number} price - 价格
 * @param {number} decimals - 小数位数
 * @returns {string} 格式化后的价格
 */
const formatPrice = (price, decimals = 2) => {
  if (price === null || price === undefined) return '0.00'
  return Number(price).toFixed(decimals)
}

/**
 * 防抖函数
 * @param {Function} fn - 要执行的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
const debounce = (fn, delay = 300) => {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 节流函数
 * @param {Function} fn - 要执行的函数
 * @param {number} interval - 间隔时间（毫秒）
 * @returns {Function} 节流后的函数
 */
const throttle = (fn, interval = 300) => {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= interval) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}

/**
 * 生成唯一 ID
 * @returns {string} 唯一 ID
 */
const generateId = () => {
  return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

/**
 * 显示成功提示
 * @param {string} title - 提示内容
 */
const showSuccess = (title = '操作成功') => {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: 2000
  })
}

/**
 * 显示错误提示
 * @param {string} title - 提示内容
 */
const showError = (title = '操作失败') => {
  wx.showToast({
    title: title,
    icon: 'none',
    duration: 2000
  })
}

/**
 * 显示加载中
 * @param {string} title - 提示内容
 */
const showLoading = (title = '加载中...') => {
  wx.showLoading({
    title: title,
    mask: true
  })
}

/**
 * 隐藏加载中
 */
const hideLoading = () => {
  wx.hideLoading()
}

/**
 * 确认对话框
 * @param {string} content - 内容
 * @param {string} title - 标题
 * @returns {Promise<boolean>} 用户是否确认
 */
const confirm = (content, title = '提示') => {
  return new Promise((resolve) => {
    wx.showModal({
      title: title,
      content: content,
      success: (res) => {
        resolve(res.confirm)
      }
    })
  })
}

/**
 * 获取图片信息
 * @param {string} src - 图片路径
 * @returns {Promise<Object>} 图片信息
 */
const getImageInfo = (src) => {
  return new Promise((resolve, reject) => {
    wx.getImageInfo({
      src: src,
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 选择图片
 * @param {number} count - 最多选择数量
 * @param {Array} sizeType - 图片尺寸类型
 * @param {Array} sourceType - 图片来源
 * @returns {Promise<Array>} 选择的图片路径数组
 */
const chooseImage = (count = 1, sizeType = ['compressed'], sourceType = ['album', 'camera']) => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: count,
      sizeType: sizeType,
      sourceType: sourceType,
      success: (res) => resolve(res.tempFilePaths),
      fail: reject
    })
  })
}

/**
 * 复制到剪贴板
 * @param {string} data - 要复制的内容
 * @param {string} successMsg - 成功提示
 */
const copyToClipboard = (data, successMsg = '已复制') => {
  wx.setClipboardData({
    data: data,
    success: () => {
      showSuccess(successMsg)
    }
  })
}

/**
 * 拨打电话
 * @param {string} phoneNumber - 电话号码
 */
const makePhoneCall = (phoneNumber) => {
  wx.makePhoneCall({
    phoneNumber: phoneNumber,
    fail: () => {
      showError('拨打电话失败')
    }
  })
}

/**
 * 打开地图
 * @param {number} latitude - 纬度
 * @param {number} longitude - 经度
 * @param {string} name - 地点名称
 * @param {string} address - 地址
 */
const openLocation = (latitude, longitude, name = '', address = '') => {
  wx.openLocation({
    latitude: latitude,
    longitude: longitude,
    name: name,
    address: address,
    fail: () => {
      showError('打开地图失败')
    }
  })
}

/**
 * 获取存储数据
 * @param {string} key - 键名
 * @param {*} defaultValue - 默认值
 * @returns {*} 存储的数据
 */
const getStorage = (key, defaultValue = null) => {
  try {
    const value = wx.getStorageSync(key)
    return value || defaultValue
  } catch (e) {
    return defaultValue
  }
}

/**
 * 设置存储数据
 * @param {string} key - 键名
 * @param {*} value - 值
 */
const setStorage = (key, value) => {
  try {
    wx.setStorageSync(key, value)
  } catch (e) {
    console.error('存储数据失败:', e)
  }
}

/**
 * 删除存储数据
 * @param {string} key - 键名
 */
const removeStorage = (key) => {
  try {
    wx.removeStorageSync(key)
  } catch (e) {
    console.error('删除数据失败:', e)
  }
}

module.exports = {
  formatDate,
  formatPrice,
  debounce,
  throttle,
  generateId,
  showSuccess,
  showError,
  showLoading,
  hideLoading,
  confirm,
  getImageInfo,
  chooseImage,
  copyToClipboard,
  makePhoneCall,
  openLocation,
  getStorage,
  setStorage,
  removeStorage
}
