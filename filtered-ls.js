const fs = require('fs')
const path = require('path')

const dirPath = process.argv[2]
const ext = "." + process.argv[3]

fs.readdir(dirPath, (err, data) => {
    if (err) return console.error(err)    

    for (let i = 0; i < data.length; i++) {
        if (ext == path.extname(data[i])) {
            console.log(data[i])
        }
    }
    // const filteredFiles = data.filter(file => file.substring(file.length - ext.length) == ext);
    // for (let i = 0; i < filteredFiles.length; i++) {
    //     console.log(filteredFiles[i])
    // }
})