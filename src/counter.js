function countData(data) {
    const lines = data.trim().split('\n').length;
    const words = data.trim().split(/\s+/).length;

    return { lines, words };
}

module.exports = countData;
