// const div = document.getElementByClassName('container');
// div[0].innertext = "Abes Engineering College";
// div[0].style.color = "Red";
// div[0].style.backgroundColor = "black";
// div[0].style.textAlign = "Center";
// div[0].style.padding = "20px";
// div[0].style.fontSize = "30px";
// // console.log(div);

// //         const container = document.getElementById('container')


// const h2 = document.createElement('h2');

// h2.innerHTML = "ABES Engineering College 2";
// div[0].appendChild(h2);
// const img = document.createElement('img');
// img.src = "https://w0.peakpx.com/wallpaper/962/650/HD-wallpaper-summer-camouflage-texture-dark-green-camouflage-texture-dark-green-camouflage-background-camouflage-texture.jpg"
// div[0].appendChild(img);

// function msg(){
//     alert("Hello World");
// }

const div = document.getElementsByClassName('container');
div[0].innerHTML = "ABES ENGINEERING COLLEGE";
div[0].style.color = "red";
div[0].style.backgroundColor = "black";
div[0].style.textAlign = "center";
//create a h2 tag
const h2 = document.createElement('h2');
//append h2 tag to div
h2.innerHTML = "ABES ENGINEERING COLLEGE";
div[0].appendChild(h2);

const img = document.createElement('img');
img.src = "https://w0.peakpx.com/wallpaper/962/650/HD-wallpaper-summer-camouflage-texture-dark-green-camouflage-texture-dark-green-camouflage-background-camouflage-texture.jpg";
div[0].appendChild(img);

function msg(){
    const text = document.createElement('p');
    text.innerHTML = "Welcome to abes engineering college";
    text.style.color = "white";
    text.style.backgroundColor = "blue";

    document.getElementsByClassName('container')[0].appendChild(text).addEventListener('click',msg);

    
}

img.addEventListener('click',msg);