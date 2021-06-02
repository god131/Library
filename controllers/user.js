var username = request("../models/username")

module.exports ={
  page : function(req, res) {
    res.render('user')
  }
}
