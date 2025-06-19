let life = 5
let members = 3
let backpack = []
let option = ""
const messageIntroduction = "Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más. Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte."
const messageTwo =  "El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales? Ingrese A para:  Ir al supermercado abandonado Ingrese B para: Robar mochila a un sobreviviente "
const messageThree =  "Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. La ciudad no perdona a quienes se quedan mucho tiempo al descubierto. Ingrese A para: Esconderse en una farmacia. Ingrese B para:  Ir a una estación de buses. Ingrese C para: Refugiarse en una tienda de campaña abandonada "
const messageFour = "Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión? Ingrese A para: Ayudar a una familia atrapada. Ingrese B para: Ignorar y seguir avanzando. Ingrese C para : Distraer a los enemigos y liberar a la familia a distancia. Ingrese D para: Robar los recursos de la familia sin ser vistos "
const messageFive = "Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia. Ingrese A para: Investigar la señal. Ingrese B para: Evitar la zona"
const messageSix = "El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras? Ingrese A para: Subir a un edificio a observar. Ingrese B para: Moverse por callejones. Ingrese C para: Usar una alcantarilla conectada al metro "
const messageSeven = "La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado. Ingrese A para: Reparar bicicleta. Ingrese B para: Ir a pie"
function showMessage(message){
    let joined = prompt(message);
    return joined.toUpperCase
}//Mensje Introduccion
alert(messageIntroduction);
option = showMessage(messageTwo); //Primera seccion
if (option == 'A'){
    backpack.push("food", "water")
    life--   
}
else{
    backpack.push("flashlight")
    members--
}
option = showMessage(messageThree); //Segunda seccion
switch (option) {
    case 'A':
        backpack.push("kit")
        life++
        break;
    case 'B':
        life--
        break;
    case 'C':
        backpack.push("battery")
        life--
        break;
    default:
        alert("Ingrese un dato valido")
        break;

}
console.log(option)
option = showMessage(messageFour); //Tercer seccion
switch (option) {
    case 'A':
        backpack.push("map")
        members++
        break;
    case 'B':
        members--
        break;
    case 'C':
        backpack.push("flashlight")
        life--
    case 'D':
        backpack.push("food")
        members -=2
        break;
    default:
        alert("Ingrese un dato valido")
        break;
}
console.log(option)
option = showMessage(messageFive);
if(option == 'A'){
    backpack.push("key", "gasoline")
}
option = showMessage(messageSix);
switch (option) {
    case 'A':
        backpack.push("intel")
        break;
    case 'B':
        life--
        break;
    case 'C':
        backpack.push("acces-card")
        break;
    default:
        alert("Ingrese un dato valido")
        break;
}
option = showMessage(messageSeven);
option == 'A' ? backpack.push("medicines", "battery") : life--

life >= 3 && backpack.lenght >= 2 && map in backpack ? alert("Puede ingresar al tunerl del metro") : alert("Se quedaron atrapaditos")
    


