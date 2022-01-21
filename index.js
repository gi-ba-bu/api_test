const port = 3000;

const app = require('./server.js');

app.listen(port, () => { console.log(`Express now departing from port ${port}`)});
