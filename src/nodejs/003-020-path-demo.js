const path = require('path')

// Basic Path Information.
console.log('Current Directory: ', __dirname)
console.log('Current File: ', __filename)
console.log('Process Working Directory: ', process.cwd())

// Path Separator and delimiter.
console.log('Path Separator: ', path.sep)
console.log('Path Delimitr: ', path.delimiter)

// Parsing File Paths.
// const samplePath = "/home/rajan/documents/project/file.js"
const samplePath = "D:\\dev\\WebStorm\\FullStackTraining\\src\\nodejs\\003-020-path-demo.js"
const parsed = path.parse(samplePath)

console.log('Sample Path: ', samplePath)
console.log('Parsed Path: ', parsed)
console.log('  Root: ', parsed.root)
console.log('  Directory: ', parsed.dir)
console.log('  Base (Filename + ext): ', parsed.base)
console.log('  Name (Filename only): ', parsed.name)
console.log('  Extension: ', parsed.ext)

// Extracting Path components
console.log("Director name: ", path.dirname(samplePath))
console.log("Base name: ", path.basename(samplePath))
console.log("Extension name: ", path.extname(samplePath))
console.log("Base without extension: ", path.basename(samplePath, path.extname(samplePath)))


// Building paths
const buildPath = path.join("users", "rajan", "documents", "secret.txt")
console.log("Joined path: ", buildPath)

const resolvedPath = path.resolve("users", "rajan", "documents", "secret.txt")
console.log("Resolved path: ", resolvedPath)

const formattedPath = path.format({
    root: '/',
    dir: '/home/rajan/projects',
    base: 'app.js'
})
console.log('Formatted Path: ', formattedPath)

// Relative Path
const from = "/home/rajan/projects/app"
const to = "/home/prince/projects/data/config.json"

const relativePath = path.relative(from, to)
console.log(`Relative path from "${from}" to "${to}": ${relativePath}`)


// Checking if path is absolute.
const testPath = "/home/rajan/app.js"
const testPath2 = "../app.js"
const testPath3 = "app.js"

console.log(`"${testPath}" is absolute: ${path.isAbsolute(testPath)}`)
console.log(`"${testPath2}" is absolute: ${path.isAbsolute(testPath2)}`)
console.log(`"${testPath3}" is absolute: ${path.isAbsolute(testPath3)}`)


// Cross-platform path handling.
const windowsPath = "D:\\dev\\WebStorm\\FullStackTraining\\src\\nodejs\\\\003-020-path-demo.js"
console.log("Original  : ", windowsPath)
console.log("Normalized: ", path.normalize(windowsPath))
console.log("POSIX version: ", path.posix.normalize(windowsPath.replace(/\\/g, '/')))