var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({ 
        id: String, 
        name : String,
        price : String,
        input : String,
        power : String,
        display : String,
        storage : String,
        memory : String,
        graphics :String,
        imageurl: String
    });

mongoose.model( 'laptoplist', Todo );
mongoose.connect( 'mongodb://localhost/laptop-gallery' );
mongoose.connection.on('error',function (err) { 
  console.log('Mongoose default connection error: ' + err);
}); 


