let num = prompt("Ingrese un número del 1 al 10");

num = parseInt(num);

while (num<=0 || num>10) {
    num = prompt("Número incorrecto, intentelo de nuevo");    
    }

    document.write("<p class='texto'>Tabla del " + num + "</p>");   
    document.write("<br>");

    for (let i=1;i<=10;i++) {
        multiplicacion = num*i;         
        document.write("<p class='resultados'>El resultado de "+ num + " X "+ i + " es: " + multiplicacion + "</p>");
        document.write("<br>");
    }
    




