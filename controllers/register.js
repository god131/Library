var user = require ('../models/user')

module.exports = {
  page: function (req, res) {
    res.render ('register', { msg: null })
  },
  register: function (req, res) {
    let options = {
      username: req.body.username,
      password: req.body.password,
      phone_num: req.body.phone,
      dept: req.body.dependent
    }
    user.userAdd (options, function (err, result) {
      if (err) {
        res.render ('register', { msg: err })
      } else {
        res.render ('register', { msg: '注册成功' })
      }
    })
  }

}