function suma(){
var A;
var B;
var suma;
A = parseInt(prompt("Por favor ingrese el primer valor"));
B= parseInt(prompt("Por favor ingrese el segundo valor"));
suma = A + B;
alert("El resultado de la suma es: "+ suma);

}
function resta(){
    var A;
    var B;
    var resta;
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B= parseInt(prompt("Por favor ingrese el segundo valor"));
    resta = A - B;
    alert("El resultado de la suma es: "+ resta);
    
    }
function multiplicacion(){
    var A;
    var B;
    var multi;
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B= parseInt(prompt("Por favor ingrese el segundo valor"));
    multi = A * B;
    alert("El resultado de la suma es: "+ multi);
        
    }
function division(){
    var A;
    var B;
    var div;
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B= parseInt(prompt("Por favor ingrese el segundo valor"));
    div = A / B;
    alert("El resultado de la suma es: "+ div);
        
    }
function division(){
    var A;
    var B;
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B= parseInt(prompt("Por favor ingrese el segundo valor"));
    div = A / B;
    alert("El resultado de la suma es: "+ div);
        
    }
function mayor2(){
    var A;
    var B;
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B= parseInt(prompt("Por favor ingrese el segundo valor"));
    if (A == B) {
        alert ("Los numero son iguales");
            
    }
    else if( A > B ){
            alert ("El numero mayor es " + A);
        }
        else {
            alert ("El numero mayor es " + B);
        }
       
    }
function menor3(){
    var A;
    var B;
    var C;
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B= parseInt(prompt("Por favor ingrese el segundo valor"));
    C= parseInt(prompt("Por favor ingrese el tercer valor"));
    if (A == B && A == C) {
        alert ("Los numero son iguales");
            
    }
    else if( A < B && A < C){
            alert ("El numero menor es " + A);
        }
        else if ( B < A && B < C) {
            alert ("El numero menor es " + B);
        }
        else {
            alert ("El numero menor es " + C)
        }
       
    }

function par(){
var A;
A = parseInt(prompt("Por favor ingrese el valor"));
if (A - 2 == 0) {
        alert ("El numero " + A + " es par");      
    }
    else {
        alert ("El numero" + A + "es impar");
    }
    }

function cuadrado(){
var A;
var B;
A = parseInt(prompt("Por favor ingrese el valor"));
B = A * A ;
alert ("El cuadrado de "+ A + " es " + B);

    }

function area(){
var A;
var B;
var C;
A = parseInt(prompt("Por favor ingrese la altura del triangulo"));
B = parseInt(prompt("Por favor ingrese la base del triangulo"));
C = (A*B)/2;
alert ("El área del triangulo es " + C);

    }

function centimetros(){
var A;
var B;
A = parseInt(prompt("Por favor ingrese los metros"));
B = A * 100;
alert (A + " M son " + B + " CM");

    }

function nacio(){
var A;
var B;
var C; 
A = parseInt(prompt("ingrese su edad"));
B = parseInt(prompt("ingrese el año actual"))
C = B - A;
alert ("su fecha de nacimiento es "+ C);

    }

function invertir(){
var A;
var B;
var C; 
A = parseInt(prompt("ingrese el dinero a invertir"));
B = parseInt(prompt("ingrese los años a calcular"))
C = (A*0.02)*12;
D = C + A
alert ("Sus intereses suman "+C+" por "+B+" año(s) que piensa dejar su dinero. En total sera "+ D);

    }

function colegio(){
var A;
var B;
var C;
var D;
var E;
var F;
A = parseFloat(prompt("Por favor ingrese la priemra nota"));
B = parseFloat(prompt("Por favor ingrese la segunda nota"));
C = parseFloat(prompt("Por favor ingrese la tercera nota"));
D = parseFloat(prompt("Por favor ingrese la cuarta nota"));
E = parseFloat(prompt("Por favor ingrese la quinta nota"));
F = (A+B+C+D+E)/5
if (A >= 5 && B >= 5 && C >= 5 && D >= 5 && E >= 5) {
        alert ("Recuerde que debe ingresar notas en la escala de 1 a 5");      
    }
    else if(F >= 3){
        alert ("Aprobado con un promedio de "+ F);
    }
    else {
        alert ("Reprobado con un promedio de "+ F);
    }
    }

function fruteria(){
var A;
var B;
var C;
A = parseInt(prompt("Por favor ingrese el peso en kilos"));
if (A <=2) {
    C = A * 4500;
        alert ("El total a pagar es de "+C);      
    }
    else if (A <= 5){
        B = (A* 4500)*0.1;
        C = (A*4500)-B;
        alert ("El total a pagar es de "+C+" .El descuento fue de "+B);
    }
    else if (A <= 10){
        B = (A* 4500)*0.15;
        C = (A*4500)-B;
        alert ("El total a pagar es de "+C+" .El descuento fue de "+B);
    }
    else {
        B = (A* 4500)*0.2;
        C = (A*4500)-B;
        alert ("El total a pagar es de "+C+" .El descuento fue de "+B);
    }
    }

    function taller(){
        var A;
        A = parseInt(prompt("ingrese el valor"));
        if (A <=9) {
                alert ("El numero tiene una cifra ");      
            }
            else if (A <= 99){
                alert ("El numero tiene dos cifras");
            }
            else if (A <= 999){
                alert ("El numero tiene tres cifras");
            }
            else {
                alert ("El numero tiene mas de tres cifras");
            }
            }

            function hola(){
                var A;
                var B;
                var C;
                var D;
                var F;
                A = parseFloat(prompt("Por favor ingrese la primera nota"));
                B = parseFloat(prompt("Por favor ingrese la segunda nota"));
                C = parseFloat(prompt("Por favor ingrese la tercera nota"));
                D = parseFloat(prompt("Por favor ingrese la cuarta nota"));
                if (A >= 5 && B >= 5 && C >= 5 && D >= 5 && E >= 5) {
                        alert ("Recuerde que debe ingresar notas en la escala de 1 a 5");      
                    }
                    else if(A < B && A < C && A < D){
                        F = (B+C+D)/3;
                        alert ("la nota eliminada es "+ A+" El promedio es de "+F);
                    }
                    else if(B < A && B < C && B < D){
                        F = (A+C+D)/3;
                        alert ("la nota eliminada es "+ B+" El promedio es de "+F);
                    }
                    else if(C < B && C < A && C < D){
                        F = (B+A+D)/3;
                        alert ("la nota eliminada es "+ C+" El promedio es de "+F);
                    }
                    else {
                        F = (B+C+A)/3;
                        alert ("la nota eliminada es "+ D+" El promedio es de "+F);
                    }
                    }