function Patitioning(clients){
  this.clients = clients;
}

Patitioning.prototype={
  _getClient:function(key){
    throw "subclass should implement _getclient method";
  },
  set: function(key, value){
    var client = this._getClient(key);
    client.set.apply(client,arguments);
  }
  get: function(key){
    var client = this._getClient(key);
    client.get.apply(client, arguments);
  }
}
module.exports = Patitioning;