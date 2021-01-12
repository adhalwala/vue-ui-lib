import MyButton from './../lib-components/Button.vue';
// import vuetify from './../plugins/vuetify'

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    
  },
  decorators: [() => ({ template: '<v-app><story/></v-app>' })],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Cancel',
};
