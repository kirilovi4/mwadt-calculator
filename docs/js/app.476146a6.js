(function(t){function e(e){for(var r,i,a=e[0],s=e[1],u=e[2],p=0,b=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},c={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2cda":function(t,e,n){"use strict";n("c608")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Calculator")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator"},[n("Screen",{attrs:{content:t.screenData}}),n("div",{staticClass:"calculator-body"},t._l(t.buttonsData,(function(e,r){return n("Button",{key:r,attrs:{data:e},on:{buttonClicked:t.buttonClicked}})})),1)],1)},a=[],s=(n("d3b7"),n("25f0"),n("a9e3"),n("caad"),n("ea56")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator-screen",style:"font-size:"+(t.content.length>8?4.5*(24-t.content.length):"72")+"px"},[n("span",[t._v(t._s(t.content))])])},l=[],p={props:{content:{type:String}}},b=p,f=(n("2cda"),n("2877")),y=Object(f["a"])(b,u,l,!1,null,null,null),d=y.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"calculator-button",on:{click:function(e){return t.$emit("buttonClicked",t.data)}}},[t._v(" "+t._s(t.data.symbol)+" ")])},m=[],v={props:{data:{type:Object,required:!0}}},D=v,g=(n("ef55"),Object(f["a"])(D,h,m,!1,null,null,null)),T=g.exports,O={components:{Screen:d,Button:T},data:function(){return{screenData:"0",screenDataNeedOverwrite:!1,currentAction:null,previousValue:null,buttonsData:s}},methods:{clearAction:function(){this.screenData="0",this.screenDataNeedOverwrite=!1,this.currentAction=null},"signСhangeAction":function(){this.screenData=(-1*Number(this.screenData)).toString()},percentAction:function(){this.screenData=(Number(this.screenData)/100).toString()},divideAction:function(){var t=(this.previousValue/Number(this.screenData)).toString();this.screenData=t},multiplyAction:function(){var t=(this.previousValue*Number(this.screenData)).toString();this.screenData=t},subtractAction:function(){var t=(this.previousValue-Number(this.screenData)).toString();this.screenData=t},addAction:function(){var t=(this.previousValue+Number(this.screenData)).toString();this.screenData=t},resultAction:function(){this.currentAction&&!this.screenDataNeedOverwrite&&(this["".concat(this.currentAction,"Action")](),this.currentAction=null)},numberAction:function(t){var e="."===t?"0.":t;if("0"===this.screenData||this.screenDataNeedOverwrite)return this.screenData=e,void(this.screenDataNeedOverwrite=!1);this.screenData+=e},buttonClicked:function(t){"number"!==t.actionType?["clear","signСhange","percent","result"].includes(t.actionType)?this["".concat(t.actionType,"Action")]():(!this.screenDataNeedOverwrite&&this.currentAction&&this["".concat(this.currentAction,"Action")](),this.currentAction=t.actionType,this.screenDataNeedOverwrite=!0,this.previousValue=Number(this.screenData)):this["".concat(t.actionType,"Action")](t.symbol)}}},A=O,_=(n("85cf"),Object(f["a"])(A,i,a,!1,null,null,null)),w=_.exports,N={name:"App",components:{Calculator:w}},S=N,j=(n("5c0b"),Object(f["a"])(S,c,o,!1,null,null,null)),x=j.exports;n("6861");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6861:function(t,e,n){},"85cf":function(t,e,n){"use strict";n("a88a")},"9c0c":function(t,e,n){},a88a:function(t,e,n){},c608:function(t,e,n){},da8d:function(t,e,n){},ea56:function(t){t.exports=JSON.parse('[{"actionType":"clear","symbol":"C"},{"actionType":"signСhange","symbol":"+/-"},{"actionType":"percent","symbol":"%"},{"actionType":"divide","symbol":"÷"},{"actionType":"number","symbol":"7"},{"actionType":"number","symbol":"8"},{"actionType":"number","symbol":"9"},{"actionType":"multiply","symbol":"x"},{"actionType":"number","symbol":"4"},{"actionType":"number","symbol":"5"},{"actionType":"number","symbol":"6"},{"actionType":"subtract","symbol":"-"},{"actionType":"number","symbol":"1"},{"actionType":"number","symbol":"2"},{"actionType":"number","symbol":"3"},{"actionType":"add","symbol":"+"},{"actionType":"number","symbol":"0"},{"actionType":"number","symbol":"."},{"actionType":"result","symbol":"="}]')},ef55:function(t,e,n){"use strict";n("da8d")}});
//# sourceMappingURL=app.476146a6.js.map