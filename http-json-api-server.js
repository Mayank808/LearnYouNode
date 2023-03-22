const http = require('http')
const url = require('url')

const port = process.argv[2]
const date = new Date()

let server = http.createServer((req, res) => {
    const reqUrl = new url.parse(req.url, true);
    if (req.method === 'GET' && reqUrl.pathname === '/api/parsetime') {
        var date = new Date(reqUrl.query.iso)
        const data = {hour : date.getHours(), 
                    minute : date.getMinutes(), 
                    second : date.getSeconds()}
        const jsonData = JSON.stringify(data)
        res.writeHead(200, { 'Content-Type': 'application/json' }) 
        res.end(jsonData)
    } else if (req.method === 'GET' && reqUrl.pathname === '/api/unixtime') {
        var date = new Date(reqUrl.query.iso)
        const data = {unixtime : date.getTime()}
        const jsonData = JSON.stringify(data)
        res.writeHead(200, { 'Content-Type': 'application/json' }) 
        res.end(jsonData)
    }

}).listen(port)

