const fs = require('fs');
const path = require('path');

const demoDir = path.join(__dirname, 'demo-files');
const textFile = path.join(demoDir, 'sample.txt');
const jsonFile = path.join(demoDir, 'data.json');

function fsDemo() {
    try {
        // Check whether demo directory exists.
        if (!fs.existsSync(demoDir)) {
            console.log(demoDir, " doesn't exists")
            fs.mkdirSync(demoDir)
            console.log('Directory created: ', demoDir)
        }

        // Write contents into a text file.
        const textContent = "Hello from Rajan.\nThis is a sample text file."
        fs.writeFileSync(textFile, textContent, {
            mode: 0o640
        })
        console.log("Text file written: ", textFile)

        const jsonData = {
            name: 'Rathinam Trainers',
            version: 'v1.0.0',
            demo_features: ['fs', 'path', 'os'],
            timestamp: new Date().toISOString()
        }
        fs.writeFileSync(jsonFile, JSON.stringify(jsonData, null, 2), {
            mode: 0o600
        } )
        console.log('JSON File Created: ', jsonFile)

        // Demo: File Statistics
        const textStats = fs.statSync(textFile)
        console.log("Text File Stats:")
        console.log(`  Size: ${textStats.size} bytes`)
        console.log(`  Created: ${textStats.birthtime}`)
        console.log(`  Modified: ${textStats.mtime}`)
        console.log(`  Is File: ${textStats.isFile()}`)
        console.log(`  Is Directory: ${textStats.isDirectory()}`)

        // Reading Directory contents...
        const dirContents = fs.readdirSync(demoDir)
        console.log(`Directory Contents: ${dirContents}`)

        // Working with File permissions...
        console.log('File Permissions: ', (textStats.mode & parseInt('777', 8)).toString(8))

        // Copying a file...
        const copyFile = path.join(demoDir, 'sample-copy.txt')
        fs.copyFileSync(textFile, copyFile)
        console.log("File Copied to ", copyFile)

        // Appending to a file...
        fs.appendFileSync(textFile, "\nThis line was appended. Very important data")
        console.log("Content appended to file.")

        // Reading the updated file...
        const updatedContent = fs.readFileSync(textFile, 'utf8')
        console.log('Updated File Contents: ')
        console.log('---------------------- ')
        console.log(updatedContent)
    } catch (error) {
        console.log("Error occured: ", error.message)
        console.log("Call Stack: ", error.stack)
    }

    console.log("Demo successfully completed.")
}

async function asyncFsDemo() {
    const asyncFile = path.join(demoDir, 'async-demo.txt')

    try {
        // Write file asynchronously...
        await fs.promises.writeFile(asyncFile, "This was written asynchronously", 'utf8')
        console.log("Async write completed")

        // Read file asynchronously...
        const asyncContent = await fs.promises.readFile(asyncFile, 'utf8')
        console.log('Async file content: ', asyncContent)
    } catch (error) {
        console.error("Async operation error: ", error.message)
    }
}


fsDemo()
asyncFsDemo()