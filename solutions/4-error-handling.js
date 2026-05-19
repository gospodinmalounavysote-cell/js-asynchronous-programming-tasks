import fs from 'fs';

// BEGIN
export const move = (from, to, callback) => {
  fs.readFile(from, (readError, data) => {
    if (readError) {
      callback(readError);
      return;
    }
    fs.writeFile(to, data, (writeError) => {
      if (writeError) {
        callback(writeError);
        return;
      }
      fs.unlink(from, callback);
    });
  });
};
// END
