if(document.querySelector('#container-slider')){
   setInterval('fntExecuteSlide("next")',5000);
}
if(document.querySelector('.listslider')){
   let link = document.querySelectorAll(".listslider li a");
   link.forEach(function(link) {
      link.addEventListener('click', function(e){
         e.preventDefault();
         let item = this.getAttribute('itlist');
         let arrItem = item.split("_");
         fntExecuteSlide(arrItem[1]);
         return false;
      });
    });
}

function fntExecuteSlide(side){
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    for(var i=0; i<elements.length;i++){

        if(elements[i].style.opacity==1){
            curElement = i;
            break;
        }
    }
    if(side == 'prev' || side == 'next'){

        if(side=="prev"){
            nextElement = (curElement == 0)?elements.length -1:curElement -1;
        }else{
            nextElement = (curElement == elements.length -1)?0:curElement +1;
        }
    }else{
        nextElement = side;
        side = (curElement > nextElement)?'prev':'next';

    }
    //RESALTA LOS PUNTOS
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");
    elements[curElement].style.opacity=0;
    elements[curElement].style.zIndex =0;
    elements[nextElement].style.opacity=1;
    elements[nextElement].style.zIndex =1;
}
console.log("Hola Mundo");


var app = {};
var html = "";
var miCallback = function(datos){
    console.log(datos);
    app.productos=datos;
    html+="<h2> Productos</h2><br>"
    html+="<p>orem ipsum dolor sit amet, consectetur adipiscing elit. In nisl mauris, <br>semper vitae fermentum id, molestie eget est. Integer pretium.</p><br>"
    html+="<div style='display: inline-block; width: 70%;'>";

    app.productos.map(function(producto){
        html+="<div id='producto'><br>";
        html+="<img src='" + producto.img + "' width='200px'></img><br><br>";
        html+="<h4>" + producto.name + "</h4><br>";
        html+="<p>" + producto.desc + "</p>";
        html+="</div>";
    })
    html+="</div>";
    document.getElementById("results").innerHTML = html;   
        
}