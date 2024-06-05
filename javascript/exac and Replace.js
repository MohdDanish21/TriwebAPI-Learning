var myRe=/d(b+)d/g;
var myArray= myRe.exec('cdbbdbsbz');
console.log(myArray);


// exec return an array
// in java script use only test and match for regular expression


const str = 'str 1 and 2 is str3';
// console.log(str.replace('str','STR'));

const regex =/Str/i; //g work globally
console.log(str.replace(regex,'STR'));