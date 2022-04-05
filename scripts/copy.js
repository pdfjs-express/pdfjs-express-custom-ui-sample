const fs = require('fs-extra');
const path = require('path');

const copyFrom = path.resolve(__dirname, '../node_modules/@pdftron/pdfjs-express/public/core');
const copyTo = path.resolve(__dirname, '../public/pdfjsexpress/core');

fs.ensureDirSync(copyTo);
fs.copySync(copyFrom, copyTo)
