"use strict";(self["webpackChunkPets"]=self["webpackChunkPets"]||[]).push([[100],{2150:function(t,e,r){r.d(e,{Z:function(){return o}});r(1884);var s=r(144);function a(t){return s["default"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:r,data:s,children:a}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:n}=s;if(n){s.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),e(r.tag,s,a)}})}var n=r(1767),o=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:r,children:s}){let a;const{attrs:o}=r;return o&&(r.attrs={},a=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),t(e.tag,(0,n.ZP)(r,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),s)}})},1066:function(t,e,r){r.r(e),r.d(e,{default:function(){return C}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"body-component"},[r("v-row",{staticClass:"row-columna align-items-start"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-btn",{staticClass:"ma-2",attrs:{icon:"",color:"#FAD04A!important"},on:{click:t.volverInicio}},[r("v-icon",[t._v("mdi-arrow-left-circle-outline")])],1)],1),r("v-row",{staticClass:"px-2 pb-15",attrs:{"no-gutters":"",justify:"space-between"}},t._l(t.servicioF,(function(e,s){return r("v-col",{key:e.des,staticClass:"mb-1",staticStyle:{"max-width":"221px",width:"220px"},attrs:{cols:"5"}},[r("v-img",{class:{"img-fluid":!0,"mb-4":s>t.servicioF.length-3},attrs:{src:e.res,"lazy-src":e.res},on:{click:function(r){return t.verDetalle(e.des)}}})],1)})),1)],1),r("ServiciosDetalles",{attrs:{verDetalle:t.vDetalle,mostrar:t.vMostrar}})],1)},a=[],n=r(3742),o={components:{ServiciosDetalles:n["default"]},data:()=>({vDetalle:!0,vMostrar:"veterinario",servicioF:[{des:"Veterinario",res:r(9538)},{des:"Spa",res:r(1631)},{des:"Peluqueria",res:r(8760)},{des:"Paseador",res:r(4553)},{des:"Entrenador",res:r(2969)},{des:"Lovepet",res:r(9595)}]}),methods:{volverInicio(){this.$router.push("/dashboard/welcome")},verDetalle(t){this.vMostrar=t.toLowerCase(),localStorage.tabD=this.vMostrar,this.vDetalle=!1}}},i=o,l=r(1001),c=r(3453),d=r.n(c),u=r(6190),v=r(266),p=r(2150),f=r(4324),m=r(5495),g=r(1713),h=(0,l.Z)(i,s,a,!1,null,null,null),C=h.exports;d()(h,{VBtn:u.Z,VCol:v.Z,VContainer:p.Z,VIcon:f.Z,VImg:m.Z,VRow:g.Z})}}]);
//# sourceMappingURL=100.e1cfa7fc.js.map