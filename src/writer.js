const fs = require('fs');

function writeFileData(result, callback) {
    fs.writeFile('output.txt', result, (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

module.exports = writeFileData;
