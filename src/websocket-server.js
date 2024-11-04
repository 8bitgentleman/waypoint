const WebSocket = require('ws');
const http = require('http');
const Y = require('yjs');
const { setupWSConnection } = require('y-websocket/bin/utils');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('okay');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req, { docName: 'my-document' });
});

server.listen(1234);
console.log('Listening to port 1234');