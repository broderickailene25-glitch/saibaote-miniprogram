# 产品页 Aesop式留白 重新设计 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将产品页从卡片滑动轮播改为 Aesop 式编辑排版，去掉购物车栏，建立暖白+衬线体的高级视觉基调

**架构：** 产品页改为纵向滚动布局，产品1用全出血大图+渐变消融+编辑信息区，产品2用横向卡片。去掉轮播逻辑和购物车栏。颜色系统统一到暖白底 #FAFAF8 + 深色文字 #2C2C2C + 大地金 #D4A373。字体用苹方 serif fallback 模拟衬线体。

**技术栈：** 微信小程序 WXML/WXSS/JS，无外部依赖

---

## 文件结构

| 文件 | 操作 | 职责 |
|------|------|------|
| `pages/products/products.wxml` | 重写 | 页面结构：品牌头部 + 产品1全出血 + 产品2横向卡片 + TabBar |
| `pages/products/products.wxss` | 重写 | Aesop式留白样式：暖白底、衬线标题、渐变消融、编号 |
| `pages/products/products.js` | 重写 | 精简逻辑：加载数据 + 加入购物车（去掉轮播/滑动/购物车面板） |

---

### 任务 1：重写 products.js — 精简为纯数据+加购逻辑

**文件：**
- 修改：`pages/products/products.js`

- [ ] **步骤 1：重写 products.js**

去掉轮播逻辑（startAutoPlay/stopAutoPlay/onSliderTouchStart/onSliderTouchEnd/onDotTap）、购物车面板逻辑（showCartSheet/closeCartSheet/goToCartPage/increaseCartItem/decreaseCartItem）、购物车计算（loadCart/saveCart/computeCartDisplay）。只保留：加载产品数据 + addToCart + goToDetail + onShareAppMessage。

```javascript
// pages/products/products.js — Aesop式编辑排版
const { products } = require('../../utils/mock-data')

Page({
  data: {
    products: products
  },

  onLoad: function () {},

  // 加入购物车
  addToCart: function (e) {
    const { id, name, price, image, unit } = e.currentTarget.dataset
    let cart = wx.getStorageSync('product_cart') || []

    const existIndex = cart.findIndex(item => item.id === id)
    if (existIndex > -1) {
      cart[existIndex].quantity += 1
    } else {
      cart.push({
        id,
        name,
        price: Number(price) || 0,
        unit: unit || '',
        image: image || '',
        quantity: 1
      })
    }

    wx.setStorageSync('product_cart', cart)
    wx.showToast({ title: '已加入购物车', icon: 'success', duration: 800 })
  },

  // 跳转产品详情
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/product-detail/product-detail?id=${id}` })
  },

  // 分享
  onShareAppMessage: function () {
    return {
      title: '赛宝特 — 专业有机肥产品',
      path: '/pages/products/products'
    }
  }
})
```

- [ ] **步骤 2：验证语法无误**

在微信开发者工具中确认 products.js 无报错。

- [ ] **步骤 3：Commit**

```bash
git add pages/products/products.js
git commit -m "refactor(products): 精简JS逻辑，去掉轮播和购物车面板"
```

---

### 任务 2：重写 products.wxml — Aesop式编辑排版

**文件：**
- 修改：`pages/products/products.wxml`

- [ ] **步骤 1：重写 products.wxml**

替换整个文件。新结构：品牌头部 → 产品1（全出血大图+编辑信息） → 产品2（横向卡片+大编号） → TabBar。

```xml
<!--pages/products/products.wxml — Aesop式编辑排版-->
<view class="page-products">

  <!-- 品牌头部 -->
  <view class="header">
    <text class="brand">Saibaote</text>
    <text class="page-label">Collection</text>
  </view>

  <!-- ==================== 产品1：全出血大图 ==================== -->
  <view class="product-hero" wx:if="{{products.length > 0}}">
    <!-- 大图 + 渐变消融 -->
    <view class="hero__image-wrap" bindtap="goToDetail" data-id="{{products[0]._id}}">
      <image class="hero__image" src="{{products[0].images[0]}}" mode="aspectFill"></image>
      <view class="hero__fade"></view>
    </view>

    <!-- 编辑信息区 -->
    <view class="hero__body">
      <view class="hero__meta">
        <text class="hero__num">01</text>
        <text class="hero__tag">Organic Fertilizer</text>
      </view>
      <text class="hero__name">{{products[0].name}}</text>
      <text class="hero__desc">{{products[0].description}}</text>
      <view class="hero__bottom">
        <view class="hero__price-wrap">
          <text class="hero__price">¥{{products[0].priceText}}</text>
          <text class="hero__unit">/{{products[0].unit}}</text>
        </view>
        <view class="btn-add" catchtap="addToCart"
          data-id="{{products[0]._id}}"
          data-name="{{products[0].name}}"
          data-price="{{products[0].price}}"
          data-image="{{products[0].images[0]}}"
          data-unit="{{products[0].unit}}">
          <text>加入购物车</text>
        </view>
      </view>
    </view>
  </view>

  <!-- ==================== 产品2：横向卡片 ==================== -->
  <view class="product-alt" wx:if="{{products.length > 1}}">
    <text class="alt__num">02</text>
    <view class="alt__card">
      <image class="alt__image" src="{{products[1].images[0]}}" mode="aspectFill" bindtap="goToDetail" data-id="{{products[1]._id}}"></image>
      <view class="alt__info">
        <view class="alt__top">
          <text class="alt__name" bindtap="goToDetail" data-id="{{products[1]._id}}">{{products[1].name}}</text>
          <text class="alt__price">¥{{products[1].priceText}}</text>
        </view>
        <text class="alt__desc">{{products[1].subtitle}}</text>
        <view class="alt__bottom">
          <text class="alt__spec">{{products[1].unit}}</text>
          <view class="btn-add-sm" catchtap="addToCart"
            data-id="{{products[1]._id}}"
            data-name="{{products[1].name}}"
            data-price="{{products[1].price}}"
            data-image="{{products[1].images[0]}}"
            data-unit="{{products[1].unit}}">
            <text>加入购物车</text>
          </view>
        </view>
      </view>
    </view>
  </view>

  <!-- 底部留白 -->
  <view class="bottom-safe"></view>

  <custom-tabbar selected="{{1}}" list="{{tabList}}"></custom-tabbar>

</view>
```

- [ ] **步骤 2：在 products.js 的 data 中补回 tabList**

在 products.js 的 data 中添加 tabList 字段（TabBar 需要）。

```javascript
data: {
  products: products,
  tabList: [
    { pagePath: '/pages/index/index', text: '首页' },
    { pagePath: '/pages/products/products', text: '产品' },
    { pagePath: '/pages/news/news', text: '资讯' },
    { pagePath: '/pages/mine/mine', text: '我的' }
  ]
}
```

- [ ] **步骤 3：Commit**

```bash
git add pages/products/products.wxml pages/products/products.js
git commit -m "feat(products): Aesop式编辑排版，产品1全出血+产品2横向卡片"
```

---

### 任务 3：重写 products.wxss — Aesop式留白样式

**文件：**
- 修改：`pages/products/products.wxss`

- [ ] **步骤 1：重写 products.wxss**

替换整个文件。去掉所有旧的轮播/购物车面板/购物车栏样式，写全新的 Aesop 风格。

```css
/* pages/products/products.wxss — Aesop式留白 */

page {
  --bg: #FAFAF8;
  --text: #2C2C2C;
  --text-light: #888888;
  --text-muted: #AAAAAA;
  --border: #EEEEEE;
  --gold: #D4A373;
  --num-color: #E5E0D8;
}

.page-products {
  min-height: 100vh;
  background: var(--bg);
  padding-bottom: 120rpx;
}

/* ==================== 品牌头部 ==================== */
.header {
  padding: 104rpx 56rpx 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.brand {
  font-family: Georgia, "Songti SC", serif;
  font-size: 32rpx;
  color: var(--text);
  letter-spacing: 4rpx;
}

.page-label {
  font-size: 20rpx;
  font-weight: 400;
  letter-spacing: 6rpx;
  color: var(--text-muted);
  text-transform: uppercase;
}

/* ==================== 产品1：全出血大图 ==================== */
.product-hero {
  margin-top: 72rpx;
}

.hero__image-wrap {
  width: 100%;
  height: 760rpx;
  position: relative;
  overflow: hidden;
}

.hero__image {
  width: 100%;
  height: 100%;
}

/* 渐变消融到底色 */
.hero__fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 240rpx;
  background: linear-gradient(180deg, transparent, var(--bg));
}

.hero__body {
  padding: 0 56rpx;
  margin-top: -40rpx;
  position: relative;
  z-index: 1;
}

/* 编号 + 标签 */
.hero__meta {
  display: flex;
  align-items: center;
  gap: 32rpx;
  margin-bottom: 32rpx;
}

.hero__num {
  font-family: Georgia, "Songti SC", serif;
  font-size: 96rpx;
  font-weight: 400;
  color: var(--num-color);
  line-height: 1;
}

.hero__tag {
  font-size: 20rpx;
  font-weight: 500;
  letter-spacing: 6rpx;
  color: var(--text-muted);
  text-transform: uppercase;
}

.hero__name {
  font-family: Georgia, "Songti SC", serif;
  font-size: 52rpx;
  font-weight: 400;
  color: var(--text);
  line-height: 1.3;
  display: block;
  margin-bottom: 24rpx;
}

.hero__desc {
  font-size: 26rpx;
  font-weight: 300;
  color: var(--text-light);
  line-height: 1.8;
  display: block;
  margin-bottom: 56rpx;
}

/* 价格 + 按钮 */
.hero__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 64rpx;
  border-bottom: 1rpx solid var(--border);
}

.hero__price-wrap {
  display: flex;
  align-items: baseline;
}

.hero__price {
  font-family: Georgia, "Songti SC", serif;
  font-size: 64rpx;
  color: var(--text);
}

.hero__unit {
  font-size: 24rpx;
  font-weight: 300;
  color: var(--text-muted);
  margin-left: 8rpx;
}

/* 加入购物车按钮（产品1） */
.btn-add {
  height: 96rpx;
  padding: 0 64rpx;
  background: var(--text);
  color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-add text {
  font-size: 22rpx;
  font-weight: 500;
  letter-spacing: 4rpx;
  text-transform: uppercase;
}

.btn-add:active {
  opacity: 0.85;
}

/* ==================== 产品2：横向卡片 ==================== */
.product-alt {
  margin-top: 112rpx;
  padding: 0 56rpx;
}

.alt__num {
  font-family: Georgia, "Songti SC", serif;
  font-size: 96rpx;
  font-weight: 400;
  color: var(--num-color);
  line-height: 1;
  display: block;
  margin-bottom: 40rpx;
}

.alt__card {
  display: flex;
  gap: 40rpx;
  align-items: stretch;
  padding: 48rpx 0;
  border-top: 1rpx solid var(--border);
}

.alt__image {
  width: 240rpx;
  height: 240rpx;
  border-radius: 4rpx;
  flex-shrink: 0;
}

.alt__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
}

.alt__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24rpx;
}

.alt__name {
  font-family: Georgia, "Songti SC", serif;
  font-size: 36rpx;
  color: var(--text);
  line-height: 1.3;
}

.alt__price {
  font-family: Georgia, "Songti SC", serif;
  font-size: 44rpx;
  color: var(--text);
  flex-shrink: 0;
}

.alt__desc {
  font-size: 22rpx;
  font-weight: 300;
  color: var(--text-light);
  line-height: 1.6;
  display: block;
  margin: 16rpx 0;
}

.alt__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.alt__spec {
  font-size: 20rpx;
  color: var(--text-muted);
  letter-spacing: 2rpx;
}

/* 加入购物车按钮（产品2，描边风格） */
.btn-add-sm {
  height: 68rpx;
  padding: 0 40rpx;
  background: transparent;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1rpx solid #DDDDDD;
}

.btn-add-sm text {
  font-size: 20rpx;
  font-weight: 500;
  letter-spacing: 4rpx;
  text-transform: uppercase;
}

.btn-add-sm:active {
  background: var(--text);
  color: var(--bg);
}

/* ==================== 底部安全区 ==================== */
.bottom-safe {
  height: 180rpx;
}
```

- [ ] **步骤 2：微信开发者工具预览**

在工具中确认页面渲染正确：暖白底、衬线标题、大图渐变消融、编号、横向卡片。

- [ ] **步骤 3：Commit**

```bash
git add pages/products/products.wxss
git commit -m "style(products): Aesop式留白样式，暖白底+衬线体+渐变消融"
```

---

### 任务 4：最终验证 + 完整 Commit

**文件：**
- 无新增文件

- [ ] **步骤 1：全页面功能验证**

在微信开发者工具中验证：
1. 产品1 大图正常加载，渐变消融到底色
2. 产品1 编号 01 显示正确
3. 产品1 "加入购物车" 点击后 Toast 提示
4. 产品2 横向卡片布局正常
5. 产品2 编号 02 显示正确
6. 产品2 "加入购物车" 功能正常
7. 点击产品图/名称跳转详情页
8. TabBar 正常显示
9. 无购物车栏（底部浮层已去掉）

- [ ] **步骤 2：Commit 最终版本**

```bash
git add -A
git commit -m "feat(products): 产品页Aesop式留白重新设计完成"
```
