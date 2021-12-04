const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kj5za.mongodb.net/library?retryWrites=true&w=majority');
//Schema definition
const Schema=mongoose.Schema;
const AuthorSchema= new Schema({
    authorid:Number,
    authorname:String,
    work:String,
    published:String,
    imageUrl:String
});


//Model creation
var Authordata=mongoose.model('author',AuthorSchema);

module.exports=Authordata;



