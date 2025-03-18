document.addEventListener("DOMContentLoaded", () => {

fetch("animals.json") //fetchs json file
.then(response => response.json() ) //convert to json
.then(data => {
   Object.keys(data).forEach(id => { //go through each id
    let img = document.getElementById(id);

    if (img){
        let {bounceHeight, duration, height, width, x, y} = data[id];

        img.style.width = `${width}px`;
        img.style.height = `${height}px`;
        img.style.position = "absolute"; 
        img.style.left = `${x}px`; 
        img.style.top = `${y}px`; 
            

        img.addEventListener("mouseenter" , () => {
            gsap.to(img, {
                y : -bounceHeight,
                duration: duration,
                yoyo:true,
                repeat:1
            });
        });
    }
   });
 
    
}

)});