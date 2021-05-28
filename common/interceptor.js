/*
 * 路由拦截器
 */

module.exports = function(){
    return function (req, res, next){
        var url = req.originalUrl;
        if(!req.session.user && (url !== "/login" && url !== '/register')){
            res.redirect("/login");
        }else{
            next();
        }
    };
};
