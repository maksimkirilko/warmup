module.exports = function warmup(temperature) {
    const factor = 1.8;
    const value = 32;
    return temperature * factor + value;
};
