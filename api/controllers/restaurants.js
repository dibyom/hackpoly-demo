var request = require('request');


module.exports = {
  getRestaurants: getRestaurants,
}

function getRestaurants (req, res) {
  var url = req.swagger.params.id.value
    ? 'http://api.usergrid.com/dibyo-demo/sandbox/restaurants?ql=restID=' + req.swagger.params.id.value 
    : 'http://api.usergrid.com/dibyo-demo/sandbox/restaurants?ql=';
  
  request(url, function (error, response, body) {
    if (error) {
      res.send(error);
    } else {
      res.send(body)
    }
  });
};

