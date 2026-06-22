# 版本清单：products-v1.0.3

| 元数据 | 值 |
|--------|------|
| **版本号** | products-v1.0.3 |
| **创建日期** | 2026-06-07 |
| **备份人** | Claude Code |
| **适用范围** | 产品页 + 数据 |
| **改版类型** | C区域恢复 + D区域图片调整 + 新增阳台专用产品 |

## 改动内容

### C 区域 — 分类导航
- 尝试两端对齐和字距调整 → 未满意，最终恢复原样

### D 区域 — 商品列表图片
- 图片模式：`aspectFit` + 80% → `aspectFill` + 100%（撑满方框不留白）
- 商品图片全部替换为两张 AI 生成图交替填充

### 新增产品
- 阳台专用有机肥（`product_007`）
  - 分类：balcony，300g/袋，¥9.8
  - 标签：阳台适用、小包装
  - 图片：`/images/product-balcony.png`

### 背景色
- 页面背景 + B区域下半部：`#FAF9F7` → `#FDFCFA`（更贴近白纸）

## 涉及文件清单

| 文件 | 类型 | 说明 |
|------|------|------|
| `pages/products/products.wxml` | ✅ 有备份 | 产品图模式改为 aspectFill |
| `pages/products/products.wxss` | ✅ 有备份 | 背景色调整，图片尺寸改100% |
| `pages/products/products.js` | ✅ 有备份 | 新增阳台专用分类 |
| `pages/products/products.json` | ✅ 有备份 | 未改动 |
| `utils/mock-data.js` | ✅ 有备份 | 新增 product_007 |

## 备份文件

```
_versions/products-v1.0.3/
├── MANIFEST.md
├── products.wxml
├── products.wxss
├── products.js
├── products.json
└── mock-data.js
```

## 恢复方法

```bash
cd "项目路径"
cp _versions/products-v1.0.3/products.wxml pages/products/products.wxml
cp _versions/products-v1.0.3/products.wxss pages/products/products.wxss
cp _versions/products-v1.0.3/products.js pages/products/products.js
cp _versions/products-v1.0.3/products.json pages/products/products.json
cp _versions/products-v1.0.3/mock-data.js utils/mock-data.js
```
