(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{8669:function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return i}));s("5319"),s("498a");function a(t){var e=document.createElement("textarea");e.className="fixed-top",e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}function o(t){const e=window.location.origin+window.location.pathname+"#"+t,s=document.getElementById(t);s&&(s.id=""),window.location.hash="#"+t,s&&setTimeout(()=>{s.id=t},300),a(e),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function i(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}},a7c6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-markdown"},[s("example-title",{attrs:{title:"view='date-time'"}}),s("example-viewer",{attrs:{title:"Basic",file:"date-time/Basic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Colors",file:"date-time/Colors","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"QInput",file:"date-time/QInput","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Disabled",file:"date-time/Disabled","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Intervals",file:"date-time/Intervals","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Types",file:"date-time/Types","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[s("q-markdown",[t._v("\nOpen the browser's Dev Tools (console) and then click on examples to see the different types.\n      ")])],1),s("example-viewer",{attrs:{title:"Locale",file:"date-time/Locale","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Slots",file:"date-time/Slots","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}})],1)},o=[],i=s("fe7d"),l=s("8669"),n=s("384e"),c={name:"DateTime",components:{ExampleTitle:i["a"]},data(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qscroller/tree/dev/demo/src/examples/",jsPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qscroller@${n["b"]}/dist/index.umd.min.js`],cssPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qscroller@${n["b"]}/dist/index.min.css`,"https://cdn.jsdelivr.net/npm/@quasar/extras/fontawesome-v5/fontawesome-v5.css"]}},mounted(){this.toc=[],this.tempToc=[],this.addToToc("view='date-time'"),this.addToToc("Basic",2),this.addToToc("Colors",2),this.addToToc("QInput",2),this.addToToc("Disabled",2),this.addToToc("Intervals",2),this.addToToc("Types",2),this.addToToc("Locale",2),this.addToToc("Slots",2),this.toc=this.tempToc},computed:{toc:{get(){return this.$store.state.common.toc},set(t){this.$store.commit("common/toc",t)}}},methods:{addToToc(t,e=1){let s=t;e>1&&(s="example-"+s);const a=Object(l["b"])(s);this.tempToc.push({children:[],id:a,label:t,level:e})}}},r=c,d=s("2877"),h=Object(d["a"])(r,a,o,!1,null,null,null);e["default"]=h.exports},fe7d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},o=[],i=s("8669"),l={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle(){return Object(i["b"])(this.title)}},methods:{copyHeading:i["a"]}},n=l,c=s("2877"),r=Object(c["a"])(n,a,o,!1,null,null,null);e["a"]=r.exports}}]);