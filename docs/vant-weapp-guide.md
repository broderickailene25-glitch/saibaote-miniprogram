# Vant Weapp 使用规范

> 赛宝特小程序 UI 组件库使用指南 | 2026-06-23 创建

---

## 一、为什么引入 Vant Weapp

| 之前 | 现在 |
|------|------|
| 全手写 WXML/WXSS | 基础交互组件用 Vant，视觉样式手写覆盖 |
| 每个组件从零开发 | 购物车/表单/弹出层等复用 Vant 成熟组件 |
| 维护成本高 | Vant 有赞团队维护，1.83 万星，70+ 组件 |

---

## 二、使用原则

### ✅ 用 Vant 的场景

| 场景 | 推荐组件 | 说明 |
|------|---------|------|
| **数量选择** | `van-stepper` | 购物车加减、商品数量选择 |
| **弹出层** | `van-popup` | 购物车面板、规格选择、地址选择 |
| **底部操作栏** | `van-submit-bar` | 结算栏、购物车底部 |
| **按钮** | `van-button` | 通用按钮（需覆盖样式） |
| **步进器** | `van-stepper` | 数量增减 |
| **复选框** | `van-checkbox` | 多选操作 |
| **单选框** | `van-radio` | 单选操作 |
| **输入框** | `van-field` | 表单输入 |
| **地址选择** | `van-area` | 省市区选择 |
| **对话框** | `van-dialog` | 确认操作提示 |
| **轻提示** | `van-toast` | 操作反馈提示 |
| **空状态** | `van-empty` | 无数据/无订单等 |
| **分割线** | `van-divider` | 内容分隔 |

### ❌ 不用 Vant 的场景

| 场景 | 原因 |
|------|------|
| **产品卡片** | 赛宝特自定义设计，原研哉风格，Vant 卡片风格不匹配 |
| **导航栏/TabBar** | 已有自定义组件 `custom-tabbar` |
| **轮播图** | 产品页已有自定义轮播逻辑 |
| **品牌展示类** | 需要定制视觉，不用通用组件 |

---

## 三、按需引入配置

### 3.1 构建 npm

安装完成后，需在**微信开发者工具**中构建 npm：

1. 打开微信开发者工具
2. 菜单 → 工具 → 构建 npm
3. 等待构建完成，生成 `miniprogram_npm/` 目录

### 3.2 页面级引入（推荐）

在页面的 `json` 文件中按需引入：

```json
// pages/cart/cart.json
{
  "usingComponents": {
    "van-stepper": "@vant/weapp/stepper/index",
    "van-popup": "@vant/weapp/popup/index",
    "van-submit-bar": "@vant/weapp/submit-bar/index",
    "van-checkbox": "@vant/weapp/checkbox/index",
    "van-empty": "@vant/weapp/empty/index"
  }
}
```

### 3.3 全局引入（仅限高频组件）

在 `app.json` 中引入常用组件：

```json
{
  "usingComponents": {
    "van-toast": "@vant/weapp/toast/index",
    "van-dialog": "@vant/weapp/dialog/index",
    "van-notify": "@vant/weapp/notify/index"
  }
}
```

---

## 四、样式覆盖规则

Vant 默认风格与赛宝特原研哉极简风不完全一致，需要覆盖：

### 4.1 覆盖原则

| 原则 | 说明 |
|------|------|
| **CSS 变量覆盖优先** | Vant 支持 CSS 变量，优先用变量覆盖 |
| **保留功能，改视觉** | 不改组件逻辑，只改颜色/圆角/字重 |
| **统一风格** | 所有 Vant 组件覆盖后必须看起来像同一家产品 |

### 4.2 赛宝特风格覆盖

在页面 WXSS 中覆盖 Vant CSS 变量：

```css
/* 赛宝特原研哉风格覆盖 */
page {
  --button-primary-background-color: #1A1A1A;
  --button-primary-border-color: #1A1A1A;
  --button-border-radius: 16rpx;
  --button-default-font-weight: 400;
  --submit-bar-background: #FFFFFF;
  --submit-bar-button-color: #1A1A1A;
  --stepper-background: #F5F5F5;
  --stepper-button-icon-color: #1A1A1A;
  --popup-background-color: #FFFFFF;
  --checkbox-checked-icon-color: #1A1A1A;
}
```

### 4.3 禁止事项

- ❌ 不用 Vant 默认的蓝色主题
- ❌ 不用 Vant 的图标库（保持无图标极简风）
- ❌ 不改 Vant 组件源码（只做样式覆盖）

---

## 五、版本管理

| 项目 | 说明 |
|------|------|
| **当前版本** | @vant/weapp（安装时最新版） |
| **升级方式** | `npm update @vant/weapp` |
| **升级检查** | 升级前在开发环境测试所有使用的组件 |

---

## 六、组件使用记录

> 随着页面开发逐步记录，每次使用新组件时更新此表。

| 组件 | 使用页面 | 引入方式 | 备注 |
|------|---------|---------|------|
| （待开发） | — | — | — |
