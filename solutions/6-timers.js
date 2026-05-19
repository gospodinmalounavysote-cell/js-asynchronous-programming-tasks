import fs from 'fs';

// BEGIN
const watch = (filepath, interval, callback) => {
  let lastMtime = Date.now();

  const id = setInterval(() => {
    fs.stat(filepath, (error, stats) => {
      if (error) {
        clearInterval(id);
        callback(error);
        return;
      }
      if (stats.mtimeMs > lastMtime) {
        lastMtime = stats.mtimeMs;
        callback(null);
      }
    });
  }, interval);

  return id;
};

export default watch;
// END
