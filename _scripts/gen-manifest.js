const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function generateManifest(startPath) {
  const manifest = {
    manifest: "arweave/paths",
    version: "0.1.0",
    index: { path: "index.html" },
    paths: {},
  };

  function hashFile(filePath) {
    const data = fs.readFileSync(filePath);
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        traverseDirectory(filePath);
      } else if (stats.isFile()) {
        const relativePath = path.relative(startPath, filePath);
        const hash = hashFile(filePath);
        manifest.paths[relativePath] = { id: hash };
      }
    }
  }

  traverseDirectory(startPath);

  const manifestJson = JSON.stringify(manifest, null, 2);
  console.log(manifestJson);
}

// Check for command-line arguments
if (process.argv.length < 3) {
  console.error("Usage: node script.js <folder-to-scan>");
  process.exit(1);
}

const folderToScan = process.argv[2];
generateManifest(folderToScan);
