const net = require('net');

const port = process.argv[2]
var currentDate = new Date();

const tcpServer = net.createServer()

function addZero (i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    const d = new Date()
    return d.getFullYear() + '-' + addZero(d.getMonth() + 1) + '-' + addZero(d.getDate()) + ' ' + addZero(d.getHours()) + ':' + addZero(d.getMinutes())
}

tcpServer.on('connection', (socket) => {
    socket.end(now() + "\n")
})

tcpServer.listen(port)