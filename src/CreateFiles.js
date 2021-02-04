const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

class CreateFiles {
  constructor() {}

  async do(files) {
    files.map(async (el) => {
      await this.createFolder(el.filePath);
      fs.writeFileSync(el.filePath, el.fileContent);
    });

    return true;
  }

  async createFolder(filePath) {
    const pathName = path.dirname(filePath);
    if (!fs.existsSync(pathName)) {
      await mkdirp(pathName);
    }
  }
}

module.exports = CreateFiles;
