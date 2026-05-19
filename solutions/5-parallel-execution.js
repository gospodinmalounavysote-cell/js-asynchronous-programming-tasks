import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirpath, callback) => {
  fs.readdir(dirpath, (readdirError, files) => {
    if (readdirError) {
      callback(readdirError);
      return;
    }
    async.map(
      files,
      (file, mapCallback) => {
        const filepath = path.join(dirpath, file);
        fs.stat(filepath, (statError, stats) => {
          if (statError) {
            mapCallback(statError);
            return;
          }
          mapCallback(null, stats.isFile() ? stats.size : 0);
        });
      },
      (mapError, sizes) => {
        if (mapError) {
          callback(mapError);
          return;
        }
        callback(null, _.sumBy(sizes));
      },
    );
  });
};
// END
