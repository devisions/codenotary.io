(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{464:function(t,e,r){var content=r(469);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("dffcb380",content,!0,{sourceMap:!1})},466:function(t,e,r){"use strict";r.r(e);var n={props:{path:{type:String,default:""},domain:{type:String,default:"wp.codenotary.io"}},computed:{url:function(){return"https://".concat(this.domain,"/").concat(this.path)}},methods:{onLoad:function(){}}},o=(r(468),r(0)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{ref:"iframe",staticClass:"wordpress-iframe",attrs:{title:"CodeNotary",src:this.url,width:"400",height:"600"},on:{load:this.onLoad}})}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,r){"use strict";var n=r(464);r.n(n).a},469:function(t,e,r){(e=r(2)(!1)).push([t.i,".wordpress-iframe{margin-top:-80px;border:0;width:100%;height:100vh}",""]),t.exports=e},470:function(t,e,r){"use strict";r.d(e,"a",(function(){return title}));var title=function(t){return"".concat(t," - CodeNotary")}},568:function(t,e,r){"use strict";r.r(e);var meta=r(470),n={head:function(){return{title:Object(meta.a)("Careers")}},layout:"iframe",components:{WordpressIframe:r(466).default}},o=r(0),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("wordpress-iframe",{attrs:{path:"career"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WordpressIframe:r(466).default})}}]);