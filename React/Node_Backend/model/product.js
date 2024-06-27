const  mongoose=require('mongoose');
const { default: Product } = require('../../my/src/pages/product');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name:String,
    image:String,
    description:String,
    price:Number

});

module.exports=mongoose.model('Product',ProductSchema);