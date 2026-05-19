import fsp from 'fs/promises';

// BEGIN
export const exchange = async (firstPath, secondPath) => {
  const [firstContent, secondContent] = await Promise.all([
    fsp.readFile(firstPath, 'utf-8'),
    fsp.readFile(secondPath, 'utf-8'),
  ]);
  await Promise.all([
    fsp.writeFile(firstPath, secondContent),
    fsp.writeFile(secondPath, firstContent),
  ]);
};
// END