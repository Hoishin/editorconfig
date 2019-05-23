#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import updateNotifier from 'update-notifier';

updateNotifier({pkg: require('../package.json')}).notify();

const readStream = fs.createReadStream(path.resolve(__dirname, 'editorconfig'));
const writeStream = fs.createWriteStream('.editorconfig');

readStream.pipe(writeStream);