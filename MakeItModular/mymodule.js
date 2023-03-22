const fs = require('fs')
const path = require('path')

module.exports = function (dirPath, ext, callback) {
    fs.readdir(dirPath, (err, data) => {
        if (err) return callback(err)    
        ext = '.' + ext
        const filteredFiles = data.filter(file => path.extname(file) === ext);
        callback(null, filteredFiles)
    })
}