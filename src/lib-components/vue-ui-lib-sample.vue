<script>
export default {
  name: 'VueUiLibSample', // vue component name  
};
</script>

<template>
  <v-app>
  <!-- Must have the app property -->
  <v-app-bar app></v-app-bar>

  <v-main>
    <v-btn>ADs</v-btn>
  </v-main>
</v-app>
</template>

<style scoped>
  .vue-ui-lib-sample {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .vue-ui-lib-sample p {
    margin: 0 0 1em;
  }
</style>
