<template>
  <div class="q-pa-md row justify-evenly q-gutter-sm">
    <q-scroller
      v-model="value"
      view="string"
      :items="items"
      no-footer
      disable
      style="max-width: 200px; height: 200px;"
    ></q-scroller>
    <q-scroller
      v-model="value"
      view="string"
      :items="items"
      no-footer
      dense
      disable
      style="max-width: 120px; height: 200px;"
    ></q-scroller>

  </div>
</template>

<script>
export default {
  name: 'StringQInput',

  data () {
    return {
      value: '',
      items: [
        { value: 'Anteater', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Baboons', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Cheetah', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Chimpanzee', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Elephant', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Giant Pandas', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Gibbon', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Giraffe', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Gorilla', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Hippopotamus', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Jaguar', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Koala', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Komodo Dragon', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Lemurs', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Lion', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Meerkat', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Monkey', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Orangutan', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Penguin', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Polar Bear', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Red Panda', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Rhinoceros', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Ring-tailed Lemur', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Sea lion', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Sloth', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Tiger', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Wallaby (Kangaroo)', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },
        { value: 'Zebra', noCaps: true, iconRight: void 0, disabled: false, align: 'around' }
      ]
    }
  }
}
</script>
