const fs = require('fs');
const path = require('path');

const getParticipantFolders = () => {
  const srcPath = path.join(__dirname, '../src');
  return fs.readdirSync(srcPath).filter(file =>
    fs.statSync(path.join(srcPath, file))
  );
};

module.exports = getParticipantFolders;

