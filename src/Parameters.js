const ArgumentParser = require("argparse").ArgumentParser;
const chalk = require("chalk");

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
      console.log(chalk.red("****************************"));
      console.log(chalk.yellow("Filename not entered :("));
      console.log(chalk.yellow("Examples"));
      console.log("FileCreator -f folder/fileName");
      console.log("FileCreator -f fileName");
      console.log(chalk.red("****************************"));
      process.exit(1);
    }
    return paramsFile;
  }
}

module.exports = Parameters;
