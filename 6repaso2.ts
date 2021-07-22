import { Mobile } from './1repaso2';

let Nokia3210: Mobile = new Mobile ("Nokia","3210","corporation", "2x4", "azul", "es 4G", 1 , 150);
let iPhone3G: Mobile = new Mobile ("IPone", "3G", "apple", "24x5", "blanco", "es 5G", 2, 1200);
let SamsumgGalaxy10: Mobile = new Mobile ("Samsumg", "Galaxy","sanCorporation", "5x4", "verde", "es 3G",4 , 700);

// console.log("ALGUNOS TEST DE LOS 3 OBJETOS APLICANDO GET..............................................................");
// console.log(Nokia3210.getName());
// console.log(Nokia3210.getIs5G());
// console.log(iPhone3G.getColor());
// console.log(iPhone3G.getPrice());
// console.log(SamsumgGalaxy10.getSdSize());
// console.log(SamsumgGalaxy10.getTrademark());


let grupoMobiles: Mobile [] = [Nokia3210, iPhone3G, SamsumgGalaxy10];           /*se puede poner any [] en lugar de mobile[], cuando haya un array, json, otros objetos*/
console.log(grupoMobiles[0].getName());
grupoMobiles[1].setPrice(5000);
console.log(grupoMobiles[1].getPrice());

console.log("IMPRIME TODOS LOS ATRIBUTOS.............................................................................");
grupoMobiles[0].printAll();
grupoMobiles[1].printAll();
grupoMobiles[2].printAll();

