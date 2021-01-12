<script>
import Vue from 'vue';
import { VueUiLibSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueUiLibSample,
  }
});
</script>

<template>
  <div id="app">
    <vue-ui-lib-sample />
  </div>
</template>
