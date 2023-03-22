const http = require('http')
const bl = require('bl')
var result = []

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(result[i])
    }
}

function getRequest(index) {
    http.get(process.argv[2 + index], (res) => {
        res.pipe(bl((err, data) => {
            if (err) return console.error(err)
            result[index] = data.toString()

            if (result.length == 3) {
                printResults()
            }
        }))
    })
}

for (let i = 0; i < 3; i++) {
    getRequest(i)
}

