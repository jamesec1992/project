let image = document.getElementById("image");
let images = ['female1.jfif','male1.jfif','female2.jfif']
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 800);
