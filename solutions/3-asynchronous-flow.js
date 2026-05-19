import fs from 'fs';

// BEGIN
export const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (error1, stat1) => {
    if (error1) {
      callback(error1);
      return;
    }
    fs.stat(filepath2, (error2, stat2) => {
      if (error2) {
        callback(error2);
        return;
      }
      callback(null, Math.sign(stat1.size - stat2.size));
    });
  });
};
// END