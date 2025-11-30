import { construction } from "./constant/construction";

// Load our library that generates the document
import Docxtemplater from "docxtemplater";
// Load PizZip library to load the docx/pptx/xlsx file in memory
import PizZip from "pizzip";
import expressionParser from "docxtemplater/expressions";

// Builtin file system utilities
import fs from "fs";
import path from "path";

// Load the docx file as binary content
const content = fs.readFileSync(
  path.join(__dirname, "doc", "d.docx"),
  "binary"
);
console.log(
  "File exists:",
  fs.existsSync(path.join(__dirname, "doc", "d.docx"))
);

// Unzip the content of the file
const zip = new PizZip(content);

/*
 * Parse the template.
 * This function throws an error if the template is invalid,
 * for example, if the template is "Hello {user" (missing closing tag)
 */
const parser = expressionParser.configure({
  filters: {}, // optional: define your custom filters here
});

const doc = new Docxtemplater(zip, {
  paragraphLoop: true,
  linebreaks: true,
  parser,
});

/*
 * Render the document : Replaces :
 * - {first_name} with John
 * - {last_name} with Doe,
 * ...
 */
doc.render(construction);

/*
 * Get the output document and export it as a Node.js buffer
 * This method is available since docxtemplater@3.62.0
 */
const buf = doc.toBuffer();

// Write the Buffer to a file
fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
/*
 * Instead of writing it to a file, you could also
 * let the user download it, store it in a database,
 * on AWS S3, ...
 */
