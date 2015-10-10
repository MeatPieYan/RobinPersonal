/**
 * Created by Robin on 15/10/10.
 */
module.exports = function (app, route) {


    return function(res, req, next) {
        req.send('hello world');
        next();
    };
}