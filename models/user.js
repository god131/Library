/*用户数据模型*/

var query = require('../common/mysql.js');

module.exports = {
    userLogin : function(options,callback){
        var sql = "select * from user where username = '" + options.username + "' and password = '" + options.password + "'";
        query(sql,function(err,rows,fields){
            callback(rows);
        });
    },
    updateUser : function(options,callback){
        var sql = "update user set password = '" + options.password + "' where id = '" + options.userid + "'";
        query(sql,function(err,rows,fields){
            callback(rows);
        });
    },
    userAdd: function (options,callback){
        var sql = "select * from user where username = '" + options.username +"'"  ;
        query(sql,function(err,rows,fields){
            if(err){
                callback(err);
            }else{
                if(rows.length >= 1 ){
                    callback(new Error('当前用户已经存在'));
                }else{
                    var sql = `INSERT INTO user (username, password,phone_num,dept) VALUES('${options.username}','${options.password}','${options.phone_num}','${options.dept}')`;
                    query(sql,function(err,rows,fields){
                        callback(null,rows);
                    });
                }
            }
            callback(rows);
        });
    }
};