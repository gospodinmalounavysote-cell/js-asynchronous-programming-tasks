import fsp from 'fs/promises';

// BEGIN
export const reverse = async (filepath) => {
  const content = await fsp.readFile(filepath, 'utf-8');
  const reversed = content.split('\n').reverse().join('\n');
  await fsp.writeFile(filepath, reversed);
};
// END