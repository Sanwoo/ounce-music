(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d531a24"],{"0a29":function(t,n,i){},"2d23":function(t,n,i){"use strict";var e=i("0a29"),a=i.n(e);a.a},"30d4":function(t,n,i){"use strict";var e=i("dac1"),a=i.n(e);a.a},"41dc":function(t,n,i){"use strict";var e=i("c105"),a=i.n(e);a.a},"740e":function(t,n,i){},"849b":function(t,n,i){"use strict";i.r(n);var e,a,c=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"dj-square",on:{scroll:t.mainScroll}},[i("BreakHeader",{attrs:{title:"电台广场",color:"#000"}}),i("DjBanner"),t._l(t.categories,(function(n,e){return i("div",{key:e},[t.flags["block"+e]?i("DjRmdList",{attrs:{type:n[0].id,title:n[0].name}}):t._e(),t.flags["block"+e]?i("DjRmdBlock",{attrs:{type:n[1].id,title:n[1].name}}):t._e()],1)}))],2)},s=[],r=(i("fb6a"),i("e439"),i("5377"),i("63ae")),o=i("cb83"),u=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("van-swipe",{staticClass:"dj-square-banner",attrs:{autoplay:3e3}},t._l(t.banner,(function(n,e){return i("van-swipe-item",{key:e},[i("ImgLoader",{staticClass:"_cover",attrs:{src:n.pic+t.imgSize}})],1)})),1)},l=[],d={name:"djsquarebanner",data:function(){return{banner:[],loadflag:!1,imgSize:"?param=800y342"}},mounted:function(){this.mainRequest()},methods:{mainRequest:function(){var t=this;Object(o["a"])().then((function(n){t.banner=n.data.data,t.loadflag=!0}))}}},f=d,m=(i("9cf8"),i("2877")),v=Object(m["a"])(f,u,l,!1,null,"f58d75d4",null),p=v.exports,h=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"dj-rmd-list"},[i("div",{staticClass:"_title"},[i("span",[t._v(" "+t._s(t.title)+" "),i("i",{staticClass:"van-icon van-icon-arrow"})])]),t.loadFlag?i("ul",{staticClass:"_contain"},t._l(t.curList,(function(n,e){return i("li",{key:n.id,on:{click:function(i){return t.toMain(i,n.id)}}},[i("div",{ref:"cover",refInFor:!0,staticClass:"_cover"},[i("img",{directives:[{name:"img-loader",rawName:"v-img-loader"}],attrs:{src:n.picUrl+t.squareImgSize,alt:""}})]),i("div",{staticClass:"_info"},[i("p",{staticClass:"text-truncate"},[t._v(t._s(n.name))]),i("div",[i("img",{attrs:{src:n.dj.avatarUrl+t.squareImgSize,alt:""}}),i("a",[t._v(t._s(n.dj.nickname))]),t._m(0,!0)])]),i("div",{staticClass:"_control",on:{click:function(i){return i.stopPropagation(),t.changeMusic(n,e)}}},[i("span",{staticClass:"fa",class:[t.curMusicId==n.id&&t.curMusicStatus?"fa-pause":"fa-play"]})])])})),0):t._e()])},g=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("span",[i("i",{staticClass:"van-icon van-icon-fire-o"}),t._v(" 102w ")])}],b=(i("d81d"),i("a9e3"),{name:"djrmdlist",props:{type:Number,title:String},data:function(){return{list:[],loadFlag:!1}},computed:{curList:function(){return this.list.slice(0,4)},curMusicId:function(){var t=this.$store.getters.curMusic;return"undefined"===typeof t?0:t.id},curMusicStatus:function(){return this.$store.state.music.status}},mounted:function(){this.mainRequest()},methods:{mainRequest:function(){var t=this;Object(o["f"])(this.type).then((function(n){t.list=n.data.djRadios,t.loadFlag=!0}))},changeMusic:function(t,n){var i=this,e=t.id;if(this.curMusicId===e)return this.$store.commit("musicPlay");Object(o["d"])(e).then((function(t){var n=t.data.programs.map((function(t){return{id:t.mainSong.id}})),a={list:n,id:e,index:0};i.$store.dispatch("changeCurMusic",a)}))},toMain:function(t,n){var i={id:n,cover:t.target.getBoundingClientRect()};this.$router.push({path:"/home/djdetail",query:i})}}}),j=b,_=(i("30d4"),Object(m["a"])(j,h,g,!1,null,"5ddfcf72",null)),k=_.exports,C=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"dj-rmd-block"},[i("div",{staticClass:"_title"},[i("span",[t._v(" "+t._s(t.title)+" "),i("i",{staticClass:"van-icon van-icon-arrow"})])]),i("Scroll",{staticClass:"_contain",attrs:{scrollX:"",bounce:""}},[i("div",{staticClass:"dj-rmd-block__items"},t._l(t.curList,(function(n,e){return i("div",{key:n.id,staticClass:"_contain-item"},[i("div",{ref:"cover",refInFor:!0,staticClass:"_cover",on:{click:function(i){return i.stopPropagation(),t.toMain(i,n.id)}}},[i("img",{directives:[{name:"img-loader",rawName:"v-img-loader"}],attrs:{src:n.picUrl+t.squareImgSize,alt:""}}),i("span",{on:{click:function(i){return t.changeMusic(n,e)}}},[i("i",{staticClass:"fa",class:[t.curMusicId==n.id&&t.curMusicStatus?"fa-pause":"fa-play"]}),t._v(" 9.4w ")])]),i("div",{staticClass:"_info"},[i("p",[t._v(t._s(n.name))]),i("span",[t._v(t._s(n.dj.nickname))])])])})),0)])],1)},y=[],M={name:"djrmdblock",props:{type:Number,title:String},data:function(){return{list:[],loadFlag:!1}},computed:{curList:function(){return this.list.slice(0,8)},curMusicId:function(){var t=this.$store.getters.curMusic;return"undefined"===typeof t?0:t.id},curMusicStatus:function(){return this.$store.state.music.status}},mounted:function(){this.mainRequest()},methods:{mainRequest:function(){var t=this;Object(o["f"])(this.type).then((function(n){t.list=n.data.djRadios,t.loadFlag=!0}))},changeMusic:function(t,n){var i=this,e=t.id;if(this.curMusicId===e)return this.$store.commit("musicPlay");Object(o["d"])(e).then((function(t){var n=t.data.programs.map((function(t){return{id:t.mainSong.id}})),a={list:n,id:e,index:0};i.$store.dispatch("changeCurMusic",a)}))},toMain:function(t,n){var i={id:n,cover:t.target.getBoundingClientRect()};this.$router.push({path:"/home/djdetail",query:i})}}},O=M,S=(i("2d23"),Object(m["a"])(O,C,y,!1,null,"0a777aae",null)),q=S.exports,R=i("c0f2"),w={name:"djsquare",components:{DjBanner:p,DjRmdList:k,DjRmdBlock:q},data:function(){return{block:1,flags:{block1:!0,block2:!1,block3:!1,block4:!1,block5:!1,block6:!1,block7:!1},categories:[]}},mounted:function(){this.mainRequest()},methods:(e=Object(R["c"])(100),a={mainRequest:function(){var t=this;Object(o["e"])().then((function(n){t.categories=t.categoriesFormat(n.data.categories)}))},categoriesFormat:function(t){for(var n=[],i=0;i<t.length;i+=2)n.push(t.slice(i,i+2));return n},mainScroll:function(t){if(7!==this.block){var n=t.target,i=n.scrollTop,e=n.offsetHeight,a=n.scrollHeight;i+e+100>a&&(this.flags["block"+ ++this.block]=!0)}}},Object(r["a"])(a,"mainScroll",[e],Object.getOwnPropertyDescriptor(a,"mainScroll"),a),a)},$=w,I=(i("41dc"),Object(m["a"])($,c,s,!1,null,"69be536d",null));n["default"]=I.exports},"9cf8":function(t,n,i){"use strict";var e=i("740e"),a=i.n(e);a.a},c105:function(t,n,i){},cb83:function(t,n,i){"use strict";i.d(n,"a",(function(){return a})),i.d(n,"f",(function(){return c})),i.d(n,"e",(function(){return s})),i.d(n,"d",(function(){return r})),i.d(n,"c",(function(){return o})),i.d(n,"b",(function(){return u}));i("99af");var e=i("f344");function a(){return Object(e["a"])("dj/banner")}function c(t){return Object(e["a"])("dj/recommend/type?type=".concat(t))}function s(){return Object(e["a"])("dj/catelist")}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return Object(e["a"])("dj/program?rid=".concat(t,"&limit=").concat(n))}function o(t){return Object(e["a"])("dj/detail?rid=".concat(t))}function u(t){return Object(e["a"])("comment/dj?id=".concat(t))}},dac1:function(t,n,i){}}]);