(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e59e2"],{"94f7":function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-minute-interval="5"\n      end-minute-interval="5"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-hour-interval="2"\n      end-hour-interval="2"\n      style="max-width: 150px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-no-minutes\n      end-no-minutes\n      style="max-width: 110px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time-range"\n      no-footer\n      start-no-hours\n      end-no-hours\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeRangeIntervals\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'}}]);