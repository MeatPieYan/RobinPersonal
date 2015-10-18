/**
 * Created by Robin on 15/10/14.
 */


exports.getDAO = function (MyModel) {
    var DAO = function() {};

    DAO.prototype.save = function(obj, callback) {
        var instance = new MyModel(obj);
        instance.save(function(err) {
            callback(err);
        });
    };

    DAO.prototype.find = function(obj, callback) {
        var obj = obj || {};
        MyModel.find(obj, function (err, docs) {
            callback(err, docs);
        })
    };

    return DAO;
};