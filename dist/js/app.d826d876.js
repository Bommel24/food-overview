(function(e){function t(t){for(var a,c,o=t[0],s=t[1],l=t[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"349e":function(e,t,n){"use strict";var a=n("3569"),r=n.n(a);r.a},3569:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{staticClass:"app"},[n("Header",{staticClass:"header"}),n("Inventory")],1)])},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{"align-content":"end",justify:"space-around"}},[n("v-col",{attrs:{lg:"3",md:"3",sm:"12",cols:"12"}},[n("span",{staticClass:"brand"},[e._v("Brandname")])]),n("v-col",{attrs:{lg:"9",md:"9",sm:"12",cols:"12"}},[n("Menu",{staticStyle:{"text-align":"right"}})],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu"},e._l(e.menuItems,(function(t){return n("a",{key:t.name,staticClass:"menuItem",class:{menuItemActive:t.active},attrs:{href:t.href}},[e._v(e._s(t.name))])})),0)},l=[],u={name:"Menu",data:function(){return{menuItems:[{name:"Menu Item 1",href:"#",active:!0},{name:"Menu Item 2",href:"#",active:!1},{name:"Menu Item 3",href:"#",active:!1},{name:"Menu Item 4",href:"#",active:!1},{name:"Menu Item 5",href:"#",active:!1},{name:"Menu Item 6",href:"#",active:!1}]}}},p=u,f=(n("349e"),n("2877")),v=Object(f["a"])(p,s,l,!1,null,"a2893cd8",null),d=v.exports,m={name:"App",components:{Menu:d}},y=m,h=(n("9e30"),n("d602"),n("6544")),b=n.n(h),g=n("62ad"),_=n("a523"),x=n("0fd9"),C=Object(f["a"])(y,c,o,!1,null,"8734c7fc",null),w=C.exports;b()(C,{VCol:g["a"],VContainer:_["a"],VRow:x["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"filter"},[n("span",[e._v("Filter:")]),n("div",{staticClass:"chips"},e._l(e.types,(function(t){return n("v-chip",{key:t.name,staticClass:"ma-1 filterChip",attrs:{"x-small":"",color:t.color,"text-color":"white"},on:{click:function(e){t.active=!t.active}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.active,expression:"type.active"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.active)?e._i(t.active,null)>-1:t.active},on:{change:function(n){var a=t.active,r=n.target,i=!!r.checked;if(Array.isArray(a)){var c=null,o=e._i(a,c);r.checked?o<0&&e.$set(t,"active",a.concat([c])):o>-1&&e.$set(t,"active",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(t,"active",i)}}}),n("span",{staticClass:"ml-1"},[e._v(e._s(t.name))])])})),1)]),n("Grid",{attrs:{inventory:e.inventory,types:e.types}})],1)},O=[],j=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{"align-content":"start",justify:"start"}},e._l(e.filteredInventory,(function(t,a){return n("v-col",{key:a,attrs:{lg:"3",md:"4",sm:"6",cols:"12"}},[n("Card",{attrs:{item:t,type:e.getType(t)}})],1)})),1)],1)}),V=[],M=(n("4de4"),n("7db0"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{tile:"",width:"300"}},[n("div",{staticClass:"align-end placeholderImage"}),n("v-card-title",[e._v(" "+e._s(e.item.name)+" "),n("v-spacer"),n("v-chip",{staticClass:"typeChip",attrs:{small:"",color:e.type.color,"text-color":"white"}},[e._v(e._s(e.type.name))])],1),n("v-card-text",{staticClass:"text--primary"},[e._v(e._s(e.item.text))]),n("v-card-actions",{staticClass:"moreInfo"},[n("v-icon",{staticClass:"moreInfoIcon",attrs:{color:e.type.color}},[e._v("mdi-chevron-right")]),n("span",{staticClass:"moreInfoText"},[e._v("More info")])],1)],1)}),A=[],k={name:"Card",props:{item:{type:Object,required:!0},type:{type:Object,required:!0}}},T=k,$=(n("7b6b"),n("b0af")),P=n("99d9"),S=n("cc20"),E=n("132d"),F=n("2fa4"),q=Object(f["a"])(T,M,A,!1,null,"58fafedf",null),B=q.exports;b()(q,{VCard:$["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VChip:S["a"],VIcon:E["a"],VSpacer:F["a"]});var G={props:{inventory:{type:Array,required:!0},types:{type:Array,required:!0}},computed:{filteredInventory:function(){var e=this;return this.inventory.filter((function(t){return e.getType(t).active}))}},components:{Card:B},methods:{getType:function(e){return this.types.find((function(t){return t.name==e.type}))}}},H=G,J=Object(f["a"])(H,j,V,!1,null,null,null),R=J.exports;b()(J,{VCol:g["a"],VContainer:_["a"],VRow:x["a"]});var L={name:"Inventory",components:{Grid:R},created:function(){var e=!0,t=!1,n=void 0;try{for(var a,r=this.inventory[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var i=a.value;i.text=this.loremText}}catch(c){t=!0,n=c}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}},data:function(){return{loremText:"Lorem ipsum dolor sit amet, consetectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",types:[{name:"Meat",color:"#E73C01",active:!0},{name:"Vegetable",color:"#2B9030",active:!0},{name:"Fruit",color:"#F39200",active:!0}],inventory:[{name:"Apple",type:"Fruit",text:null},{name:"Aubergine",type:"Vegetable",text:null},{name:"Banana",type:"Fruit",text:null},{name:"Broccoli",type:"Vegetable",text:null},{name:"Chicken",type:"Meat",text:null},{name:"Orange",type:"Fruit",text:null},{name:"Beef",type:"Meat",text:null},{name:"Zucchini",type:"Vegetable",text:null}]}}},N=L,Z=(n("dc99"),Object(f["a"])(N,I,O,!1,null,"c3bd2590",null)),z=Z.exports;b()(Z,{VChip:S["a"]});var D={name:"App",components:{Header:w,Inventory:z}},K=D,Q=(n("7f49"),n("7496")),U=Object(f["a"])(K,r,i,!1,null,"28a2de17",null),W=U.exports;b()(U,{VApp:Q["a"]});var X=n("f309");a["a"].use(X["a"]);var Y=new X["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:Y,render:function(e){return e(W)}}).$mount("#app")},"5e63":function(e,t,n){},"6bc3":function(e,t,n){},"7b6b":function(e,t,n){"use strict";var a=n("5e63"),r=n.n(a);r.a},"7f49":function(e,t,n){"use strict";var a=n("6bc3"),r=n.n(a);r.a},9732:function(e,t,n){},"9e30":function(e,t,n){"use strict";var a=n("9732"),r=n.n(a);r.a},d602:function(e,t,n){"use strict";var a=n("d951"),r=n.n(a);r.a},d951:function(e,t,n){},dc99:function(e,t,n){"use strict";var a=n("eb98"),r=n.n(a);r.a},eb98:function(e,t,n){}});
//# sourceMappingURL=app.d826d876.js.map