export default {
    product: '/product/pagination',     //商品分页与搜索
    productInfo: '/product',            //商品详情
    login: '/user/signin',              //用户登录
    userInfo: '/user/info',             //获取用户信息对象
    like: '/product_like/create',       //收藏
    concelLike: '/product_like/delete', //取消收藏
    cart: '/cart/all',                  //获取购物车
    addone: '/cart/update',             //单个商品更新购物车（加入购物车）
    delet: '/cart/delete',              //删除购物车商品
    area: '/data/area',                 //获取带地区编码的省份城市区县列表
    updateAddr: '/user_address/update', //修改用户收货地址
    addAddr: '/user_address/create',    //新增用户收货地址
    deleteAddr: '/user_address/delete', //删除用户收货地址
}