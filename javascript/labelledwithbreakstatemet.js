let n =5;
outer:
for(let i=1; i<=n; i++){  // outer loop

    for(let j=1; j<=n; j++){ // inner loop
        console.log(i,j);
        if(j==3){
            break outer;   // it break all loop under label outer
        }
        
    }
}