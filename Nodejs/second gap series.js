seriesStartFrom=1;
gap=3;
seriesEndAt=20;

i=seriesStartFrom;

while (i<=seriesEndAt){
    console.log(i);
    i=i+gap;
    // gap=gap+1;
    if(gap==3){
        gap=gap-1;
    }else{
        gap=3;
    }
}