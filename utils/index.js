import { pathToFileURL } from "url";

export const getDirUrl = (dirName) => {
  return pathToFileURL(`${process.cwd()}/${dirName}/`);
};
