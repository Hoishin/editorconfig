#!/usr/bin/env node

import fs from "fs";
import path from "path";

const readStream = fs.createReadStream(path.resolve(__dirname, "editorconfig"));
const writeStream = fs.createWriteStream(".editorconfig");

readStream.pipe(writeStream);
