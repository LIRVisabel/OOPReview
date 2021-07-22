export class Mobile 
{
    public name: string;
    public model: string;
    public trademark: string;
    public sdSize: string;
    public color: string;
    public is5G: string; 
    public cameraNumber: number;
    public price: number;

    ///Definición del constructor
    constructor (name: string, model: string, trademark: string, sdSize: string, color: string, is5G: string, cameraNumber: number, price: number )
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    };

    ///Métodos
    public printAll(): void
    {
        let atributos: string;
        atributos = "Name: "+this.name + "\n" +"Model: " + this.model+ "\n"+ "trademark :" + this.trademark + "\n" +"sdSize:" + this.sdSize +"\n"+
        "color: " + this.color + "\n"+ "is5G?:"  + this.is5G + "\n"+ "camara Number: "+ this.cameraNumber+ "\n"+ "price:" + this.price + "\n"

        console.log("LOS ATRIBUTOS SON : ");
        console.log(atributos);
        
    };

};
