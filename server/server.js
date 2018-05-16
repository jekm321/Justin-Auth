const express = require('express');

const db = require('./_config/db');
const middleware = require('./_config/middleware');
const routes = require('./_config/routes');

const server = express();

db
    .connectTo('justinAuth')
    .then(() => console.log('\n=== API connected to justinAuth Databasse ===\n'))
    .catch(err => {
        console.log('\n *** ERROR cannot connect ***\n', err);
    });

middleware(server);
routes(server);

server.listen(5000, () => console.log('\n=== API running on port 5000 ===\n'));