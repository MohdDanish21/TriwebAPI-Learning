// image chnager on image click


let myImage = document.querySelector('img');

myImage.onclick = function(){
    let imgSrc = myImage.getAttribute('src');
    if(imgSrc== 'image/child1.jpg'){
        myImage.setAttribute('src','image/child-2.jpg')
    }else{
        myImage.setAttribute('src','image/child1.jpg')
    }

}