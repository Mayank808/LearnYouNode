const http = require('http')

let url = process.argv[2]

http.get(url, (res) => {

    res.on('data', (d) => {
        process.stdout.write(d + "\n");
    });

}).on('error', (error) => {
    console.error(error);
})

// second solution 
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)

    
