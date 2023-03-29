var express = require('express');
var router = express.Router();

let x;
router.get('/', function(req, res, next) {
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let y1=Math.cos(x);
let y2=Math.asin(x);
let y3=Math.asinh(x);
  res.send('Math.cos() applied to '+x+' is ' +y1+"<br>" +'Math.asin() applied to '+y+' is '+y2+"<br>"+'Math.asinh()  applied to '+x+' is'+y3); 
}
else{

  x = req.query.x;
  let y1=Math.cos(x);
  let y2=Math.asin(x);
  let y3=Math.asinh(x);

  res.send('Math.cos() applied to '+x+' is ' +y1+"<br>" +'Math.asin() applied to '+y+' is '+y2+"<br>"+'Math.asinh()  applied to '+x+' is'+y3); 
}
});

module.exports = router;