import fsp from 'fs/promises';

// BEGIN
export const getTypes = (paths) => paths.reduce(
  (promise, filepath) => promise.then((results) => fsp
    .stat(filepath)
    .then((stats) => [...results, stats.isDirectory() ? 'directory' : 'file'])
    .catch(() => [...results, null])),
  Promise.resolve([]),
);
// END