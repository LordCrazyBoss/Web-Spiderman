const view=document.getElementById("MW");
const div = document.querySelectorAll('div#anima');

var element = Array.prototype.slice.call(div);

const animation = () => {
element.forEach((element)=> {
  element.classList.add('animated')
  setTimeout(()=>{
    element.classList.remove('animated')
  },4000)
})
};


function inicioW(){
  setTimeout(()=>{view.src = "../Page/inicio.html";}, 2100)
  
};
function spider1(){
  setTimeout(()=>{view.src = "../Page/spiderman1.html";}, 2100)
  
};
function spider2(){
  setTimeout(()=>{view.src = "../Page/spiderman2.html";}, 2100)
  
};
function spider3(){
  setTimeout(()=>{view.src = "../Page/spiderman3.html";}, 2100)
  
};
function contac(){
  setTimeout(()=>{view.src = "../Page/contacto.html";}, 2100)
  
};

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function(){
  menu.classList.toggle('active')
};