const ArgumentParser = require("argparse").ArgumentParser;

class Parameters {
  constructor() {
    this.parser = new ArgumentParser();
    this.parser.add_argument("-f", "--file", {
      help: `Enter the complete filename with de folder path, ok?.\n
      Example:
      -f ./folder1/folder2/FileName`,
    });
  }

  getPathFile() {
    const args = this.parser.parse_args();
    const paramsFile = args.file;
    if (!paramsFile) {
      console.error("Provide a filename :)");
      process.exit(1);
    }
    return paramsFile;
  }
}

module.exports = Parameters;
