webpackJsonp([2],{"2XnF":function(t,e){},epW7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg"),s={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(e){t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPagesChange:function(t){var e=this;n.a.getIndexBlogs({page:t}).then(function(a){e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},[a("div",{staticClass:"posts-main"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("div",{staticClass:"text"},[a("h3",[t._v(t._s(e.title)),a("span",[t._v(t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])])}),1)]),t._v(" "),a("section",{staticClass:"blog-pages"},[a("el-pagination",{attrs:{background:"","current-page":t.page,layout:"prev, pager, next",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.onPagesChange}})],1)])},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(t){a("2XnF")},"data-v-e69b81ea",null);e.default=i.exports}});
//# sourceMappingURL=2.addf2af61dc52c093171.js.map