
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/index/index","pages/tabbar/category/category","pages/tabbar/user/user","pages/tabbar/cart/cart"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#fff"},"tabBar":{"color":"#333333","selectedColor":"#e0747c","borderStyle":"black","backgroundColor":"#fff","list":[{"text":"首页","pagePath":"pages/tabbar/index/index","iconPath":"static/img/tabBar/home.png","selectedIconPath":"static/img/tabBar/home-on.png"},{"text":"分类","pagePath":"pages/tabbar/category/category","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png"},{"text":"购物车","pagePath":"pages/tabbar/cart/cart","iconPath":"static/img/tabBar/cart.png","selectedIconPath":"static/img/tabBar/cart-on.png"},{"text":"我的","pagePath":"pages/tabbar/user/user","iconPath":"static/img/tabBar/user.png","selectedIconPath":"static/img/tabBar/user-on.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-mall","compilerVersion":"3.1.22","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城","titleNView":false,"bounce":"none"}},{"path":"/pages/tabbar/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":false}},{"path":"/pages/tabbar/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false}},{"path":"/pages/tabbar/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
