import { initialiseQS } from './algorithms/quickSort.js';
import { argv } from 'process';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
const args = process.argv;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    selectAlgorithm(args);
});

function selectAlgorithm(args) {
    switch (args[2]) {
        case 'quickSort':
            initialiseQS();
            break;
        default:
            console.log('oof');
    }
}
