(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2311a7"],{eeb3:function(n,e,l){"use strict";l.r(e),e["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="valueStr"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueObj"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueArr"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="valueDate"\n      view="date"\n      no-footer\n      style="max-width: 130px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'StringBasic\',\n\n  data () {\n    return {\n      valueStr: \'2020-10-01\',\n      valueObj: { year: \'2020\', month: \'11\', day: 10 },\n      valueArr: [2020, 12, \'25\'],\n      valueDate: new Date()\n    }\n  },\n\n  watch: {\n    valueStr (val) {\n      /* eslint-disable-next-line */\n      console.log(\'string:\', val)\n    },\n    valueObj (val) {\n      /* eslint-disable-next-line */\n      console.log(\'object:\', JSON.stringify(val))\n    },\n    valueArr (val) {\n      /* eslint-disable-next-line */\n      console.log(\'array:\', JSON.stringify(val))\n    },\n    valueDate (val) {\n      /* eslint-disable-next-line */\n      console.log(\'date:\', val)\n    }\n  }\n}\n<\/script>\n'}}]);