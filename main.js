
module.exports = function(pin) {
    this.in = AnalogIn(pin);
    this.beta = 3975;
}

module.exports.prototype.read = function() {
    var value = this.in.read_u16();
    var resistance = 10000.0 * ((65536 / value) - 1);
    var temperature = (1/((log(resistance/10000.0)/this.beta) + (1.0/298.15)))-273.15;

    return temperature;
}
