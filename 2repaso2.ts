import { Mobile } from './1repaso2';

let Nokia3210: Mobile = new Mobile ("Nokia","3210","corporation", "2x4", "azul", "es 4G", 1 , 150);
let iPhone3G: Mobile = new Mobile ("IPone", "3G", "apple", "24x5", "blanco", "es 5G", 2, 1200);
let SamsumgGalaxy10: Mobile = new Mobile ("Samsumg", "Galaxy","sanCorporation", "5x4", "verde", "es 3G",4 , 700);

console.log("Se muestran los atributos de Nokia..............................");
console.log(Nokia3210.name);
console.log(Nokia3210.model);
console.log(Nokia3210.trademark);
console.log(Nokia3210.sdSize);
console.log(Nokia3210.color);
console.log(Nokia3210.is5G);
console.log(Nokia3210.cameraNumber);
console.log(Nokia3210.price);
console.log("Se muestran los atributos de iPhone..............................");
console.log(iPhone3G.name);
console.log(iPhone3G.model);
console.log(iPhone3G.trademark);
console.log(iPhone3G.sdSize);
console.log(iPhone3G.color);
console.log(iPhone3G.is5G);
console.log(iPhone3G.cameraNumber);
console.log(iPhone3G.price);
console.log("Se muestran los atributos de Samsumg.............................");
console.log(SamsumgGalaxy10.name);
console.log(SamsumgGalaxy10.model);
console.log(SamsumgGalaxy10.trademark);
console.log(SamsumgGalaxy10.sdSize);
console.log(SamsumgGalaxy10.color);
console.log(SamsumgGalaxy10.is5G);
console.log(SamsumgGalaxy10.cameraNumber);
console.log(SamsumgGalaxy10.price);

Nokia3210.is5G="5G";
Nokia3210.cameraNumber= 4;
console.log("Nokia tiene : " + Nokia3210.is5G + "  y el número de camaras es: " + Nokia3210.cameraNumber);

console.log("Se muestran todos los atributos de los mobiles.........................");
Nokia3210.printAll();
iPhone3G.printAll();
SamsumgGalaxy10.printAll();
















