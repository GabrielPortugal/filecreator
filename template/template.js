class Template {
  static getVue = ({ fileName, className }) => {
    const tmp = `<style src="./${fileName}.scss" lang="scss" scoped></style>
<template lang="html">
  <section class="${className}">
  </section>
</template>
<script>
export default {
  name: "${fileName}",

  components: {},

  mixins: [],

  data() {
    return {};
  },

  computed: {},

  watch: {},

  mounted() {},

  beforeDestroy() {},
  
  methods: {},
};
</script>`;

    return tmp;
  };

  static getScss = (className) => {
    return `.${className} {}`;
  };
}

module.exports = Template;
