// function square(num){
//     function getSquare(n1){
//         console.log(n1*n1);
//     }
//     getSquare(num)
// }
// square(4)


function square(num){
    function getSquare(n1){
        function getSquareFromInside(n2){
            console.log(n2*n2);
        }
        getSquareFromInside(n1);
    }
    getSquare(num)
}
square(4)