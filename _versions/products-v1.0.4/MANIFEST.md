# 版本清单：products-v1.0.4

| 元数据 | 值 |
|--------|------|
| **版本号** | products-v1.0.4 |
| **创建日期** | 2026-06-07 |
| **备份人** | Claude Code |
| **适用范围** | 产品页 D 区 + 购物车栏 |
| **改版类型** | 新增底部购物车栏 + 按钮逻辑改造 |

## 改动内容

### D 区域 — 商品列表
- "+"按钮 `addToInquiry` → `addToCart`（加入购物车，替换询价单）
- "+"按钮添加点击缩放动画（0.3s scale 反馈）
- 底部留白 140rpx → 240rpx（为购物车栏预留空间）

### 新增 — 底部购物车栏
- 固定在页面底部，TabBar 上方 12rpx
- 白色圆角胶囊（28rpx），左右边距 28rpx
- 左侧：🛒 图标 + 红色数量角标 + "已选 N 件"
- 中间：合计金额 ¥XXX
- 右侧：深绿"去结算"按钮 / 置灰"去选购"
- 空状态显示"购物车空空的"
- 数据存 localStorage 持久化

### 未改动
- A 区域（顶部导航）
- B 区域（品牌宣传卡片）
- C 区域（分类导航）
- 底部 TabBar

## 涉及文件清单

| 文件 | 类型 | 说明 |
|------|------|------|
| `pages/products/products.wxml` | ✅ 有备份 | 新增购物车栏结构，更新"+"按钮 |
| `pages/products/products.wxss` | ✅ 有备份 | 新增购物车栏样式 + 按钮动画 |
| `pages/products/products.js` | ✅ 有备份 | 新增购物车数据管理逻辑 |
| `pages/products/products.json` | ✅ 有备份 | 未改动（纯备份）|

## 备份文件

```
_versions/products-v1.0.4/
├── MANIFEST.md
├── products.wxml
├── products.wxss
├── products.js
└── products.json
```

## 恢复方法

```bash
cd "项目路径"
cp _versions/products-v1.0.4/products.wxml pages/products/products.wxml
cp _versions/products-v1.0.4/products.wxss pages/products/products.wxss
cp _versions/products-v1.0.4/products.js pages/products/products.js
cp _versions/products-v1.0.4/products.json pages/products/products.json
```
