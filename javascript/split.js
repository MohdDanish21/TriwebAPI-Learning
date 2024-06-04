const cities = String("Ghazipur, Varansi,New Delhi, Lucknow");
const cityArr=cities.split(',');

console.log(cityArr);


cityArr.forEach((city)=>{
    console.log("Hi is is",city);
});