(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"748d":function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("q-page",[a("div",{staticClass:"row q-pa-md q-gutter-sm"},[a("q-card",{staticStyle:{width:"100%","max-width":"232px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("string")]),a("div",{staticClass:"text-subtitle2"},[e._v("Arbitrary Data Selection")])]),a("q-separator"),a("q-card-section",[a("q-scroller",{staticStyle:{height:"200px"},attrs:{view:"string",items:e.items,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,color:"blue-8","background-color":"white","inner-color":"white","inner-background-color":"blue-8"},model:{value:e.scrollerModel,callback:function(o){e.scrollerModel=o},expression:"scrollerModel"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"232px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("string")]),a("div",{staticClass:"text-subtitle2"},[e._v("Using QInput")])]),a("q-separator"),a("q-card-section",[a("q-input",{attrs:{color:"blue-8",filled:"",label:"Enter a Zoo Animal"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"fas fa-paw"}},[a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showScroller,callback:function(o){e.showScroller=o},expression:"showScroller"}},[a("q-scroller",{style:e.scrollerPopupStyle200,attrs:{items:e.items,view:"string","vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,"rounded-borders":e.roundedBorders,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"black","text-color":"grey-3",color:"black","inner-text-color":"black","inner-color":"grey-3"},on:{close:function(){e.showScroller=!1}},model:{value:e.scrollerModel,callback:function(o){e.scrollerModel=o},expression:"scrollerModel"}})],1)],1)]},proxy:!0}]),model:{value:e.scrollerModel,callback:function(o){e.scrollerModel=o},expression:"scrollerModel"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"232px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("time")]),a("div",{staticClass:"text-subtitle2"},[e._v("Hour and Minute Selection")])]),a("q-separator"),a("q-card-section",[a("q-scroller",{staticStyle:{height:"200px"},attrs:{view:"time",locale:e.locale,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,hour12:!e.hour24Format,"no-hours":e.noHours,"no-minutes":e.noMinutes,disabledMinutes:e.disabledMinutes,"border-color":"#FF0000","bar-color":"#FF0000","text-color":"white",color:"red-6","inner-text-color":"red","inner-color":"white"},model:{value:e.time1,callback:function(o){e.time1=o},expression:"time1"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"232px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("time")]),a("div",{staticClass:"text-subtitle2"},[e._v("Using QInput")])]),a("q-separator"),a("q-card-section",[a("q-input",{attrs:{color:"green-6",filled:"",label:"Enter time",mask:"##:##"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-clock"}},[a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showTimeScroller,callback:function(o){e.showTimeScroller=o},expression:"showTimeScroller"}},[a("q-scroller",{style:e.scrollerPopupStyle200,attrs:{view:"time",locale:e.locale,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,disable:e.disable,hour12:!e.hour24Format,"no-hours":e.noHours,"no-minutes":e.noMinutes,disabledMinutes:e.disabledMinutes,"border-color":"#21ba45","bar-color":"#21ba45","text-color":"white",color:"green-6","inner-text-color":"green-6","inner-color":"white"},on:{close:function(){e.showTimeScroller=!1}},model:{value:e.time2,callback:function(o){e.time2=o},expression:"time2"}})],1)],1)]},proxy:!0}]),model:{value:e.time2,callback:function(o){e.time2=o},expression:"time2"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"240px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("time-range")]),a("div",{staticClass:"text-subtitle2"},[e._v("Time Range Selection")])]),a("q-separator"),a("q-card-section",[a("q-scroller",{staticStyle:{height:"200px"},attrs:{view:"time-range",locale:e.locale,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#3f51b5","bar-color":"#FF0000","text-color":"white",color:"indigo-6","inner-text-color":"indigo-6","inner-color":"white",hour12:!e.hour24Format,"start-no-hours":e.noHours,"start-no-minutes":e.noMinutes,"end-no-hours":e.noHours,"end-no-minutes":e.noMinutes},model:{value:e.timeRange,callback:function(o){e.timeRange=o},expression:"timeRange"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"240px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("time-range")]),a("div",{staticClass:"text-subtitle2"},[e._v("Using QInput")])]),a("q-separator"),a("q-card-section",[a("q-input",{attrs:{color:"orange-6",filled:"",label:"Enter time ranges",mask:"##:## - ##:##",rules:[function(o){return e.validateTime(o)||"Invalid time format"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-clock"}},[a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showTimeRangeScroller,callback:function(o){e.showTimeRangeScroller=o},expression:"showTimeRangeScroller"}},[a("q-scroller",{style:e.scrollerPopupStyle200,attrs:{view:"time-range",locale:e.locale,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#FF8C00","bar-color":"#FF8C00","text-color":"white",color:"orange-6","inner-text-color":"orange-6","inner-color":"white",hour12:!e.hour24Format,"start-no-hours":e.noHours,"start-no-minutes":e.noMinutes,"end-no-hours":e.noHours,"end-no-minutes":e.noMinutes},on:{close:function(){e.showTimeRangeScroller=!1}},model:{value:e.timeRange,callback:function(o){e.timeRange=o},expression:"timeRange"}})],1)],1)]},proxy:!0}]),model:{value:e.timeRangeInput,callback:function(o){e.timeRangeInput=o},expression:"timeRangeInput"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"232px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("date")]),a("div",{staticClass:"text-subtitle2"},[e._v("Year, Month and Day Selection")])]),a("q-separator"),a("q-card-section",[a("q-scroller",{staticStyle:{height:"200px"},attrs:{view:"date",locale:e.locale,"short-year-label":e.shortYearLabel,"show-month-label":e.showMonthLabel,"short-month-label":e.shortMonthLabel,"short-day-label":e.shortDayLabel,"no-years":e.noYears,"no-months":e.noMonths,"no-days":e.noDays,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#33691e","bar-color":"#33691e",color:"light-green-6","background-color":"white","inner-color":"white","inner-background-color":"light-green-6"},model:{value:e.date1,callback:function(o){e.date1=o},expression:"date1"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"232px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("date")]),a("div",{staticClass:"text-subtitle2"},[e._v("Using QInput")])]),a("q-separator"),a("q-card-section",[a("q-input",{attrs:{color:"deep-orange-8",filled:"",label:"Enter date",mask:"####-##-##"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-calendar"}},[a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showDateScroller,callback:function(o){e.showDateScroller=o},expression:"showDateScroller"}},[a("q-scroller",{style:e.scrollerPopupStyle200,attrs:{view:"date",locale:e.locale,"short-year-label":e.shortYearLabel,"show-month-label":e.showMonthLabel,"short-month-label":e.shortMonthLabel,"short-day-label":e.shortDayLabel,"no-years":e.noYears,"no-months":e.noMonths,"no-days":e.noDays,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#e64a19","bar-color":"#e64a19","text-color":"deep-orange-3",color:"deep-orange-8","inner-text-color":"deep-orange-8","inner-color":"deep-orange-3"},on:{close:function(){e.showDateScroller=!1}},model:{value:e.date1,callback:function(o){e.date1=o},expression:"date1"}})],1)],1)]},proxy:!0}]),model:{value:e.date1,callback:function(o){e.date1=o},expression:"date1"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"340px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("date-range")]),a("div",{staticClass:"text-subtitle2"},[e._v("Date Range Selection")])]),a("q-separator"),a("q-card-section",[a("q-scroller",{staticStyle:{height:"200px"},attrs:{view:"date-range",locale:e.locale,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#607d8b","bar-color":"#FFFF00","text-color":"blue-grey-6",color:"white","inner-text-color":"white","inner-color":"blue-grey-6","disabled-text-color":"yellow-2","start-short-year-label":e.shortYearLabel,"start-show-month-label":e.showMonthLabel,"start-short-month-label":e.shortMonthLabel,"start-short-day-label":e.shortDayLabel,"start-no-years":e.noYears,"start-no-months":e.noMonths,"start-no-days":e.noDays,"end-short-year-label":e.shortYearLabel,"end-show-month-label":e.showMonthLabel,"end-short-month-label":e.shortMonthLabel,"end-short-day-label":e.shortDayLabel,"end-no-years":e.noYears,"end-no-months":e.noMonths,"end-no-days":e.noDays},model:{value:e.dateRange,callback:function(o){e.dateRange=o},expression:"dateRange"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"292px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("date-range")]),a("div",{staticClass:"text-subtitle2"},[e._v("Using QInput")])]),a("q-separator"),a("q-card-section",[a("q-input",{attrs:{color:"grey-8",filled:"",label:"Enter date range",mask:"####-##-## - ####-##-##"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-calendar"}},[a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showDateRangeScroller,callback:function(o){e.showDateRangeScroller=o},expression:"showDateRangeScroller"}},[a("q-scroller",{style:e.scrollerPopupStyle280,attrs:{view:"date-range",locale:e.locale,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#795548","bar-color":"#795548","text-color":"yellow-6",color:"brown-6","inner-text-color":"brown-6","inner-color":"yellow-6","start-short-year-label":e.shortYearLabel,"start-show-month-label":e.showMonthLabel,"start-short-month-label":e.shortMonthLabel,"start-short-day-label":e.shortDayLabel,"start-no-years":e.noYears,"start-no-months":e.noMonths,"start-no-days":e.noDays,"end-short-year-label":e.shortYearLabel,"end-show-month-label":e.showMonthLabel,"end-short-month-label":e.shortMonthLabel,"end-short-day-label":e.shortDayLabel,"end-no-years":e.noYears,"end-no-months":e.noMonths,"end-no-days":e.noDays},on:{close:function(){e.showDateRangeScroller=!1}},model:{value:e.dateRange,callback:function(o){e.dateRange=o},expression:"dateRange"}})],1)],1)]},proxy:!0}]),model:{value:e.dateRangeInput,callback:function(o){e.dateRangeInput=o},expression:"dateRangeInput"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"340px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("date-time")]),a("div",{staticClass:"text-subtitle2"},[e._v("Date and Time Selection")])]),a("q-separator"),a("q-card-section",[a("q-scroller",{staticStyle:{height:"200px"},attrs:{view:"date-time",locale:e.locale,"short-year-label":e.shortYearLabel,"show-month-label":e.showMonthLabel,"short-month-label":e.shortMonthLabel,"short-day-label":e.shortDayLabel,"no-years":e.noYears,"no-months":e.noMonths,"no-days":e.noDays,"hour24-format":e.hour24Format,"no-hours":e.noHours,"no-minutes":e.noMinutes,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#009688","bar-color":"orange-8",color:"teal-6","background-color":"white","inner-color":"white","inner-background-color":"teal-6"},model:{value:e.dateTime1,callback:function(o){e.dateTime1=o},expression:"dateTime1"}})],1)],1),a("q-card",{staticStyle:{width:"100%","max-width":"340px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("date-time")]),a("div",{staticClass:"text-subtitle2"},[e._v("Using QInput")])]),a("q-separator"),a("q-card-section",[a("q-input",{attrs:{color:"brown-8",filled:"",label:"Enter date and time",mask:"####-##-## ##:##"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-calendar"}},[a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showDateTimeScroller,callback:function(o){e.showDateTimeScroller=o},expression:"showDateTimeScroller"}},[a("q-scroller",{style:e.scrollerPopupStyle200,attrs:{view:"date-time",locale:e.locale,"short-year-label":e.shortYearLabel,"show-month-label":e.showMonthLabel,"short-month-label":e.shortMonthLabel,"short-day-label":e.shortDayLabel,"no-years":e.noYears,"no-months":e.noMonths,"no-days":e.noDays,hour12:!e.hour24Format,"no-hours":e.noHours,"no-minutes":e.noMinutes,"rounded-borders":e.roundedBorders,"vertical-bar":e.verticalBar,"no-header":e.noHeader,"no-footer":e.noFooter,dense:e.dense,disable:e.disable,"no-border":e.noBorder,"no-shadow":e.noShadow,"border-color":"#795548","bar-color":"#FFFF00","text-color":"brown-6",color:"white","inner-color":"white","inner-text-color":"brown-6"},on:{close:function(){e.showDateTimeScroller=!1}},model:{value:e.dateTime1,callback:function(o){e.dateTime1=o},expression:"dateTime1"}})],1)],1)]},proxy:!0}]),model:{value:e.dateTime1,callback:function(o){e.dateTime1=o},expression:"dateTime1"}})],1)],1)],1)])},r=[],n=(a("25f0"),a("1276"),a("498a"),a("ded3")),l=a.n(n),s=a("2f62"),i={name:"Scroller",data(){return{scrollerModel:"Elephant",showScroller:!1,showTimeScroller:!1,showTimeRangeScroller:!1,showDateScroller:!1,showDateRangeScroller:!1,showDateTimeScroller:!1,time1:"11:05",time2:"05:15",time3:"07:22",time4:"11:30",date1:"2019-04-03",date2:"2019-04-03",dateTime1:"2019-05-10 06:30",timeRange:["09:05","23:30"],timeRangeInput:"09:05 - 23:30",dateRange:["2019-08-08","2019-09-04"],dateRangeInput:"2019-08-08 - 2019-09-04",disabledMinutes:[1,2,5,6,7,8,9],data:[{value:"Anteater",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Baboons",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Cheetah",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Chimpanzee",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Elephant",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Giant Pandas",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Gibbon",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Giraffe",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Gorilla",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Hippopotamus",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Jaguar",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Koala",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Komodo Dragon",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Lemurs",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Lion",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Meerkat",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Monkey",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Orangutan",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Penguin",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Polar Bear",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Red Panda",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Rhinoceros",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Ring-tailed Lemur",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Sea lion",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Sloth",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Tiger",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Wallaby (Kangaroo)",noCaps:!0,iconRight:"",disabled:!1,align:"around"},{value:"Zebra",noCaps:!0,iconRight:"",disabled:!1,align:"around"}]}},computed:l()(l()({},Object(s["b"])({locale:"scroller/locale",titlebarHeight:"common/titlebarHeight",roundedBorders:"scroller/roundedBorders",verticalBar:"scroller/verticalBar",noHeader:"scroller/noHeader",noFooter:"scroller/noFooter",disable:"scroller/disable",dense:"scroller/dense",noBorder:"scroller/noBorder",noShadow:"scroller/noShadow",hour24Format:"scroller/hour24Format",noHours:"scroller/noHours",noMinutes:"scroller/noMinutes",shortYearLabel:"scroller/shortYearLabel",shortMonthLabel:"scroller/shortMonthLabel",showMonthLabel:"scroller/showMonthLabel",shortDayLabel:"scroller/shortDayLabel",showWeekdayLabel:"scroller/showWeekdayLabel",noYears:"scroller/noYears",noMonths:"scroller/noMonths",noDays:"scroller/noDays"})),{},{items(){return this.data},scrollerPopupStyle200(){return this.$q.screen.lt.sm?{width:"100vw",height:"400px"}:{maxHeight:"400px",height:"200px",width:"200px"}},scrollerPopupStyle280(){return this.$q.screen.lt.sm?{width:"100vw",height:"400px"}:{maxHeight:"400px",height:"200px",width:"280px"}}}),watch:{scrollerModel(e){},timeRangeInput(e){const o=e.split(" - ");o[0]===this.timeRange[0]&&o[1]===this.timeRange[1]||(this.timeRange[0]=o[0],this.timeRange[1]=o[1])},timeRange(e){const o=Object.prototype.toString.call(e);"[object Array]"===o&&(this.timeRangeInput=`${e[0]} - ${e[1]}`)},dateRangeInput(e){const o=e.split(" - ");o[0]===this.dateRange[0]&&o[1]===this.dateRange[1]||(this.dateRange[0]=o[0],this.dateRange[1]=o[1])},dateRange(e){const o=Object.prototype.toString.call(e);"[object Array]"===o&&(this.dateRangeInput=`${e[0]} - ${e[1]}`)}},methods:{validateTime(e){const o=this.timeRangeInput.split("-");if(2===o.length){const e=o[0].trim(),a=o[1].trim();if(this.isValidTime(e)&&this.isValidTime(a))return!0}return!1},isValidTime(e){const o=e.split(":");if(2===o.length){const e=parseInt(o[0],10),a=parseInt(o[1],10);if(e>=0&&e<24&&a>=0&&a<60)return!0}return!1}}},d=i,c=a("2877"),h=a("9989"),u=a("f09f"),b=a("a370"),p=a("eb85"),m=a("27f9"),g=a("0016"),w=a("7cbe"),v=a("eebe"),x=a.n(v),y=Object(c["a"])(d,t,r,!1,null,null,null);o["default"]=y.exports;x()(y,"components",{QPage:h["a"],QCard:u["a"],QCardSection:b["a"],QSeparator:p["a"],QInput:m["a"],QIcon:g["a"],QPopupProxy:w["a"]})}}]);