var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var Todo     = mongoose.model( 'laptoplist' );

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


// ** express turns the cookie key to lowercase **
exports.current_user = function ( req, res, next ){
  var user_id = req.cookies ?
      req.cookies.user_id : undefined;

  if( !user_id ){
    res.cookie( 'user_id', utils.uid( 32 ));
  }

  next();
};
