import { createServer } from 'node:http'

const { HOST, PORT } = process.env

const server = createServer((req, res) => {
    console.log('request received')
})


server.listen(PORT, () => {
    console.log(`Server listen on http://${HOST}:${PORT}`)
})
