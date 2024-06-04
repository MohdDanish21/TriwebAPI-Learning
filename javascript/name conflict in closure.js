function outer(num){
    let x = 5;
    function inner(x){
        let num =8;
        console.log(x);
        console.log(num);
    }
    inner(7);
}
outer(3);

// JAVA SCRIPT ALLOWS FOR THE NESTING OF FUNCTIONS AND GRANTS THE INNER FUNCTION FULL ACCESS TO ALL THE
// VARIABLES AND FUNCTION DEFINED INSIDE THE OUTER FUNCTION AND ALL OTHER VARIABLES AND FUNCTIONS THAT THE
// OUTER FUNCTION HAS ACCESS TOO