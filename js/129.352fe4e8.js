"use strict";(self["webpackChunkPets"]=self["webpackChunkPets"]||[]).push([[129],{4886:function(t,a,o){o.d(a,{EB:function(){return n},ZB:function(){return i},h7:function(){return r}});var s=o(9582),e=o(5352);const r=(0,e.Ji)("v-card__actions"),l=(0,e.Ji)("v-card__subtitle"),i=(0,e.Ji)("v-card__text"),n=(0,e.Ji)("v-card__title");s.Z},5540:function(t,a,o){o.r(a),o.d(a,{default:function(){return G}});var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{staticClass:"row-columna text-center py-2",attrs:{"align-content":"center","no-gutters":""}},[s("div",{staticClass:"titulo py-2"},[s("h1",{staticClass:"text-lemon py-0 mb-0"},[t._v("PET PALS")]),s("p",{staticClass:"text-center mb-0"},[t._v('"Amigos y aliados"')])]),s("div",{staticClass:"img mx-auto mt-2"},[s("v-img",{staticClass:"img-fluid",attrs:{"lazy-src":o(5567),src:o(5567)}})],1),s("div",{staticClass:"btn-actions pt-6 text-dark mt-6"},[s("v-btn",{staticClass:"btn-pet",attrs:{elevation:"3",rounded:"",dark:""},on:{click:function(a){t.login=!t.login}}},[t._v(" Iniciar sesión ")]),s("div",{staticClass:"registro mt-4"},[s("v-btn",{staticClass:"btn-pet",attrs:{elevation:"3",rounded:"",dark:""},on:{click:function(a){t.registro=!t.registro}}},[t._v(" Regístrate ")])],1),s("div",{staticClass:"my-3"},[s("span",[t._v("O")])]),s("div",{staticClass:"google"},[s("v-btn",{staticClass:"px-1",attrs:{elevation:"3",rounded:"",color:"gray"}},[s("span",[t._v("Continuar con Google")]),s("v-img",{staticClass:"img-fluid img-google",attrs:{src:o(2543),"lazy-src":o(2543)}})],1)],1)],1),s("registrar",{attrs:{ver:t.registro},on:{cerrar:function(a){t.registro=!t.registro}}}),s("Iniciar",{attrs:{verLogin:t.login},on:{cerrarLogin:function(a){t.login=!t.login}}})],1)},e=[],r=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"",fullscreen:""},model:{value:t.ver,callback:function(a){t.ver=a},expression:"ver"}},[o("v-card",[o("v-card-title",[o("div",{staticClass:"w-100"},[o("v-btn",{staticClass:"ma-2",attrs:{icon:"",color:"#FAD04A!important"},on:{click:t.cerrarDialogo}},[o("v-icon",[t._v("mdi-arrow-left-circle-outline")])],1)],1),o("div",{staticClass:"w-100 text-center"},[o("h1",{staticClass:"roboto"},[t._v("¡Regístrate!")])])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"11",sm:"11",md:"11"}},[o("v-text-field",{attrs:{label:"Nombre",solo:""},model:{value:t.datos.nombre,callback:function(a){t.$set(t.datos,"nombre",a)},expression:"datos.nombre"}})],1),o("v-col",{attrs:{cols:"11",sm:"11",md:"11"}},[o("v-text-field",{attrs:{type:"tel",label:"Celular",solo:""},model:{value:t.datos.celular,callback:function(a){t.$set(t.datos,"celular",a)},expression:"datos.celular"}})],1),o("v-col",{attrs:{cols:"11",sm:"11",md:"11"}},[o("v-text-field",{attrs:{label:"Ciudad",solo:""},model:{value:t.datos.ciudad,callback:function(a){t.$set(t.datos,"ciudad",a)},expression:"datos.ciudad"}})],1),o("v-col",{attrs:{cols:"11",sm:"11",md:"11"}},[o("v-text-field",{attrs:{label:"Dirección",solo:""},model:{value:t.datos.direccion,callback:function(a){t.$set(t.datos,"direccion",a)},expression:"datos.direccion"}})],1),o("v-col",{attrs:{cols:"11"}},[o("v-text-field",{attrs:{type:"email",label:"Correo electrónico",solo:""},model:{value:t.datos.correo,callback:function(a){t.$set(t.datos,"correo",a)},expression:"datos.correo"}})],1),o("v-col",{attrs:{cols:"11",sm:"11"}},[o("v-text-field",{attrs:{type:"password",solo:"",label:"Contraseña"},model:{value:t.datos.contrasena,callback:function(a){t.$set(t.datos,"contrasena",a)},expression:"datos.contrasena"}})],1)],1)],1)],1),o("v-card-actions",{staticClass:"row-columna"},[o("v-btn",{staticClass:"btn-pet",attrs:{elevation:"3",rounded:"",dark:""}},[t._v(" Crear cuenta ")])],1)],1)],1)],1)},l=[],i={props:["ver"],data:()=>({dialog:!1,datos:{nombre:null,celular:null,ciudad:null,direccion:null,correo:null,contrasena:null}}),methods:{cerrarDialogo(){console.log("cerrando dialog"),this.$emit("cerrar")}}},n=i,c=o(1001),d=o(3453),u=o.n(d),v=o(6190),A=o(9582),g=o(4886),m=o(266),p=o(2150),C=o(4061),b=o(4324),f=o(1713),x=o(7808),h=(0,c.Z)(n,r,l,!1,null,null,null),Z=h.exports;u()(h,{VBtn:v.Z,VCard:A.Z,VCardActions:g.h7,VCardText:g.ZB,VCardTitle:g.EB,VCol:m.Z,VContainer:p.Z,VDialog:C.Z,VIcon:b.Z,VRow:f.Z,VTextField:x.Z});var w=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{staticClass:"diag",attrs:{persistent:"",fullscreen:"",scrollable:""},model:{value:t.verLogin,callback:function(a){t.verLogin=a},expression:"verLogin"}},[s("v-card",{attrs:{height:"100%",width:"100%"}},[s("v-img",{staticClass:"img-fluid",attrs:{height:"100%",width:"100%",src:o(3200),"lazy-src":o(3200)}},[s("v-card-title",[s("div",{staticClass:"w-100"},[s("v-btn",{staticClass:"ma-2 mb-2",attrs:{icon:"",color:"#FAD04A!important"},on:{click:t.cerrarDialogoLogin}},[s("v-icon",[t._v("mdi-arrow-left-circle-outline")])],1)],1)]),s("v-card-text",{staticClass:"mt-6 pt-5"},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"11"}},[s("v-text-field",{staticClass:"input-white",attrs:{type:"email",label:"Correo electrónico",solo:""},model:{value:t.datos.correo,callback:function(a){t.$set(t.datos,"correo",a)},expression:"datos.correo"}})],1),s("v-col",{attrs:{cols:"11",sm:"11"}},[s("v-text-field",{staticClass:"input-white",attrs:{type:"password",solo:"",label:"Contraseña"},model:{value:t.datos.contrasena,callback:function(a){t.$set(t.datos,"contrasena",a)},expression:"datos.contrasena"}})],1)],1),s("v-row",{staticClass:"row-columna"},[s("div",{staticClass:"my-3"},[s("span",[t._v("O")])]),s("div",{staticClass:"google"},[s("v-btn",{staticClass:"px-1",attrs:{elevation:"3",rounded:"",color:"white"},on:{click:t.iniciar}},[s("span",[t._v("Continuar con Google")]),s("v-img",{staticClass:"img-fluid img-google",attrs:{src:o(2543),"lazy-src":o(2543)}})],1)],1)])],1)],1),s("v-card-actions",{staticClass:"row-columna"},[s("v-btn",{staticClass:"btn-pet",attrs:{elevation:"3",rounded:"",dark:""},on:{click:t.iniciar}},[t._v(" Ingresar ")])],1)],1)],1)],1)],1)},V=[],k={props:["verLogin"],data:()=>({dialog:!1,datos:{nombre:null,celular:null,ciudad:null,direccion:null,correo:null,contrasena:null}}),methods:{cerrarDialogoLogin(){this.$emit("cerrarLogin")},iniciar(){this.$router.push("/dashboard/welcome")}}},y=k,D=o(5495),B=(0,c.Z)(y,w,V,!1,null,null,null),I=B.exports;u()(B,{VBtn:v.Z,VCard:A.Z,VCardActions:g.h7,VCardText:g.ZB,VCardTitle:g.EB,VCol:m.Z,VContainer:p.Z,VDialog:C.Z,VIcon:b.Z,VImg:D.Z,VRow:f.Z,VTextField:x.Z});var H={components:{registrar:Z,Iniciar:I},name:"App",data:()=>({registro:!1,login:!1,active:"home",dialog:!1,usuario:"",noti:null,contrasena:"",error:!1,msg:"",isBusy:!1,prueba:0,array:[],rolMenu:[]}),methods:{login(){this.$router.push("dashboard/welcome")}}},L=H,R=(0,c.Z)(L,s,e,!1,null,null,null),G=R.exports;u()(R,{VBtn:v.Z,VImg:D.Z,VRow:f.Z})},3200:function(t,a,o){t.exports=o.p+"img/fondo-sesion2.3a3b8495.png"},2543:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASPSURBVFiFtVdbbFRVFF37nHNn7gwzbehr+kIRCZJgiT9IVFT4wVgtEc2oCGoV0pD6YSQIJEIyiWnQGIOJaELVQIKRQIMp1oiPD4g2qAkYDZRXG4G+gba0ZWTa+5jtRx9MO/fODG1ZyST3ztpnr3XuOXfvcwkZgt8p9eEmPwPwcoCXADQHwOzBs106SWFCiZj0yAuk5GGfpu2h+v7+TPJSWuGNpSWw49sAvAZG1mR+4ExnclJBLP3ek5pQb3p/jp6ZkgGOQKG9ZCvA2wHobnFOBhKMQGXr9f6jsRcIiGdsgCvzCyG1ehCWuntPb2AM0q/1eoLeJ7xHomcncyJJfH3pfCjtRCbimcK+ZebaQ/ZuJ26CAd5QEALxTwDumylxABAeaSjp3ZTSAIchAXUY4HkzLS6zA494fuj/24lX41c5pZthxx/LMO8AgN/BaFNB7+NsxfPihpXLNk/YU0KThh4ILvU0OIsDo5uQWxYXoMu6hIMDOoY4aV8koAWEHaCiw1R7ykwkuKLYH7P6P7Ciwxvjpq0JTRp6MLjUbeYTDTSXfQzGJly1gIODwBA7hX6NIFXRrvZYqoQD4awc7Za9Qxjyc/2XweZUsQBA3LTIA010AsgFAEcTRPvxRcfrBDg5mxYEPOLpcXEACCngpSxAH11ORjNMrepuiAOAAvOKpHo0ZuKbQQMWttNXl4ecBj9ZE31XRvu3TUWYAWYl9yqAHnaMCCng5eyr2E31QIdzFsI2tsycqRgAAMFcJQDc4xpRJE9TXZPhRpNDJb0TcJx9AonrnyzROh2B9LA1gZSbi9O26+lCAOhLwc+5y/JxAcD1MV+z9AfCTWGPG88uPT5jSIoKAH86cVesALb3PXS/vJG/2m08ATtJaX1uPwhppdJniFbi5sWrwHwkkbhkBrDzRhmirMCMFt2+VbZvxT7HWuCGZ99rK/nP4suI28othry+GgHD/hFA79ifV6wAdt54EFEeGUeE+cPS/yU4/flxDOEIe6IsGlOJg4hnKf8nghY1GQDtBUZmXtNXhihrk4Kxds1v1fsrTlb504kvaIjkXTdaW8k05qYMVNo/DZGsnpFCwtqHXbavK3HmyY6xNhBTp19prF7rtDEXHasOzGt4a3d7rKezO+dcKHXjEDwM7Y2RtKNY11i92WZ8lHp+47gJ8AkQ2o5fE8tMRt6ASblm/Ha+hR0VKLy2wHHdWNePHn+/qBxIKKXDndd3AWjM0EAQoKfAtKFriBb2DFNeojgAnC9pQHfBxeQqJ9VAvix8bux23EDdi3U2LGs1gIsZmkiL8yUN6A5duG1CSIt1bVldhMb7y4RmcmBFbU9cyHIA/86YieLv0R26AJCwhVdbeTxSOOFLyfHVWvPH2yGY5rcAHk0ncKAtfUPM9XDv3Ni9K0+9uuWvyZzrux0+FJaqOG8LmHYA8E3FgBLgUh9/d3nVZ8+D7uDTLBHrfq0qskltBaESjOxMDGiCuVDnxoC015+r2JPyYJpxdas8Vqkbmr+cQcuZeQmNHGRm17WTzyvJ8BDHZklc9HnoEAuqbSn/dDCTvP8DVcey3nohpVwAAAAASUVORK5CYII="},5567:function(t,a,o){t.exports=o.p+"img/login.625a57fb.png"}}]);
//# sourceMappingURL=129.352fe4e8.js.map