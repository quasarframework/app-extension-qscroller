<template>
  <div class="q-pa-md row q-gutter-sm full-width">
    <div class="row full-width">
      <div class="text-h4">'time' Scroller</div>
    </div>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        no-footer, value as string
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="valueStr"
          view="time"
          no-footer
          style="max-width: 100px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        no-footer, value as object
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="valueObj"
          view="time"
          no-footer
          style="max-width: 100px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        no-footer, value as array
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="valueArr"
          view="time"
          no-footer
          style="max-width: 100px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        no-footer, value as Date
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="valueDate"
          view="time"
          no-footer
          style="max-width: 100px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      valueStr: '09:00',
      valueObj: { hour: '09', minute: '10' },
      valueArr: [ '09', '20'],
      valueDate: new Date()
    }
  },

  watch: {
    valueStr (val) {
      /* eslint-disable-next-line */
      console.log('string:', val)
    },
    valueObj (val) {
      /* eslint-disable-next-line */
      console.log('object:', JSON.stringify(val))
    },
    valueArr (val) {
      /* eslint-disable-next-line */
      console.log('array:', JSON.stringify(val))
    },
    valueDate (val) {
      /* eslint-disable-next-line */
      console.log('date:', val)
    }
  }
}
</script>
