(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"7b20":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"HHh LpR fFf"},on:{scroll:e.onScroll}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[e._v("\n        QScroller "),a("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(t){return e.$q.dark.toggle()}}}),e.$q.screen.width>500?a("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e(),a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1)],1)],1),a("q-drawer",{staticClass:"menu",attrs:{bordered:"","aria-label":"Menu"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("div",{staticClass:"col-12"},[a("q-expansion-item",{attrs:{"expand-separator":"","default-opened":"",group:"somegroup",icon:"fas fa-cogs",label:"QScroller",caption:"QScroller Examples"}},[a("q-list",{attrs:{dense:"",bordered:"",separator:""}},[a("q-item",{attrs:{clickable:"",to:"/examples/string"}},[a("q-item-section",[a("q-item-label",[e._v("String")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/examples/time"}},[a("q-item-section",[a("q-item-label",[e._v("Time")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/examples/date"}},[a("q-item-section",[a("q-item-label",[e._v("Date")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/examples/time-range"}},[a("q-item-section",[a("q-item-label",[e._v("Time Range")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/examples/date-range"}},[a("q-item-section",[a("q-item-label",[e._v("Date Range")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/examples/date-time"}},[a("q-item-section",[a("q-item-label",[e._v("Date/Time")])],1)],1)],1)],1),a("q-expansion-item",{attrs:{"expand-separator":"",group:"somegroup",icon:"fas fa-link",label:"Essential Links"}},[a("q-separator"),a("essential-links")],1),a("q-separator")],1)]),a("q-drawer",{staticClass:"toc",attrs:{side:"right",bordered:"","aria-label":"Table of Contents"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{dense:""}},e._l(e.toc,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(a){return e.scrollTo(t.id)}}},[t.level>1?a("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),a("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)})),1)],1)],1),a("q-page-container",[a("transition",{attrs:{name:"slide-left"}},[a("router-view")],1)],1),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{class:{"text-black bg-grey-4":e.$q.dark.isActive,"text-white bg-primary":!e.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},i=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),n=a.n(o),s=a("2f62"),l=a("0831"),c=a("384e");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=l["a"].setScrollPosition,u={name:"ExamplesLayout",components:{"essential-links":function(){return a.e(1).then(a.bind(null,"4bd0"))}},data:function(){return{version:c["b"],leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},computed:m({},Object(s["b"])({toc:"common/toc"})),mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout((function(){e.scrollTo(t)}),200)}},methods:{scrollTo:function(e){var t=this;this.activeToc=e;var a=document.getElementById(e);a&&setTimeout((function(){t.scrollPage(a)}),200)},scrollPage:function(e){var t=e.offsetTop-50;b(window,t,500)},onScroll:function(e){var t=e.position;!0!==this.scrollingPage&&this.updateActiveToc(t)},updateActiveToc:function(e){var t,a=this.toc;for(var r in a){var i=a[r],o=document.getElementById(i.id);if(null!==o&&o.offsetTop>=e+100){void 0===t&&(t=i.id);break}}void 0!==t&&(this.activeToc=t)}}},d=u,f=a("2877"),v=a("4d5a"),q=a("e359"),g=a("65c6"),h=a("9c40"),w=a("0016"),O=a("6ac5"),k=a("2c91"),_=a("9404"),Q=a("3b73"),T=a("1c1c"),y=a("66e5"),D=a("4074"),x=a("0170"),P=a("eb85"),S=a("4983"),j=a("09e3"),E=a("5096"),$=a("714f"),C=a("eebe"),I=a.n(C),A=Object(f["a"])(d,r,i,!1,null,null,null);t["default"]=A.exports;I()(A,"components",{QLayout:v["a"],QHeader:q["a"],QToolbar:g["a"],QBtn:h["a"],QIcon:w["a"],QToolbarTitle:O["a"],QSpace:k["a"],QDrawer:_["a"],QExpansionItem:Q["a"],QList:T["a"],QItem:y["a"],QItemSection:D["a"],QItemLabel:x["a"],QSeparator:P["a"],QScrollArea:S["a"],QPageContainer:j["a"],QPageScroller:E["a"]}),I()(A,"directives",{Ripple:$["a"]})}}]);