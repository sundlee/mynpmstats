(function(t){function e(e){for(var s,o,c=e[0],i=e[1],d=e[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/mynpmstats/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f7":function(t,e,a){},"1e47":function(t,e,a){"use strict";var s=a("29f5"),n=a.n(s);n.a},"29f5":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"53d7":function(t,e,a){"use strict";var s=a("01f7"),n=a.n(s);n.a},5452:function(t,e,a){"use strict";var s=a("af35"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var s,n,r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("my-header"),a("router-view",{key:t.$route.path}),a("my-footer")],1)},c=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Header"},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"Header__logo"},[t._v(" my-npm-stats ")])])],1)},d=[],l={},u=l,f=(a("5452"),a("2877")),h=Object(f["a"])(u,i,d,!1,null,null,null),p=h.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("span",[t._v(" Build with "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" and "),a("a",{attrs:{href:"http://vue-chartjs.org/#/"}},[t._v("vue-chartjs")])]),a("span",[t._v("Made by "),a("a",{attrs:{href:"https://github.com/apertureless/npm-stats"}},[t._v("apertureless")])])])}],j={},v=j,g=(a("53d7"),Object(f["a"])(v,b,m,!1,null,null,null)),k=g.exports,_={components:{MyHeader:p,MyFooter:k},name:"app"},w=_,y=(a("5c0b"),Object(f["a"])(w,o,c,!1,null,null,null)),C=y.exports,D=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"Search__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtedPackage,expression:"inputtedPackage"}],staticClass:"Search__input",attrs:{placeholder:"npm package name",type:"search",name:"search"},domProps:{value:t.inputtedPackage},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.requestData(e)},input:function(e){e.target.composing||(t.inputtedPackage=e.target.value)}}}),a("button",{staticClass:"Search__button",on:{click:t.requestData}},[t._v("Find")]),a("span",{staticClass:"Search__icon",on:{click:function(e){return t.toggleSettings()}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 54 54","enable-background":"new 0 0 54 54"}},[a("path",{attrs:{d:"M51.22 21h-5.052c-.812 0-1.481-.447-1.792-1.197s-.153-1.54.42-2.114l3.572-3.571c.525-.525.814-1.224.814-1.966 0-.743-.289-1.441-.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933 0l-3.571 3.571c-.574.573-1.366.733-2.114.421-.75-.311-1.197-.98-1.197-1.792v-5.052c0-1.533-1.247-2.78-2.78-2.78h-6.44c-1.533 0-2.78 1.247-2.78 2.78v5.052c0 .812-.447 1.481-1.197 1.792-.748.313-1.54.152-2.114-.421l-3.571-3.571c-1.052-1.052-2.883-1.05-3.933 0l-4.553 4.553c-.525.525-.814 1.224-.814 1.967 0 .742.289 1.44.814 1.966l3.572 3.571c.573.574.73 1.364.42 2.114s-.98 1.197-1.792 1.197h-5.052c-1.533 0-2.78 1.247-2.78 2.78v6.439c0 1.534 1.247 2.781 2.78 2.781h5.052c.812 0 1.481.447 1.792 1.197s.153 1.54-.42 2.114l-3.572 3.571c-.525.525-.814 1.224-.814 1.966 0 .743.289 1.441.814 1.967l4.553 4.553c1.051 1.051 2.881 1.053 3.933 0l3.571-3.572c.574-.573 1.363-.731 2.114-.42.75.311 1.197.98 1.197 1.792v5.052c0 1.533 1.247 2.78 2.78 2.78h6.439c1.533 0 2.78-1.247 2.78-2.78v-5.052c0-.812.447-1.481 1.197-1.792.751-.312 1.54-.153 2.114.42l3.571 3.572c1.052 1.052 2.883 1.05 3.933 0l4.553-4.553c.525-.525.814-1.224.814-1.967 0-.742-.289-1.44-.814-1.966l-3.572-3.571c-.573-.574-.73-1.364-.42-2.114s.981-1.197 1.793-1.197h5.052c1.533 0 2.78-1.247 2.78-2.78v-6.44c0-1.533-1.247-2.78-2.78-2.78zm.78 9.22c0 .43-.35.78-.78.78h-5.052c-1.624 0-3.019.932-3.64 2.432-.622 1.5-.295 3.146.854 4.294l3.572 3.571c.305.305.305.8 0 1.104l-4.553 4.553c-.304.304-.799.306-1.104 0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-.854-1.5.621-2.432 2.016-2.432 3.64v5.052c0 .43-.35.78-.78.78h-6.44c-.43 0-.78-.35-.78-.78v-5.052c0-1.624-.932-3.019-2.432-3.64-.503-.209-1.021-.311-1.533-.311-1.014 0-1.997.4-2.761 1.164l-3.571 3.572c-.306.306-.801.304-1.104 0l-4.553-4.553c-.305-.305-.305-.8 0-1.104l3.572-3.571c1.148-1.148 1.476-2.794.854-4.294-.621-1.499-2.016-2.431-3.64-2.431h-5.052c-.43 0-.78-.35-.78-.78v-6.44c0-.43.35-.78.78-.78h5.052c1.624 0 3.019-.932 3.64-2.432.622-1.5.295-3.146-.854-4.294l-3.572-3.571c-.305-.305-.305-.8 0-1.104l4.553-4.553c.304-.305.799-.305 1.104 0l3.571 3.571c1.147 1.147 2.792 1.476 4.294.854 1.5-.62 2.432-2.015 2.432-3.639v-5.052c0-.43.35-.78.78-.78h6.439c.431 0 .781.35.781.78v5.052c0 1.624.932 3.019 2.432 3.64 1.502.622 3.146.294 4.294-.854l3.571-3.571c.306-.305.801-.305 1.104 0l4.553 4.553c.305.305.305.8 0 1.104l-3.572 3.571c-1.148 1.148-1.476 2.794-.854 4.294.621 1.5 2.016 2.432 3.64 2.432h5.052c.43-.001.78.349.78.779v6.44zM27 18c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z"}})])])]),t.showSettings?a("div",{staticClass:"Search__settings"},[a("datepicker",{attrs:{"input-class":"Search__input",placeholder:"Start Date",name:"start-date"},on:{selected:function(e){return t.validateDataRequest()}},model:{value:t.periodStart,callback:function(e){t.periodStart=e},expression:"periodStart"}}),a("datepicker",{attrs:{"input-class":"Search__input",placeholder:"End Date",name:"end-date"},on:{selected:function(e){return t.validateDataRequest()}},model:{value:t.periodEnd,callback:function(e){t.periodEnd=e},expression:"periodEnd"}})],1):t._e(),t.showError?a("div",{staticClass:"error-message"},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e(),a("hr"),t.loading?a("div",{staticClass:"loading"},[t._v(" � Building Charts ... "),t._m(0)]):t._e(),t.loaded?a("package-info",{attrs:{"package-name":t.packageName,"total-downloads":t.totalDownloads,period:t.formattedPeriod}}):t._e(),t.loaded?a("div",{staticClass:"Chart__container"},[a("div",{staticClass:"Chart__title"},[t._v(" Downloads per Day "),a("span",[t._v(t._s(t.formattedPeriod))]),a("hr")]),a("div",{staticClass:"Chart__content"},[t.loaded?a("line-chart",{attrs:{"chart-data":t.downloads,"chart-labels":t.labels}}):t._e()],1)]):t._e(),t.loaded?a("div",{staticClass:"Chart__container"},[a("div",{staticClass:"Chart__title"},[t._v(" Downloads per Week "),a("span",[t._v(t._s(t.formattedPeriod))]),a("hr")]),a("div",{staticClass:"Chart__content"},[t.loaded?a("line-chart",{attrs:{"chart-data":t.downloadsWeek,"chart-labels":t.labelsWeek}}):t._e()],1)]):t._e(),t.loaded?a("div",{staticClass:"Chart__container"},[a("div",{staticClass:"Chart__title"},[t._v(" Downloads per Month "),a("span",[t._v(t._s(t.formattedPeriod))]),a("hr")]),a("div",{staticClass:"Chart__content"},[t.loaded?a("line-chart",{attrs:{"chart-data":t.downloadsMonth,"chart-labels":t.labelsMonth}}):t._e()],1)]):t._e(),t.loaded?a("div",{staticClass:"Chart__container"},[a("div",{staticClass:"Chart__title"},[t._v(" Downloads per Year "),a("span",[t._v(t._s(t.formattedPeriod))]),a("hr")]),a("div",{staticClass:"Chart__content"},[t.loaded?a("line-chart",{attrs:{"chart-data":t.downloadsYear,"chart-labels":t.labelsYear}}):t._e()],1)]):t._e()],1)])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sk-cube-grid"},[a("div",{staticClass:"sk-cube sk-cube1"}),a("div",{staticClass:"sk-cube sk-cube2"}),a("div",{staticClass:"sk-cube sk-cube3"}),a("div",{staticClass:"sk-cube sk-cube4"}),a("div",{staticClass:"sk-cube sk-cube5"}),a("div",{staticClass:"sk-cube sk-cube6"}),a("div",{staticClass:"sk-cube sk-cube7"}),a("div",{staticClass:"sk-cube sk-cube8"}),a("div",{staticClass:"sk-cube sk-cube9"})])}],x=(a("99af"),a("d81d"),a("13d5"),a("bc3a")),z=a.n(x),M=a("fa33"),E=(a("d3b7"),a("25f0"),a("3835")),O=a("1fca"),Y=(a("7b4d"),a("f8ff"),{extends:O["a"],props:{chartData:{type:Array,required:!1},chartLabels:{type:Array,required:!0}},data:function(){var t=this;return{gradient:null,options:{showScale:!0,scales:{yAxes:[{ticks:{beginAtZero:!1,callback:function(e){return t.formatNumber(e)}},gridLines:{display:!0,color:"#EEF0F4"}}],xAxes:[{gridLines:{display:!0,color:"#EEF0F4"}}]},tooltips:{mode:"interpolate",intersect:!1,backgroundColor:"#4F5565",titleFontStyle:"normal",titleFontSize:12,bodyFontFamily:"'Proxima Nova', sans-serif",cornerRadius:3,bodyFontColor:"#20C4C8",bodyFontSize:12,xPadding:14,yPadding:14,displayColors:!1,callbacks:{title:function(t){return"🗓 ".concat(t[0].xLabel)},label:function(t,e){var a=e.datasets[t.datasetIndex],s=a.data[t.index];return"📦 ".concat(s.toLocaleString())}}},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,plugins:{deferred:{xOffset:150,yOffset:"50%",delay:500},crosshair:{line:{color:"#F66",width:1},sync:{enabled:!0,group:1,suppressTooltips:!1},zoom:{enabled:!0,zoomboxBackgroundColor:"rgba(66,133,244,0.2)",zoomboxBorderColor:"#48F",zoomButtonText:"Reset Zoom",zoomButtonClass:"reset-zoom"},callbacks:{beforeZoom:function(){return!0},afterZoom:function(){}}}}}}},mounted:function(){this.gradient=this.$refs.canvas.getContext("2d"),this.renderChart({labels:this.chartLabels,datasets:[{label:"downloads",borderColor:"#249EBF",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",pointHoverBorderColor:"#249EBF",pointHoverBackgroundColor:"#fff",pointHoverRadius:4,pointHitRadius:10,pointHoverBorderWidth:2,borderWidth:2,fill:!1,data:this.chartData}]},this.options)},methods:{formatNumber:function(t){for(var e=Math.round(t).toString(),a=[[6,"m"],[3,"k"]],s=0,n=a;s<n.length;s++){var r=Object(E["a"])(n[s],2),o=r[0],c=r[1];if(e.length>o){var i="";"0"!==e[e.length-o]&&(i="."+e[e.length-o]),e=e.substr(0,e.length-o)+i+c;break}}return e}}}),F=Y,B=Object(f["a"])(F,s,n,!1,null,null,null),N=B.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Package"},[a("h1",{staticClass:"Package__title"},[t._v(t._s(t.packageName))]),a("div",{staticClass:"Package__info"},[a("div",{staticClass:"Package__info-item"},[a("span",[t._v(t._s(t.totalDownloads))]),a("span",{staticClass:"info-label"},[t._v("Total Downloads")])]),a("div",{staticClass:"Package__info-item"},[a("span",[t._v(t._s(t.period))]),a("span",{staticClass:"info-label"},[t._v("Period")])]),a("div",{staticClass:"Package__info-item"},[a("span",[a("a",{attrs:{href:t.packageLink}},[t._v(t._s(t.packageName)+" on npm")])]),a("span",{staticClass:"info-label"},[t._v("Link")])])])])},L=[],q=(a("a9e3"),{props:{packageName:{type:String},totalDownloads:{type:Number},period:{type:String}},computed:{packageLink:function(){return"https://www.npmjs.com/package/".concat(this.packageName)}}}),$=q,R=(a("1e47"),Object(f["a"])($,W,L,!1,null,null,null)),H=R.exports,T=a("c1df"),A=a.n(T),G=function(t){return A()(t).format("YYYY")},U=function(t){return A()(t).format("MMM YYYY")},Z=function(t){return A()(t).format("GGGG-[W]WW")},I=function(t){return A()(t).format("YYYY-MM-DD")},J=function(t){return A()(t).format("Do MMMM YYYY")};a("4de4"),a("c975");function V(t,e){return t.indexOf(e)<0&&t.push(e),t}var K=function(t,e){return t.reduce((function(t,a){return t.indexOf(e(a.day))<0&&t.push(e(a.day)),t}),[]).map((function(a){return{date:a,downloads:t.filter((function(t){return e(t.day)===a})).map((function(t){return t.downloads})).reduce((function(t,e){return t+e}))}})).map((function(t){return t.downloads}))},Q={components:{LineChart:N,PackageInfo:H,Datepicker:M["a"]},data:function(){return{inputtedPackage:null,packageName:"",loaded:!1,loading:!1,downloads:[],downloadsYear:[],downloadsMonth:[],downloadsWeek:[],labels:[],labelsYear:[],labelsMonth:[],labelsWeek:[],showError:!1,showSettings:!1,errorMessage:"Please enter a package name",periodStart:"",periodEnd:new Date,rawData:"",totalDownloads:""}},mounted:function(){this.$route.params.package&&(this.inputtedPackage=this.$route.params.package,this.requestData())},computed:{_endDate:function(){return I(this.periodEnd)},_startDate:function(){return I(this.periodStart)},period:function(){return this.periodStart?"".concat(this._startDate,":").concat(this._endDate):"last-month"},formattedPeriod:function(){return this.periodStart?"".concat(J(this._startDate)," - ").concat(J(this._endDate)):"last-month"}},methods:{resetState:function(){this.loaded=!1,this.showError=!1},requestData:function(){var t=this;null!==this.inputtedPackage&&""!==this.inputtedPackage&&"undefined"!==this.inputtedPackage?(this.resetState(),this.loading=!0,z.a.get("https://api.npmjs.org/downloads/range/".concat(this.period,"/").concat(this.inputtedPackage)).then((function(e){t.rawData=e.data.downloads,t.downloads=e.data.downloads.map((function(t){return t.downloads})),t.labels=e.data.downloads.map((function(t){return t.day})),t.packageName=e.data.package,t.totalDownloads=t.downloads.reduce((function(t,e){return t+e})),t.setURL(),t.groupDataByDate(),t.loaded=!0,t.loading=!1})).catch((function(e){t.errorMessage=e.response.data.error,t.showError=!0}))):this.showError=!0},validateDataRequest:function(){""!==this.packageName&&""!==this.periodStart&&this.requestData()},groupDataByDate:function(){this.formatYear(),this.formatMonth(),this.formatWeek()},formatYear:function(){this.labelsYear=this.rawData.map((function(t){return G(t.day)})).reduce(V,[]),this.downloadsYear=K(this.rawData,G)},formatMonth:function(){this.labelsMonth=this.rawData.map((function(t){return U(t.day)})).reduce(V,[]),this.downloadsMonth=K(this.rawData,U)},formatWeek:function(){this.labelsWeek=this.rawData.map((function(t){return Z(t.day)})).reduce(V,[]),this.downloadsWeek=K(this.rawData,Z)},setURL:function(){history.pushState({info:"npm-stats ".concat(this.inputtedPackage)},this.inputtedPackage,"/mynpmstats/#/".concat(this.inputtedPackage))},toggleSettings:function(){this.showSettings=!this.showSettings}}},X=Q,tt=(a("8893"),Object(f["a"])(X,P,S,!1,null,null,null)),et=tt.exports;r["a"].use(D["a"]);var at=new D["a"]({routes:[{path:"/",name:"Start",component:et},{path:"/:package",name:"Package",component:et}]});r["a"].config.productionTip=!1,new r["a"]({router:at,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},8893:function(t,e,a){"use strict";var s=a("90a6"),n=a.n(s);n.a},"90a6":function(t,e,a){},"9c0c":function(t,e,a){},af35:function(t,e,a){}});
//# sourceMappingURL=app.6ebe0c0f.js.map