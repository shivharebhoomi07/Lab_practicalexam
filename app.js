const readFileData = require('./src/reader');
const countData = require('./src/counter');
const writeFileData = require('./src/writer');

readFileData((err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }

    const { lines, words } = countData(data);

    const result = `Total Lines: ${lines}\nTotal Words: ${words}`;

    writeFileData(result, (err) => {
        if (err) {
            console.error('Error writing file:', err.message);
            return;
        }
        console.log('Result written to output.txt');
    });
});
