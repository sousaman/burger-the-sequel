// Requiring in ORM
var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function (burger, cb) {
        orm.create("burgers", ["burger_name"], [burger], function(res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;