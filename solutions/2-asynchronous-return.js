import fs from 'fs';

// BEGIN
const write = async (filepath, data, callback) => {
  fs.writeFile(filepath, data, callback);
};

export default write;
// END