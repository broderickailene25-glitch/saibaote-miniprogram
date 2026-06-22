# 版本清单：products-v1.0.1

| 元数据 | 值 |
|--------|------|
| **版本号** | products-v1.0.1 |
| **创建日期** | 2026-06-07 |
| **备份人** | Claude Code |
| **适用范围** | 产品页（pages/products/） |
| **改版类型** | 视觉重构（功能未变） |

## 改版摘要

产品页从「高级自然农业品牌风」全面改造为「喜茶式高级极简点单页风格」。

## 改动内容

### A 区域 — 顶部导航区
- 背景色：深绿 #2D5A3D → 深炭灰 #2A2A2A
- 文字色：纯白 #FFFFFF → 暖米白 #F3F1EC（与页面背景呼应）
- 店名：30rpx → 34rpx Bold 800，字距+1rpx
- 配送上门：24rpx → 36rpx（比赛宝特大，突出服务类型）
- 距离：与店名同行 → 店名下方独立一行，22rpx
- 顶部留白：无 → 100rpx（选择档位⑤「从容呼吸」）
- 删除搜索图标、更多操作图标
- 删除"一起选"横幅，改为"企业团购享优惠"小字右对齐
- 删除"门店自提"切换，仅保留"配送上门"

### B 区域 — 品牌宣传卡片区
- 背景改为 3:7 渐变分割（linear-gradient 硬切）
  - 上30%：#2A2A2A（与A区域衔接）
  - 下70%：#F3F1EC（与C区域/商品区衔接）
- 白底圆角卡片浮在深色背景上

### 底部导航
- 去掉"方案"tab（5项→4项）
- 去掉所有图标，纯文字
- tabList 统一："资讯"→"案例"
- 产品页移除硬编码底部导航，改用 custom-tabbar 组件

## 涉及文件清单

| 文件 | 类型 | 说明 |
|------|------|------|
| `pages/products/products.wxml` | ✅ 有备份 | 完全重写 |
| `pages/products/products.wxss` | ✅ 有备份 | 完全重写（403行） |
| `pages/products/products.js` | ✅ 有备份 | 未改动功能（仅删除switchTab、添加tabList） |
| `pages/products/products.json` | ✅ 有备份 | 仅注册 custom-tabbar |
| `pages/index/index.js` | ❌ 未备份 | tabList文字更新 |
| `pages/news/news.js` | ❌ 未备份 | tabList文字更新 |
| `pages/mine/mine.js` | ❌ 未备份 | tabList文字更新 |

## 备份文件

```
_versions/products-v1.0.1/
├── MANIFEST.md        ← 本文件
├── products.wxml
├── products.wxss
├── products.js
└── products.json
```

## 恢复方法

### 完整恢复（还原整个产品页）

```bash
# 进入项目目录
cd "项目路径"

# 从备份复制文件覆盖
cp _versions/products-v1.0.1/products.wxml pages/products/products.wxml
cp _versions/products-v1.0.1/products.wxss pages/products/products.wxss
cp _versions/products-v1.0.1/products.js pages/products/products.js
cp _versions/products-v1.0.1/products.json pages/products/products.json
```

### 部分恢复（只恢复特定文件）

从 `_versions/products-v1.0.1/` 中选取需要的文件，复制回对应目录即可。
