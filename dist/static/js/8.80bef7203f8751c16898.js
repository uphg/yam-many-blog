webpackJsonp([8],{OpX7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),o=n("NYxO"),a={data:function(){return{username:"",password:""}},methods:s()({},Object(o.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:e.$route.query.redirect||"/"})})}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"login-main"},[n("h2",[e._v("登录")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onLogin(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.onLogin}},[e._v("登录")]),e._v(" "),n("p",{staticClass:"notice"},[e._v("没有账号？"),n("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)])},staticRenderFns:[]};var u=n("VU/8")(a,i,!1,function(e){n("hQR0")},"data-v-03366560",null);t.default=u.exports},hQR0:function(e,t){}});
//# sourceMappingURL=8.80bef7203f8751c16898.js.map