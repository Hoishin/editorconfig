import fs from "fs";
import path from "path";

fs.copyFileSync(
	path.resolve(__dirname, "../.editorconfig"),
	path.resolve(__dirname, "../dist/editorconfig")
);
