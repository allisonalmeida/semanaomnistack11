const server = require('./app');

const port = 3333;

server.listen(port, () => console.log(`Started Server on port:${port}`));
