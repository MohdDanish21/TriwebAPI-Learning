i=0
count =0
while(i<10){
    if(i%2==0){
        i=i+1;
        count=count+1;
        continue
    }
    console.log(i);
    console.log(count,"number of times");
    i++
}