var slider_img = document.querySelector('.slider_img') 
var images = ["1.jpg.jpg","2.jpg.jpg","3.jpg.jpg","4.jpg.jpg" ]
var i = 0 ;

function prev(){
    if(i <= 0  ) i= images.length;
    i--;
    return setimg()
}
function next(){
if(i >= images.length - 1 ) i = -1;
i++;
return setimg()
}
function setimg(){
    return slider_img.setAttribute('src','images/'+images[i]);
}