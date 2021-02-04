#!/usr/bin/env node

const runFileCreator = async () => {
  const chalk = require("chalk");

  const Parameters = require("../src/Parameters.js");
  const DefineFile = require("../src/DefineFile.js");
  const CreateFiles = require("../src/CreateFiles.js");

  const pathFile = new Parameters().getPathFile();
  const { files, fileName, folderName } = new DefineFile().getFilesToCreate(
    pathFile
  );
  await new CreateFiles().do(files);

  console.log(chalk.green("Success! Created fileName. :)"));
  console.log(chalk.blue("File"), fileName);
  console.log(chalk.blue("Folder"), `src/${folderName}`);
};

runFileCreator();
