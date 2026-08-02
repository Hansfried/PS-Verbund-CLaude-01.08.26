const fs = require("fs")
const path = require("path")

const root = path.join(__dirname, "..")

const targets = [
  { from: path.join(root, ".next", "static"), to: path.join(root, ".next", "standalone", ".next", "static") },
  { from: path.join(root, "public"), to: path.join(root, ".next", "standalone", "public") },
]

for (const { from, to } of targets) {
  if (!fs.existsSync(from)) {
    console.warn(`Skipping copy, source not found: ${from}`)
    continue
  }
  fs.cpSync(from, to, { recursive: true })
  console.log(`Copied ${from} -> ${to}`)
}
