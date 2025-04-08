const express = require('express');
const app = express();

const PORT = 8000;
app.listen(PORT, 'localhost', (err) => {
    if(err) throw err;
    console.log('server is started');
})

