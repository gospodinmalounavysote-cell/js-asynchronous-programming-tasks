import fs from 'fs';

// BEGIN
const print = async (filepath) => {
  fs.readFile(filepath, 'utf-8', (error, data) => {
    console.log(data);
  });
};

export default print;
// END
