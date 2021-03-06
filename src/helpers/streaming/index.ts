import fs from "fs";
import * as config from "../../config";

if (!fs.existsSync(`${config.TEMP_FILE_UPLOAD}`)) {
  fs.mkdirSync(`${config.TEMP_FILE_UPLOAD}`);
}

const streaming = ({ stream, filename }: any) => {
  const path = `${config.TEMP_FILE_UPLOAD}/${filename}`;
  return new Promise((resolve, reject) =>
    stream
      .on("error", (error: any) => {
        if (stream.truncated)
          // Delete the truncated file.
          fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on("error", (error: any) => reject(error))
      .on("finish", () => resolve({ path }))
  );
};

export default streaming;
