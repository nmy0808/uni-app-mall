(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goodOrder-goodOrder"],{"00ff":function(t,e,i){var r=i("9d6a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("af1df478",r,!0,{sourceMap:!1,shadowMode:!1})},"1a19":function(t,e,i){"use strict";i.r(e);var r=i("6620"),o=i("a870");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("7932");var n,s=i("f0c5"),d=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"6115fe8f",null,!1,r["a"],n);e["default"]=d.exports},"34d4":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("comOrderList",{attrs:{data:t.order}})],1)},a=[]},"441d":function(t,e,i){"use strict";i.r(e);var r=i("c802"),o=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},6620:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"comOrderList"},[i("v-uni-view",{staticClass:"comOrderList-top"},t._l(t.data,(function(e,r){return i("v-uni-view",{key:r,staticClass:"comOrderList-top-item"},[i("v-uni-image",{staticClass:"comOrderList-top-item-img",attrs:{src:e.img}}),i("v-uni-view",{staticClass:"comOrderList-top-item-info"},[i("v-uni-view",{staticClass:"comOrderList-top-item-info-title"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"comOrderList-top-item-info-spec"},[t._v("选择:"+t._s(e.spec)+" 数量:"+t._s(e.number))]),i("v-uni-view",{staticClass:"comOrderList-top-item-info-price"},[t._v("¥"+t._s(t._f("toFixed")(e.price)))])],1)],1)})),1),i("v-uni-view",{staticClass:"comOrderList-middle"},[i("v-uni-view",{staticClass:"comOrderList-middle-item"},[i("v-uni-view",{staticClass:"comOrderList-middle-item-label"},[t._v("商品金额")]),i("v-uni-view",{staticClass:"comOrderList-middle-item-value"},[t._v(t._s(t._f("toFixed")(t.calcTotalPrice)))])],1),i("v-uni-view",{staticClass:"comOrderList-middle-item"},[i("v-uni-view",{staticClass:"comOrderList-middle-item-label"},[t._v("运费")]),i("v-uni-view",{staticClass:"comOrderList-middle-item-value"},[t._v(t._s(t._f("toFixed")(t.freight)))])],1)],1),i("v-uni-view",{staticClass:"comOrderList-bottom"},[i("v-uni-view",{staticClass:"comOrderList-bottom-box"},[i("v-uni-view",{staticClass:"comOrderList-bottom-box-totalPrice"},[t._v("合计 (含运费):"),i("v-uni-text",{staticClass:"comOrderList-bottom-box-totalPrice-red"},[t._v("¥"+t._s(t._f("toFixed")(t.calcTotalPriceAndFreight)))])],1),i("v-uni-button",{staticClass:"comOrderList-bottom-box-btn"},[t._v("提交订单")])],1)],1)],1)},a=[]},7932:function(t,e,i){"use strict";var r=i("00ff"),o=i.n(r);o.a},"962b":function(t,e,i){"use strict";i("4160"),i("b680"),i("acd8"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"comOrderList",filters:{toFixed:function(t){return parseFloat(t).toFixed(2)}},props:{data:Array},data:function(){return{freight:12}},computed:{calcTotalPrice:function(){var t=0;return this.data.forEach((function(e){return t+=e.price*e.number})),t},calcTotalPriceAndFreight:function(){var t=0;return this.data.forEach((function(e){return t+=e.price*e.number})),t+this.freight}},methods:{}};e.default=r},"9d6a":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-6115fe8f]{padding-bottom:60px}.comOrderList[data-v-6115fe8f]{width:%?690?%;margin:0 auto}.comOrderList-top[data-v-6115fe8f]{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?20?%;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);padding:1em}.comOrderList-top-item[data-v-6115fe8f]{width:98%;height:%?200?%;margin:0 atuo;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comOrderList-top-item-img[data-v-6115fe8f]{width:%?160?%;height:%?160?%;border-radius:6px}.comOrderList-top-item-info[data-v-6115fe8f]{width:%?460?%;height:%?150?%;margin:%?15?%}.comOrderList-top-item-info-title[data-v-6115fe8f]{font-size:%?26?%}.comOrderList-top-item-info-spec[data-v-6115fe8f]{margin:2px 0;font-size:%?18?%;color:#bdbdbd;background:#f1f1f1;display:inline-block;padding:.5px 8px;border-radius:10px}.comOrderList-top-item-info-price[data-v-6115fe8f]{font-size:%?26?%;color:#e66071;font-weight:700}.comOrderList-middle[data-v-6115fe8f]{width:%?690?%;margin:0 auto;margin-top:20px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?20?%;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-sizing:border-box;padding:1em}.comOrderList-middle-item[data-v-6115fe8f]{width:100%;height:%?40?%;line-height:%?40?%;margin:10px 0;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.comOrderList-middle-item-value[data-v-6115fe8f]{font-weight:700;color:#e66575}.comOrderList-bottom[data-v-6115fe8f]{height:50px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;bottom:0;left:0;right:0;background:#fafafa;padding:0 1em;-webkit-box-sizing:border-box;box-sizing:border-box}.comOrderList-bottom-box[data-v-6115fe8f]{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comOrderList-bottom-box-totalPrice[data-v-6115fe8f]{font-size:%?20?%;margin-left:auto}.comOrderList-bottom-box-totalPrice-red[data-v-6115fe8f]{font-size:%?28?%;color:#db5a6c;margin-left:3px;font-weight:700}.comOrderList-bottom-box-btn[data-v-6115fe8f]{margin-left:1em;height:30px;background:#e66071;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#fff;font-size:%?29?%;border-radius:20px}',""]),t.exports=e},a346:function(t,e,i){"use strict";i.r(e);var r=i("34d4"),o=i("441d");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var n,s=i("f0c5"),d=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"41ea3ab8",null,!1,r["a"],n);e["default"]=d.exports},a870:function(t,e,i){"use strict";i.r(e);var r=i("962b"),o=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},c802:function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("1a19")),a={components:{comOrderList:o.default},data:function(){return{order:[]}},onShow:function(){this.order=uni.getStorageSync("order"),console.log(this.order)},onBackPress:function(){uni.setStorageSync("order",[])}};e.default=a}}]);