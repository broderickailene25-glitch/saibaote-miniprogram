# 版本清单：news-gallery-v1.0

| 元数据 | 值 |
|--------|------|
| **版本号** | news-gallery-v1.0 |
| **创建日期** | 2026-06-07 |
| **备份人** | Claude Code |
| **适用范围** | 咨询页（原资讯/案例页） |
| **改版类型** | 全量重写 — 画廊风格 + 竖排文字 |

## 改动内容

### 页面改名
- Tab "案例" → "咨询"
- 页面路径不变 (`pages/news/news`)
- 修改了所有页面的 `tabList`: `index` / `products` / `news` / `mine`

### 视觉改造
- 布局：左右交错排版（图片左→文字右 / 图片右→文字左，逐条交替）
- 图片框 70% | 文字框 30%
- 所有文字竖排（`writing-mode: vertical-lr`，左→右）
- 大标题 30rpx 字重 500
- 解释小字 18rpx 字重 300，透明度 0.7
- 图片高度 420rpx，顶部对齐
- Hero 区域："C O N S U L T" 英文 + "咨询" 竖排大字（72rpx）

### 交互改造
- 删除 Tab 切换（项目案例/农业资讯）
- 统一画廊展示，保留分类筛选（全部/案例/资讯）
- 点击 → 详情页（保留原有案例+资讯详情结构）

### 分类筛选
- 顶部显示"全部 / 案例 / 资讯"三个筛选
- 数据量 > 3 时自动显示筛选栏

## 涉及文件清单

| 文件 | 类型 | 说明 |
|------|------|------|
| `pages/news/news.wxml` | ✅ 有备份 | 全量重写 |
| `pages/news/news.wxss` | ✅ 有备份 | 全量重写 |
| `pages/news/news.js` | ✅ 有备份 | 重写 |
| `pages/news/news.json` | ✅ 有备份 | 改为 custom 导航 |
| `pages/index/index.js` | 未备份 | tabList "案例" → "咨询" |
| `pages/products/products.js` | 未备份 | tabList "案例" → "咨询" |
| `pages/mine/mine.js` | 未备份 | tabList "案例" → "咨询" |

## 恢复方法

```bash
cd "项目路径"
cp _versions/news-gallery-v1.0/news.wxml pages/news/news.wxml
cp _versions/news-gallery-v1.0/news.wxss pages/news/news.wxss
cp _versions/news-gallery-v1.0/news.js pages/news/news.js
cp _versions/news-gallery-v1.0/news.json pages/news/news.json
# 还需手动将 tabList 中的"咨询"改回"案例"
```
