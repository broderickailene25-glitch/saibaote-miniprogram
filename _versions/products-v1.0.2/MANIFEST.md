# 版本清单：products-v1.0.2

| 元数据 | 值 |
|--------|------|
| **版本号** | products-v1.0.2 |
| **创建日期** | 2026-06-07 |
| **备份人** | Claude Code |
| **适用范围** | 产品页（pages/products/） |
| **改版类型** | A+B 区域精细化调整 |

## 改版摘要

在 v1.0.1 基础上，对 A 区域和 B 区域进行大量微调，直至用户满意。

## A 区域改动

| 项目 | 最终值 |
|------|--------|
| 背景色 | `#2A2A2A` |
| 文字颜色 | `#F3F1EC`（暖米白，与页面背景呼应） |
| 顶部留白 | 100rpx（⑤从容呼吸） |
| 配送上门 | 36rpx Bold 600，独立一行 |
| 赛宝特·有机生活 | 34rpx Bold 800，字距+1rpx |
| 距您 2.3km | 22rpx，店名下方，`rgba(243,241,236,0.4)` |
| 企业团购享优惠 | 20rpx，右对齐，字距+4rpx，`rgba(243,241,236,0.55)` |
| 搜索/更多图标 | 已删除 |
| 门店自提 | 已删除，仅保留配送上门 |
| 一起选横幅 | 已删除 |

## B 区域改动

| 项目 | 最终值 |
|------|--------|
| 背景分割 | 渐变硬切：上20% `#2A2A2A`，下80% `#FAF9F7` |
| 图片方框 | 335rpx × 280rpx，直角无圆角 |
| 文字方框 | 335rpx × 148rpx，直角，淡灰边框（`#EFEDE8`），上边无边框 |
| 图文间距 | 0（紧贴） |
| 图片 | 左图 `brand-card-left.png`，右图 `brand-card-right.png`（AI生成） |
| 标题 | 22rpx，字距+4rpx，颜色 `#8C8C8C` |
| 副标题 | 15rpx，字距+2rpx，颜色 `#8C8C8C`，两行分排 |
| 文字左边距 | 38rpx |

## 页面背景色

`#FAF9F7`（极淡暖白，比纯白稍暖一丝）

## 涉及文件清单

| 文件 | 类型 | 说明 |
|------|------|------|
| `pages/products/products.wxml` | ✅ 有备份 | 品牌卡片结构改为图文字分离 |
| `pages/products/products.wxss` | ✅ 有备份 | 大量样式调整 |
| `pages/products/products.js` | ✅ 有备份 | 未改动功能 |
| `pages/products/products.json` | ✅ 有备份 | 未改动 |

## 备份文件

```
_versions/products-v1.0.2/
├── MANIFEST.md
├── products.wxml
├── products.wxss
├── products.js
└── products.json
```

## 恢复方法

```bash
cd "项目路径"
cp _versions/products-v1.0.2/products.wxml pages/products/products.wxml
cp _versions/products-v1.0.2/products.wxss pages/products/products.wxss
cp _versions/products-v1.0.2/products.js pages/products/products.js
cp _versions/products-v1.0.2/products.json pages/products/products.json
```
