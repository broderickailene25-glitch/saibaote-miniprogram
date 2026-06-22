// utils/api.js - 数据调用封装层
// 重要：此文件封装所有数据调用，后期切换服务器只需修改此文件

/**
 * API 调用封装
 * 当前使用微信云开发，后期可切换为 HTTP 请求
 */

// 获取云数据库引用
const db = wx.cloud.database()
const _ = db.command

/**
 * 产品相关 API
 */
const productApi = {
  // 获取产品列表
  getList: async function (category = '', page = 1, pageSize = 10) {
    try {
      let query = db.collection('products')

      if (category) {
        query = query.where({ category: category })
      }

      const res = await query
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .orderBy('sort', 'asc')
        .get()

      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取产品列表失败:', err)
      return {
        code: -1,
        data: [],
        message: err.message
      }
    }
  },

  // 获取产品详情
  getDetail: async function (id) {
    try {
      const res = await db.collection('products').doc(id).get()
      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取产品详情失败:', err)
      return {
        code: -1,
        data: null,
        message: err.message
      }
    }
  },

  // 获取推荐产品
  getRecommend: async function (limit = 3) {
    try {
      const res = await db.collection('products')
        .where({ isRecommend: true })
        .limit(limit)
        .orderBy('sort', 'asc')
        .get()

      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取推荐产品失败:', err)
      return {
        code: -1,
        data: [],
        message: err.message
      }
    }
  }
}

/**
 * 案例相关 API
 */
const caseApi = {
  // 获取案例列表
  getList: async function (page = 1, pageSize = 10) {
    try {
      const res = await db.collection('cases')
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .orderBy('createTime', 'desc')
        .get()

      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取案例列表失败:', err)
      return {
        code: -1,
        data: [],
        message: err.message
      }
    }
  },

  // 获取案例详情
  getDetail: async function (id) {
    try {
      const res = await db.collection('cases').doc(id).get()
      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取案例详情失败:', err)
      return {
        code: -1,
        data: null,
        message: err.message
      }
    }
  }
}

/**
 * 资讯相关 API
 */
const newsApi = {
  // 获取资讯列表
  getList: async function (page = 1, pageSize = 10) {
    try {
      const res = await db.collection('news')
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .orderBy('createTime', 'desc')
        .get()

      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取资讯列表失败:', err)
      return {
        code: -1,
        data: [],
        message: err.message
      }
    }
  },

  // 获取资讯详情
  getDetail: async function (id) {
    try {
      const res = await db.collection('news').doc(id).get()
      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取资讯详情失败:', err)
      return {
        code: -1,
        data: null,
        message: err.message
      }
    }
  }
}

/**
 * 订单相关 API
 */
const orderApi = {
  // 创建订单
  create: async function (orderData) {
    try {
      const res = await db.collection('orders').add({
        data: {
          ...orderData,
          status: 'pending', // pending, paid, shipped, completed, cancelled
          createTime: db.serverDate()
        }
      })

      return {
        code: 0,
        data: { orderId: res._id },
        message: 'success'
      }
    } catch (err) {
      console.error('创建订单失败:', err)
      return {
        code: -1,
        data: null,
        message: err.message
      }
    }
  },

  // 获取用户订单列表
  getUserOrders: async function (userId, page = 1, pageSize = 10) {
    try {
      const res = await db.collection('orders')
        .where({ userId: userId })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .orderBy('createTime', 'desc')
        .get()

      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取订单列表失败:', err)
      return {
        code: -1,
        data: [],
        message: err.message
      }
    }
  },

  // 获取订单详情
  getDetail: async function (orderId) {
    try {
      const res = await db.collection('orders').doc(orderId).get()
      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取订单详情失败:', err)
      return {
        code: -1,
        data: null,
        message: err.message
      }
    }
  }
}

/**
 * 用户相关 API
 */
const userApi = {
  // 获取用户信息
  getInfo: async function (userId) {
    try {
      const res = await db.collection('users').doc(userId).get()
      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取用户信息失败:', err)
      return {
        code: -1,
        data: null,
        message: err.message
      }
    }
  },

  // 更新用户信息
  updateInfo: async function (userId, userData) {
    try {
      await db.collection('users').doc(userId).update({
        data: userData
      })

      return {
        code: 0,
        message: 'success'
      }
    } catch (err) {
      console.error('更新用户信息失败:', err)
      return {
        code: -1,
        message: err.message
      }
    }
  }
}

/**
 * 评价相关 API
 */
const evaluationApi = {
  // 获取评价列表
  getList: async function (productId = '', page = 1, pageSize = 10) {
    try {
      let query = db.collection('evaluations')

      if (productId) {
        query = query.where({ productId: productId })
      }

      const res = await query
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .orderBy('createTime', 'desc')
        .get()

      return {
        code: 0,
        data: res.data,
        message: 'success'
      }
    } catch (err) {
      console.error('获取评价列表失败:', err)
      return {
        code: -1,
        data: [],
        message: err.message
      }
    }
  },

  // 添加评价
  add: async function (evaluationData) {
    try {
      await db.collection('evaluations').add({
        data: {
          ...evaluationData,
          createTime: db.serverDate()
        }
      })

      return {
        code: 0,
        message: 'success'
      }
    } catch (err) {
      console.error('添加评价失败:', err)
      return {
        code: -1,
        message: err.message
      }
    }
  }
}

// 导出所有 API
module.exports = {
  product: productApi,
  case: caseApi,
  news: newsApi,
  order: orderApi,
  user: userApi,
  evaluation: evaluationApi
}
