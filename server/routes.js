/**
 * Created by Robin on 15/10/10.
 */
module.exports = {
    '/': require('./controllers/indexController'),
    '/Blogs': require('./controllers/blog/listController'),
    '/Blog/detail': require('./controllers/blog/detailController'),
    '/Owner': require('./controllers/user/ownerController')
};

