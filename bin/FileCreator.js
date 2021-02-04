#!/usr/bin/env node

const runFileCreator = async () => {
  const Parameters = require("../src/Parameters.js");
  const DefineFile = require("../src/DefineFile.js");
  const CreateFiles = require("../src/CreateFiles.js");

  const pathFile = new Parameters().getPathFile();
  const { files, fileName, folderName } = new DefineFile().getFilesToCreate(
    pathFile
  );
  await new CreateFiles().do(files);

  console.log(
    `Success! Created file. :)\nFile name: ${fileName}\nFolder: src/${folderName}`
  );
};

runFileCreator();
