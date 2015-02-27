var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var Todo     = mongoose.model( 'laptoplist' );
var path = require('path');
var fs = require('fs');
exports.list = function ( req, res, next ){
  Todo.
    find().
    sort( 'id' ).
    exec( function ( err, todos ){
      if( err ) return next( err );
      console.log('exports.list');
	console.log(todos);
      res.send(todos);
  
});
};
exports.index = function ( req, res, next ){
console.log('exports.index');
  res.render( 'index', {
          title : 'Laptop Gallery'
      });
};

exports.additem = function ( req, res, next ){
console.log('exports.additem');
  res.render( 'additem', {
          title : 'Laptop Gallery'
      });
};
  
exports.details = function ( req, res, next ){
  console.log('exports.details');
   Todo.
    find({ id : req.query.id }).
    exec( function ( err, todos ){
      if( err ) return next( err );
	console.log(todos);
	console.log(req.query.id);
      res.render( 'details', {
        title   : 'Laptop Gallery',
        todos   : todos
      });
     });
};

exports.add = function ( req, res, next ){
  console.log('exports.add');
  console.log(req.body.id);
  var item = new Todo({
  	  id: req.body.id, 
        name : req.body.name,
        price : req.body.price,
        input : req.body.input,
        power : req.body.power,
        display : req.body.display,
        storage : req.body.storage,
        memory : req.body.memory,
        graphics :req.body.graphics,
        imageurl: req.body.id
  });
  item.save(function(err,item){
  	if (err) return console.error(err);
  	else
  	{
  		var targetpath = path.resolve('images/'+item.id+'.jpg');
  		console.log(req.files);
  		fs.rename( req.body.file.path,targetpath,function(err){
  			if(err) return console.error(err);
  		});
  		res.send("Item Added!");
  	}
  });
};


// ** express turns the cookie key to lowercase **
exports.current_user = function ( req, res, next ){
  var user_id = req.cookies ?
      req.cookies.user_id : undefined;

  if( !user_id ){
    res.cookie( 'user_id', utils.uid( 32 ));
  }

  next();
};
