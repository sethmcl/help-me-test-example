'use strict';

var fs = require('fs');

module.exports = FileInfo;

function FileInfo(path) {
  this.path = path;
};

FileInfo.prototype.getLength = function () {
  return fs.readFileSync(this.path, 'utf-8').length;
};
