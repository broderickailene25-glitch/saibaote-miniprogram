// pages/patents/patents.js - 技术专利页逻辑
Page({
  data: {
    activeFilter: 'all',
    filteredPatents: [],
    expandedId: null,
    patents: [
      { _id: 'p01', category: 'organic', categoryName: '有机肥', title: '一种高效有机肥料及其制备方法', summary: '通过特殊工艺提高有机肥的肥效和稳定性，改善土壤结构。', description: '本发明公开了一种高效有机肥料及其制备方法，通过特殊的发酵工艺和配方设计，显著提高了有机肥的肥效和稳定性。', techPoints: ['特殊发酵工艺', '配方优化设计', '提高肥效稳定性', '改善土壤结构'] },
      { _id: 'p02', category: 'organic', categoryName: '有机肥', title: '有机肥生产用原料混合装置', summary: '提高原料混合均匀度，保证产品质量一致性。', description: '本实用新型提供了一种有机肥生产用原料混合装置，解决了传统混合设备混合不均匀的问题。', techPoints: ['均匀混合技术', '提高生产效率', '保证质量一致'] },
      { _id: 'p03', category: 'organic', categoryName: '有机肥', title: '有机肥发酵过程温控系统', summary: '精确控制发酵温度，提高发酵效率和产品质量。', description: '本发明公开了一种有机肥发酵过程温控系统，实现发酵过程的精确温度控制。', techPoints: ['精确温控', '自动化控制', '提高发酵效率'] },
      { _id: 'p04', category: 'organic', categoryName: '有机肥', title: '有机肥颗粒成型机', summary: '将有机肥加工成均匀颗粒，便于施用和储存。', description: '本实用新型提供了一种有机肥颗粒成型机，可将粉状有机肥加工成均匀颗粒。', techPoints: ['颗粒均匀', '便于施用', '提高储存性'] },
      { _id: 'p05', category: 'organic', categoryName: '有机肥', title: '有机肥检测分析方法', summary: '建立完整的有机肥质量检测体系，确保产品达标。', description: '本发明建立了一套完整的有机肥质量检测分析方法。', techPoints: ['全面检测', '质量保证', '标准化流程'] },
      { _id: 'p06', category: 'feed', categoryName: '预混饲料', title: '禽用复合预混合饲料配方', summary: '科学配比多种营养成分，满足禽类不同生长阶段需求。', description: '本发明公开了一种禽用复合预混合饲料配方，经过鹏昌1.5万羽蛋鸡实测验证。', techPoints: ['科学配方', '营养均衡', '1.5万羽实测', '投入产出1:1'] },
      { _id: 'p07', category: 'feed', categoryName: '预混饲料', title: '饲料添加剂预混工艺', summary: '优化预混工艺，确保添加剂均匀分布。', description: '本发明提供了一种饲料添加剂预混工艺，确保各种添加剂在饲料中均匀分布。', techPoints: ['均匀分布', '工艺优化', '质量稳定'] },
      { _id: 'p08', category: 'feed', categoryName: '预混饲料', title: '蛋鸡专用营养补充剂', summary: '针对蛋鸡产蛋期特殊营养需求研发。', description: '本发明公开了一种蛋鸡专用营养补充剂，针对产蛋期的特殊营养需求。', techPoints: ['产蛋期专用', '提高产蛋率', '增强免疫力'] },
      { _id: 'p09', category: 'feed', categoryName: '预混饲料', title: '饲料保质期延长技术', summary: '采用特殊工艺延长预混饲料保质期。', description: '本发明采用特殊工艺技术，有效延长预混饲料的保质期。', techPoints: ['延长保质期', '保持营养活性', '抗氧化技术'] },
      { _id: 'p10', category: 'pesticide', categoryName: '生物质农药', title: '一种生物质农药组合物', summary: '利用天然植物提取物制备环保农药，绿色防控。', description: '本发明公开了一种生物质农药组合物，采用台湾进口天然植物提取物。', techPoints: ['天然原料', '绿色防控', '无残留', '安全高效'] },
      { _id: 'p11', category: 'pesticide', categoryName: '生物质农药', title: '生物农药增效剂', summary: '提高生物农药的防治效果和持效期。', description: '本发明提供了一种生物农药增效剂，显著提高生物农药的防治效果。', techPoints: ['增效技术', '延长持效期', '减少用量'] },
      { _id: 'p12', category: 'pesticide', categoryName: '生物质农药', title: '植物源杀虫剂制备方法', summary: '从天然植物中提取杀虫活性成分。', description: '本发明公开了一种植物源杀虫剂的制备方法。', techPoints: ['植物源提取', '高效杀虫', '环境友好'] },
      { _id: 'p13', category: 'pesticide', categoryName: '生物质农药', title: '微生物杀菌剂', summary: '利用有益微生物抑制病原菌，实现生物防治。', description: '本发明利用有益微生物抑制农作物病原菌。', techPoints: ['微生物技术', '生物防治', '安全无毒'] },
      { _id: 'p14', category: 'pesticide', categoryName: '生物质农药', title: '农药缓释制剂技术', summary: '控制农药释放速度，提高利用率减少用量。', description: '本发明提供了一种农药缓释制剂技术。', techPoints: ['缓释技术', '提高利用率', '减少施药次数'] }
    ]
  },

  onLoad: function () {
    this.setData({ filteredPatents: this.data.patents })
  },

  // 筛选
  setFilter: function (e) {
    const filter = e.currentTarget.dataset.filter
    this.setData({ activeFilter: filter })
    if (filter === 'all') {
      this.setData({ filteredPatents: this.data.patents })
    } else {
      const filtered = this.data.patents.filter(p => p.category === filter)
      this.setData({ filteredPatents: filtered })
    }
  },

  // 展开/收起详情
  toggleDetail: function (e) {
    const id = e.currentTarget.dataset.id
    this.setData({
      expandedId: this.data.expandedId === id ? null : id
    })
  },

  // 返回上一页
  onNavBack: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return {
      title: '赛宝特 - 14项核心专利技术',
      path: '/pages/patents/patents'
    }
  }
})
