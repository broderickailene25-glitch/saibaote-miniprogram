const COS_BASE = 'https://saibaote-images-1410640865.cos.ap-guangzhou.myqcloud.com'

function cosUrl(path) {
  return `${COS_BASE}/${path}`
}

const COS_ASSETS = {
  heroProduct: cosUrl('branding/home/hero-product.jpg'),
  heroProduct2: cosUrl('branding/home/hero-product-2.jpg'),
  brandCardLeft: cosUrl('branding/products/brand-card-left.jpg'),
  brandCardRight: cosUrl('branding/products/brand-card-right.jpg')
}

module.exports = {
  COS_BASE,
  cosUrl,
  COS_ASSETS
}
