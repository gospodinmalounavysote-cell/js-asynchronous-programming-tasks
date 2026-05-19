import fsp from 'fs/promises';

// BEGIN
export const touch = async (filepath) => {
  try {
    await fsp.access(filepath);
  } catch {
    await fsp.writeFile(filepath, '');
  }
};
// END