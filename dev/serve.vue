<script>
import Vue from 'vue';
import { MyButton } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    MyButton,
  }
});
</script>

<template>
  <div id="app">
    <v-app>
      <v-main>
        <my-button label="new" />
      </v-main>
    </v-app>
  </div>
</template>
