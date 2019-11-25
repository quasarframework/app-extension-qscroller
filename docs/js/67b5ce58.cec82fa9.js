(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["67b5ce58"],{1597:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      disable\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      dense\n      disable\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'DateDisabled\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},3787:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-markdown"},[a("example-title",{attrs:{title:"view='date'"}}),a("example-card",{attrs:{title:"Basic",name:"DateBasic","tag-parts":e.getTagParts(n("fbb0").default)}}),a("example-card",{attrs:{title:"Colors",name:"DateColors","tag-parts":e.getTagParts(n("ca86").default)}}),a("example-card",{attrs:{title:"QInput",name:"DateQInput","tag-parts":e.getTagParts(n("de05").default)}}),a("example-card",{attrs:{title:"Disabled",name:"DateDisabled","tag-parts":e.getTagParts(n("1597").default)}}),a("example-card",{attrs:{title:"Intervals",name:"DateIntervals","tag-parts":e.getTagParts(n("5dab").default)}}),a("example-card",{attrs:{title:"Types",name:"DateTypes","tag-parts":e.getTagParts(n("eeb3").default)}}),a("example-card",{attrs:{title:"Locale",name:"DateLocale","tag-parts":e.getTagParts(n("e56f").default)}}),a("example-card",{attrs:{title:"Slots",name:"DateSlots","tag-parts":e.getTagParts(n("4258").default)}})],1)},r=[],l=n("fe7d"),o=n("74ba"),s=n("8669"),i=n("3eb2"),d={name:"Date",components:{ExampleTitle:l["a"],ExampleCard:o["a"]},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Date"),this.addToToc("Basic",2),this.addToToc("Colors",2),this.addToToc("QInput",2),this.addToToc("Disabled",2),this.addToToc("Intervals",2),this.addToToc("Types",2),this.addToToc("Locale",2),this.addToToc("Slots",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{getTagParts:i["getTagParts"],addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Object(s["b"])(e);this.tempToc.push({children:[],id:n,label:e,level:t})}}},c=d,p=n("2877"),u=Object(p["a"])(c,a,r,!1,null,null,null);t["default"]=u.exports},"3eb2":function(e,t){function n(e){e.boot.push("~@quasar/quasar-app-extension-qmarkdown/src/boot/register.js"),e.build.transpileDependencies.push(/quasar-app-extension-qmarkdown[\\/]src/),e.css.push("~@quasar/quasar-ui-qmarkdown/src/index.sass")}e.exports=function(e){e.compatibleWith("quasar","^1.1.1"),e.compatibleWith("@quasar/app","^1.1.0"),e.registerDescribeApi("QMarkdown","~@quasar/quasar-ui-qmarkdown/dist/api/QMarkdown.json"),e.extendQuasarConf(n),e.chainWebpack((function(t,n){var r=n.isClient;return a(e,t,r)}))};var a=function(e,t,n){n.isClient;if(void 0!==e.prompts.import_md&&!0===e.prompts.import_md&&(console.log(" App Extension (qmarkdown) Info: 'Adding markdown loader to chainWebpack in your quasar.conf.js'"),t.module.rule("md").test(/\.md$/i).use("raw-loader").loader("raw-loader")),void 0!==e.prompts.import_vmd&&!0===e.prompts.import_vmd){console.log(" App Extension (qmarkdown) Info: 'Adding .vmd (vue+markdown) loader to chainWebpack in your quasar.conf.js'");var a=t.module.rule("vmd").test(/\.vmd$/).pre();a.use("v-loader").loader("vue-loader").options({productionMode:e.prod,compilerOptions:{preserveWhitespace:!1},transformAssetUrls:{video:"src",source:"src",img:"src",image:"xlink:href"}}),a.use("ware-loader").loader("ware-loader").options({raw:!0,middleware:function(e){var t=renderMarkdown(e);return"".concat(t)}})}}},4258:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-evenly q-gutter-sm\">\n    <span>Coming soon!</span>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DateSlots',\n\n  data () {\n    return {\n      value: ''\n    }\n  }\n}\n<\/script>\n"},"5dab":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-years\n      style="max-width: 160px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-months\n      style="max-width: 140px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-days\n      style="max-width: 180px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-days\n      no-months\n      style="max-width: 140px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-days\n      no-years\n      style="max-width: 160px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-months\n      no-years\n      style="max-width: 110px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'DateIntervals\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},"74ba":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:e.slugifiedTitle}},[n("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[n("q-toolbar",[n("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[n("q-toolbar-title",{staticClass:"example-title",on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[n("span",{staticClass:"ellipsis"},[e._v(e._s(e.title))])])],1)],1),this.$slots.default?n("q-separator"):e._e(),this.$slots.default?n("q-card-section",[e._t("default")],2):e._e(),n("q-separator"),n("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[n("q-card",[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab",{attrs:{name:"template",label:"Template"}}):e._e(),e.parts.script?n("q-tab",{attrs:{name:"script",label:"Script"}}):e._e(),e.parts.style?n("q-tab",{attrs:{name:"style",label:"Style"}}):e._e()],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab-panel",{attrs:{name:"template"}},[n("q-markdown",{attrs:{src:e.parts.template}})],1):e._e(),e.parts.script?n("q-tab-panel",{attrs:{name:"script"}},[n("q-markdown",{attrs:{src:e.parts.script}})],1):e._e(),e.parts.style?n("q-tab-panel",{attrs:{name:"style"}},[n("q-markdown",{attrs:{src:e.parts.style}})],1):e._e()],1)],1)],1),n("q-separator"),n(e.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},r=[],l=(n("ac6a"),n("cadf"),n("06db"),n("456d"),n("8669")),o={name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"],updateParts:function(){var e=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==e.tagParts[t]&&(e.parts[t]="```\n"+e.tagParts[t]+"\n```")}))}}},s=o,i=n("2877"),d=Object(i["a"])(s,a,r,!1,null,null,null);t["a"]=d.exports},8669:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n("a481");function a(e){var t=window.location.origin+window.location.pathname+"#"+e,n=document.createElement("textarea");n.className="fixed-top",n.value=t,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function r(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},ca86:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      text-color="yellow-7"\n      color="blue-8"\n      inner-text-color="yellow-7"\n      inner-color="blue-8"\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      bar-color="orange-8"\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      vertical-bar\n      bar-color="purple-8"\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      border-color="purple-8"\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      dense\n      text-color="lightgreen"\n      inner-text-color="orange"\n      bar-color="purple"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'DateColors\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},de05:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n\n    <q-input color="blue-8" filled v-model="value" label="Enter date" mask="####-##-##">\n      <template v-slot:append>\n        <q-icon name="far fa-calendar" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller1" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="date"\n              no-header\n              rounded-borders\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller1 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter date" mask="####-##-##">\n      <template v-slot:append>\n        <q-icon name="far fa-calendar" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller2" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="date"\n              vertical-bar\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller2 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter date" mask="####-##-##">\n      <template v-slot:append>\n        <q-icon name="far fa-calendar" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller3" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="date"\n              no-header\n              vertical-bar\n              bar-color="green"\n              border-color="green"\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller3 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter date" mask="####-##-##">\n      <template v-slot:append>\n        <q-icon name="far fa-calendar" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller4" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="date"\n              rounded-borders\n              no-border\n              text-color="grey-3"\n              color="black"\n              inner-text-color="black"\n              inner-color="grey-3"\n              bar-color="#000"\n              vertical-bar\n              :style="scrollerPopupStyle150"\n              @close="() => { showScroller4 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'DateQInput\',\n\n  data () {\n    return {\n      showScroller1: false,\n      showScroller2: false,\n      showScroller3: false,\n      showScroller4: false,\n      value: \'\'\n    }\n  },\n\n  computed: {\n    scrollerPopupStyle200 () {\n      if (this.$q.screen.lt.sm) {\n        return {\n          width: \'90vw\',\n          height: \'70vh\'\n        }\n      } else {\n        return {\n          maxHeight: \'200px\',\n          height: \'200px\',\n          width: \'200px\'\n        }\n      }\n    },\n    scrollerPopupStyle150 () {\n      if (this.$q.screen.lt.sm) {\n        return {\n          width: \'90vw\',\n          height: \'70vh\'\n        }\n      } else {\n        return {\n          maxHeight: \'200px\',\n          height: \'200px\',\n          width: \'150px\'\n        }\n      }\n    }\n  }\n}\n<\/script>\n'},e56f:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-evenly q-gutter-sm\">\n    <div>\n      <q-select filled v-model=\"locale\" :options=\"options\" label=\"Filled\" style=\"max-width: 200px;\"/>\n      <q-scroller\n        v-model=\"value\"\n        view=\"date\"\n        no-footer\n        :local=\"locale\"\n        style=\"max-width: 200px; height: 200px;\"\n      ></q-scroller>\n    </div>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DateLocale',\n\n  data () {\n    return {\n      value: '',\n      locale: 'en-us',\n      options: [\n        'en-us', 'fr', 'ro', 'se', 'ru', 'ar', 'ca'\n      ]\n    }\n  }\n}\n<\/script>\n"},eeb3:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="valueStr"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueObj"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueArr"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueDate"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'StringBasic\',\n\n  data () {\n    return {\n      valueStr: \'2020-10-01\',\n      valueObj: { year: \'2020\', month: \'11\', day: 10 },\n      valueArr: [ 2020, 12, \'25\' ],\n      valueDate: new Date()\n    }\n  },\n\n  watch: {\n    valueStr (val) {\n      /* eslint-disable-next-line */\n      console.log(\'string:\', val)\n    },\n    valueObj (val) {\n      /* eslint-disable-next-line */\n      console.log(\'object:\', JSON.stringify(val))\n    },\n    valueArr (val) {\n      /* eslint-disable-next-line */\n      console.log(\'array:\', JSON.stringify(val))\n    },\n    valueDate (val) {\n      /* eslint-disable-next-line */\n      console.log(\'date:\', val)\n    }\n  }\n}\n<\/script>\n'},fbb0:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-header\n      no-footer\n      style="max-width: 140px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      style="max-width: 140px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-shadow\n      style="max-width: 140px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      no-border\n      style="max-width: 140px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      rounded-borders\n      style="max-width: 140px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="date"\n      no-footer\n      rounded-borders\n      dense\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'DateBasic\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'},fe7d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},r=[],l=n("8669"),o={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(l["b"])(this.title)}},methods:{copyHeading:l["a"]}},s=o,i=n("2877"),d=Object(i["a"])(s,a,r,!1,null,null,null);t["a"]=d.exports}}]);