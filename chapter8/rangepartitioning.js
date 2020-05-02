var util = require("util");
var Partitioning = require("partitioning");

function RangePartitioning(clients) {
  Partitioning.call(this, clients);
}

util.inherits(RangePartitioning, Partitioning);


RangePartitioning.prototype._getClient = function(key) {
  var possibleValues = '0123456789abcdefghijklmnopqrstuvwxyz';
  var rangeSize = possibleValues.length / this.clients.length;

  for (var i = 0, clientIndex = 0 ; i < possibleValues.length ;i += rangeSize, clientIndex++) {
    var range = possibleValues.slice(i, i + rangeSize);
    if (range.indexOf(key[0].toLowerCase()) != -1) {
      return this.clients[clientIndex];
    }
  }
  return this.clients[0];
};