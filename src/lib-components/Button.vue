<template>
  <v-btn type="button" @click="onClick">{{ label }}</v-btn>
</template>

<script>
export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
