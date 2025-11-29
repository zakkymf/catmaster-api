const fs = require("fs");
const path = require("path");

const dataPath = path.resolve(__dirname, "../data/owners.json");

const read = () => JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const write = (data) =>
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

module.exports = { read, write };
