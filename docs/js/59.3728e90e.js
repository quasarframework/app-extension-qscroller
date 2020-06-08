(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{8367:function(e,n,l){"use strict";l.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller1" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              no-header\n              rounded-borders\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller1 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller2" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              rounded-borders\n              text-color="yellow-7"\n              color="blue-8"\n              inner-text-color="yellow-7"\n              inner-color="blue-8"\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller2 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller3" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              no-header\n              no-footer\n              vertical-bar\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller3 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color="blue-8" filled v-model="value" label="Enter time" mask="##:##">\n      <template v-slot:append>\n        <q-icon name="far fa-clock" class="cursor-pointer">\n          <q-popup-proxy v-model="showScroller4" anchor="top right" self="bottom middle">\n            <q-scroller\n              v-model="value"\n              view="time"\n              no-header\n              vertical-bar\n              bar-color="green"\n              border-color="green"\n              :style="scrollerPopupStyle120"\n              @close="() => { showScroller4 = false }"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeQInput\',\n\n  data () {\n    return {\n      showScroller1: false,\n      showScroller2: false,\n      showScroller3: false,\n      showScroller4: false,\n      value: \'\'\n    }\n  },\n\n  computed: {\n    scrollerPopupStyle120 () {\n      if (this.$q.screen.lt.sm) {\n        return {\n          width: \'90vw\',\n          height: \'70vh\'\n        }\n      } else {\n        return {\n          maxHeight: \'200px\',\n          height: \'200px\',\n          width: \'120px\'\n        }\n      }\n    }\n  }\n}\n<\/script>\n'}}]);