(function(t){function e(e){for(var r,u,i=e[0],o=e[1],s=e[2],f=0,l=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&l.push(c[u][0]),c[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);b&&b(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var b=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"177c":function(t,e,n){"use strict";n("80be")},"2d53":function(t,e,n){},"326b":function(t,e,n){"use strict";n("736a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"app",class:"fillcontain"};function a(t,e,n,a,u,i){var o=Object(r["Q"])("router-view");return Object(r["H"])(),Object(r["m"])("div",c,[Object(r["q"])(o)])}var u={name:"App",components:{}},i=(n("5cd9"),n("6b0d")),o=n.n(i);const s=o()(u,[["render",a]]);var b=s,f=n("6c02"),l={class:"home"},d={id:"home_content"},j={id:"home_news"},O={id:"home_other"};function m(t,e,n,c,a,u){var i=Object(r["Q"])("Nav"),o=Object(r["Q"])("banner"),s=Object(r["Q"])("News"),b=Object(r["Q"])("el-col"),f=Object(r["Q"])("Twitter"),m=Object(r["Q"])("el-row"),p=Object(r["Q"])("Divider"),h=Object(r["Q"])("Games");return Object(r["H"])(),Object(r["m"])("div",l,[Object(r["q"])(i),Object(r["q"])(o),Object(r["n"])("div",d,[Object(r["q"])(m,{gutter:20},{default:Object(r["fb"])((function(){return[Object(r["q"])(b,{span:16},{default:Object(r["fb"])((function(){return[Object(r["n"])("div",j,[Object(r["q"])(s)])]})),_:1}),Object(r["q"])(b,{span:8},{default:Object(r["fb"])((function(){return[Object(r["n"])("div",O,[Object(r["q"])(f)])]})),_:1})]})),_:1}),Object(r["n"])("div",null,[Object(r["q"])(p),Object(r["q"])(h)])])])}var p=function(t){return Object(r["K"])("data-v-2c737005"),t=t(),Object(r["I"])(),t},h={id:"nav"},v=p((function(){return Object(r["n"])("i",{class:"el-icon-house"}," Home",-1)})),g=p((function(){return Object(r["n"])("i",{class:"el-icon-news"}," News",-1)})),w=p((function(){return Object(r["n"])("i",{class:"el-icon-s-platform"}," 作品一覧",-1)})),_=p((function(){return Object(r["n"])("i",{class:"el-icon-chat-round"}," Blog",-1)}));function q(t,e,n,c,a,u){var i=Object(r["Q"])("el-menu-item"),o=Object(r["Q"])("el-col"),s=Object(r["Q"])("el-row"),b=Object(r["Q"])("el-menu"),f=Object(r["Q"])("el-affix");return Object(r["H"])(),Object(r["m"])("div",h,[Object(r["q"])(f,null,{default:Object(r["fb"])((function(){return[Object(r["q"])(b,{class:"el-menu-demo",mode:"horizontal","text-color":"#919398","active-text-color":"#919398","default-active":u.defaultActive,router:!0},{default:Object(r["fb"])((function(){return[Object(r["q"])(s,{type:"flex",class:"row-bg",justify:"space-around"},{default:Object(r["fb"])((function(){return[Object(r["q"])(o,{span:4},{default:Object(r["fb"])((function(){return[Object(r["q"])(i,{index:"home"},{default:Object(r["fb"])((function(){return[v]})),_:1})]})),_:1}),Object(r["q"])(o,{span:4},{default:Object(r["fb"])((function(){return[Object(r["q"])(i,{index:"newslist"},{default:Object(r["fb"])((function(){return[g]})),_:1})]})),_:1}),Object(r["q"])(o,{span:4},{default:Object(r["fb"])((function(){return[Object(r["q"])(i,{index:"gamelist"},{default:Object(r["fb"])((function(){return[w]})),_:1})]})),_:1}),Object(r["q"])(o,{span:4},{default:Object(r["fb"])((function(){return[Object(r["n"])("div",null,[Object(r["q"])(i,{index:"blog"},{default:Object(r["fb"])((function(){return[_]})),_:1})])]})),_:1}),Object(r["q"])(o,{span:4},{default:Object(r["fb"])((function(){return[Object(r["q"])(i,null,{default:Object(r["fb"])((function(){return[Object(r["n"])("i",{class:"el-icon-link",onClick:e[0]||(e[0]=function(){return u.goTwitter&&u.goTwitter.apply(u,arguments)})}," Twitter")]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["default-active"])]})),_:1})])}n("ac1f"),n("5319");var y={name:"Nav",data:function(){return{}},computed:{defaultActive:function(){return this.$route.path.replace("/","")}},methods:{goTwitter:function(){window.location.href="https://twitter.com/hcunovelgame"}}};n("9779");const Q=o()(y,[["render",q],["__scopeId","data-v-2c737005"]]);var L=Q,x={id:"banner"};function H(t,e,n,c,a,u){var i=Object(r["Q"])("el-image"),o=Object(r["Q"])("el-carousel-item"),s=Object(r["Q"])("el-carousel");return Object(r["H"])(),Object(r["m"])("div",x,[Object(r["q"])(s,{interval:4e3,type:"card","indicator-position":"none"},{default:Object(r["fb"])((function(){return[(Object(r["H"])(!0),Object(r["m"])(r["b"],null,Object(r["O"])(t.imgList,(function(e){return Object(r["H"])(),Object(r["k"])(o,{key:e},{default:Object(r["fb"])((function(){return[Object(r["q"])(i,{src:t.hpImgPath+e,style:{height:"100%"}},null,8,["src"])]})),_:2},1024)})),128))]})),_:1})])}var k=n("1da1"),N=(n("96cf"),n("159b"),n("d3b7"),n("bc3a")),P=n.n(N),R=n("4328"),T=n.n(R),I="https://47.101.190.44:443";function D(t){return!t||200!==t.status&&304!==t.status&&400!==t.status?{status:-404,msg:"网络异常"}:t}function M(t){return-404===t.status&&console.log(t.msg),t.data&&t.data.success,t}P.a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),P.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t.response)}));var S={post:function(t,e){return P()({method:"post",baseURL:I,url:t,data:JSON.stringify(e),timeout:1e4,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then((function(t){return D(t)})).then((function(t){return M(t)}))},post_with_headers:function(t,e,n){return P()({method:"post",baseURL:I,url:t,data:T.a.stringify(e),timeout:1e4,headers:n}).then((function(t){return D(t)})).then((function(t){return M(t)}))},get:function(t,e){return P()({method:"get",baseURL:I,url:t,params:e,timeout:1e4,headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(t){return D(t)})).then((function(t){return M(t)}))},get_with_headers:function(t,e,n){return P()({method:"get",baseURL:I,url:t,params:e,timeout:1e4,headers:n}).then((function(t){return D(t)})).then((function(t){return M(t)}))}},U="https://47.101.190.44:443/hp",G=function(){return S.get("/hp/banner")},B=function(){return S.get("/hp/games")},E=function(){return S.get("/hp/news")},A={name:"Banner",data:function(){return{hpImgPath:U,imgList:["https://media.discordapp.net/attachments/780030015261245480/825704696169758750/image0.jpg?width=1474&height=936","https://media.discordapp.net/attachments/780030015261245480/825704696169758750/image0.jpg?width=1474&height=936","https://media.discordapp.net/attachments/780030015261245480/825704696169758750/image0.jpg?width=1474&height=936"]}},methods:{initData:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:n=e.sent,t.imgList=[],console.log("banner::",n),200===n.status&&(n.data.imgList.forEach((function(e){t.imgList.push(e)})),console.log("img:::",t.imgList));case 6:case"end":return e.stop()}}),e)})))()}},created:function(){this.initData()}};n("faa7");const X=o()(A,[["render",H],["__scopeId","data-v-4012b768"]]);var J=X,z=Object(r["n"])("a",{class:"twitter-timeline","data-height":"1000","data-theme":"light",href:"https://twitter.com/hcunovelgame?ref_src=twsrc%5Etfw"},"Tweets by hcunovelgame",-1),C=[z];function W(t,e,n,c,a,u){return Object(r["H"])(),Object(r["m"])("div",null,C)}var F={name:"Twitter",components:{}};const K=o()(F,[["render",W]]);var $=K,V={class:"block"};function Y(t,e,n,c,a,u){var i=Object(r["Q"])("el-image"),o=Object(r["Q"])("el-col"),s=Object(r["Q"])("el-row"),b=Object(r["Q"])("el-card"),f=Object(r["Q"])("el-timeline-item"),l=Object(r["Q"])("el-timeline");return Object(r["H"])(),Object(r["m"])("div",V,[Object(r["q"])(l,null,{default:Object(r["fb"])((function(){return[(Object(r["H"])(!0),Object(r["m"])(r["b"],null,Object(r["O"])(t.newsList,(function(e){return Object(r["H"])(),Object(r["k"])(f,{key:e,timestamp:e.time,placement:"top",size:"large"},{default:Object(r["fb"])((function(){return[Object(r["q"])(b,null,{default:Object(r["fb"])((function(){return[Object(r["q"])(s,{gutter:100},{default:Object(r["fb"])((function(){return[Object(r["q"])(o,{span:4},{default:Object(r["fb"])((function(){return[Object(r["q"])(i,{style:{width:"100px",height:"100px"},src:t.hpImgPath+e.img,fit:"cover"},null,8,["src"])]})),_:2},1024),Object(r["q"])(o,{span:20},{default:Object(r["fb"])((function(){return[Object(r["n"])("h4",null,Object(r["U"])(e.title),1),Object(r["n"])("p",null,Object(r["U"])(e.contents),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:2},1032,["timestamp"])})),128))]})),_:1})])}var Z={name:"News",data:function(){return{hpImgPath:U,newsList:[]}},methods:{initData:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.newsList=[],e.next=3,E();case 3:n=e.sent,200===n.status&&(console.log(n),n.data.forEach((function(e){t.newsList.push(e)})),console.log(t.newsList));case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.initData()}};n("6d27");const tt=o()(Z,[["render",Y],["__scopeId","data-v-061ea816"]]);var et=tt,nt=Object(r["n"])("h2",null,"作品情報",-1);function rt(t,e,n,c,a,u){var i=Object(r["Q"])("el-divider");return Object(r["H"])(),Object(r["m"])("div",null,[Object(r["q"])(i,null,{default:Object(r["fb"])((function(){return[nt]})),_:1})])}var ct={name:"Divider"};const at=o()(ct,[["render",rt]]);var ut=at,it=["href"];function ot(t,e,n,c,a,u){var i=Object(r["Q"])("el-image"),o=Object(r["Q"])("el-card"),s=Object(r["Q"])("el-col"),b=Object(r["Q"])("el-row");return Object(r["H"])(),Object(r["k"])(b,null,{default:Object(r["fb"])((function(){return[(Object(r["H"])(!0),Object(r["m"])(r["b"],null,Object(r["O"])(t.gamesList,(function(e,n){return Object(r["H"])(),Object(r["k"])(s,{span:4,key:e,offset:n>0?2:0},{default:Object(r["fb"])((function(){return[Object(r["q"])(o,{"body-style":{padding:"0px"},shadow:"always"},{default:Object(r["fb"])((function(){return[Object(r["n"])("a",{href:e.url},[Object(r["q"])(i,{src:t.hpImgPath+e.head_img,fit:t.cover,class:"image"},null,8,["src","fit"])],8,it)]})),_:2},1024)]})),_:2},1032,["offset"])})),128))]})),_:1})}var st={name:"Games",data:function(){return{hpImgPath:U,gamesList:[]}},methods:{initData:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:n=e.sent,t.gamesList=[],200===n.status&&(n.data.forEach((function(e){t.gamesList.push(e)})),console.log("GAMES::",n));case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.initData()}};n("326b");const bt=o()(st,[["render",ot],["__scopeId","data-v-5ad73286"]]);var ft=bt,lt={name:"Home",components:{Games:ft,Divider:ut,News:et,Twitter:$,Banner:J,Nav:L}};n("177c");const dt=o()(lt,[["render",m]]);var jt=dt,Ot=Object(r["p"])(" 工事中 ");function mt(t,e,n,c,a,u){var i=Object(r["Q"])("Nav");return Object(r["H"])(),Object(r["m"])("div",null,[Object(r["q"])(i),Ot])}var pt={name:"Blog",components:{Nav:L}};const ht=o()(pt,[["render",mt]]);var vt=ht,gt=Object(r["p"])(" 工事中 ");function wt(t,e,n,c,a,u){var i=Object(r["Q"])("Nav");return Object(r["H"])(),Object(r["m"])("div",null,[Object(r["q"])(i),gt])}var _t={name:"GameList",components:{Nav:L}};const qt=o()(_t,[["render",wt]]);var yt=qt,Qt=Object(r["p"])(" 工事中 ");function Lt(t,e,n,c,a,u){var i=Object(r["Q"])("Nav");return Object(r["H"])(),Object(r["m"])("div",null,[Object(r["q"])(i),Qt])}var xt={name:"NewsList",components:{Nav:L}};const Ht=o()(xt,[["render",Lt]]);var kt=Ht,Nt=[{path:"/",name:"Home",component:jt},{path:"/home",redirect:"/"},{path:"/blog",name:"Blog",component:vt},{path:"/gamelist",name:"GameList",component:yt},{path:"/newslist",name:"NewsList",component:kt}],Pt=Object(f["a"])({history:Object(f["b"])(),routes:Nt}),Rt=Pt,Tt=n("7864"),It=(n("7dd6"),Object(r["j"])(b));It.use(Rt).mount("#app"),It.use(Tt["a"])},"5cd9":function(t,e,n){"use strict";n("a54d")},"618b":function(t,e,n){},"6d27":function(t,e,n){"use strict";n("618b")},"736a":function(t,e,n){},"80be":function(t,e,n){},"83e1":function(t,e,n){},9779:function(t,e,n){"use strict";n("83e1")},a54d:function(t,e,n){},faa7:function(t,e,n){"use strict";n("2d53")}});
//# sourceMappingURL=app.5614ef92.js.map