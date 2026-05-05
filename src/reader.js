const fs = require('fs');

function readFileData(callback) {
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

module.exports = readFileData;
