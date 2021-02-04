const path = require("path");
const fs = require("fs");
const { paramCase } = require("param-case");

class DefineFile {
  constructor() {
  }

  getFilesToCreate(pathFile) {
    const { fileName, folderName } = this.splitPathFile(pathFile);
    const fileInfo = {
      appFolder: path.resolve("./"),
      folderName,
      fileName,
    };

    let files = [];
    files.push(this.getFileContentAndFilePathVue(fileInfo));
    files.push(this.getFileContentAndFilePathSCSS(fileInfo));

    return {files, fileName, folderName};
  }

  splitPathFile(pathFile) {
    const splitedParts = pathFile.split(/\//gi);
    const fileName = splitedParts[splitedParts.length - 1];

    delete splitedParts[splitedParts.length - 1];
    const folderName = splitedParts.join("/");

    return { folderName, fileName };
  }

  getFileContentAndFilePathVue = ({ appFolder, folderName, fileName }) => {
    const filePath = path.join(
      appFolder,
      './src',
      folderName,
      `${fileName}.vue`
    );
    const className = paramCase(fileName);

    const fileContent = `<style src="./${fileName}.scss" lang="scss" scoped></style>
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
</script>
    `;

    return { fileContent, filePath };
  };

  getFileContentAndFilePathSCSS = ({ appFolder, folderName, fileName }) => {
    const filePath = path.join(
      appFolder,
      './src',
      folderName,
      `${fileName}.scss`
    );
    const className = paramCase(fileName);

    const fileContent = `.${className} {}`;

    return { fileContent, filePath };
  };
}

module.exports = DefineFile;
