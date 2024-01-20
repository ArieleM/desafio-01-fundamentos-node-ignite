import http from 'node:http'

const server = http.createServer((req, res) =>{
    console.log('server run')
    return res.writeHead(404).end()
})

server.listen(3335)