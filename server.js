const express = require('express');
const app = express();
const port = 5000;

// Setting up the public directory
app.use(express.static('./public'));

app.listen(port, () => console.log(`listening on port ${port}!`));