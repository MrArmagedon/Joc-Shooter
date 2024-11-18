let miPantalla;

function inicializar(){

    miPantalla = document.getElementById("pantalla")

    miPantalla. addEventListener('mousedown',ratonPulsado)
    miPantalla. addEventListener('mouseup',ratonSoltado)
    miPantalla. addEventListener('mousemove',ratonMueve)
}

function ratonPulsado(){

    console.log("has pulsado el ratón")
}

function ratonSoltado(){

    console.log("has soltado el ratón")
}

function ratonMueve(e){

    let x = e.pageX
    let y = e.pageY
    console.log("X: "+x+" - Y: "+y)
}

let personaje = function(x,y,nom,edat){

    this.x = x;
    this.y = y;
    this.nombre = nom;
    this.age = edat;

    this.edat = function(){

        console.log("Hola me llamo "+this.nombre,"y tengo "+this.age,"años.")
    }
}

let p1 = new personaje(300,250,"Desastre","22");
let p2 = new personaje(760,100,"Gomess","17");

p1.edat();
p2.edat();