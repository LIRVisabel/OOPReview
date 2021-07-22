export class Mobile 
{
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: string;
    private color: string;
    private is5G: string; 
    private cameraNumber: number;
    private price: number;

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
    public getName (): string
    {
        return this.name;
    }
    public getModel(): string
    {
        return this.model;
    }
    public getTrademark(): string
    {
        return this.trademark;
    }
    public getSdSize(): string
    {
        return this.sdSize;
    }
    public getColor(): string
    {
        return this.color;
    }
    public getIs5G(): string
    {
        return this.is5G;
    }
    public getCameraNumber(): number
    {
        return this.cameraNumber;
    }
    public getPrice(): number
    {
        return this.price
    }
    public setName(name: string): void
    {
        this.name = name;
    }
    public setModel(model: string): void
    {
        this.model = model;
    }
    public setTrademark(trademark: string): void
    {
        this.trademark = trademark;
    }
    public setSdSize(sdSize: string): void
    {
        this.sdSize = sdSize;
    }
    public setColor(color: string): void
    {
        this.color = color;
    }
    public setIs5G( is5G: string): void
    {
        this.is5G = is5G;
    }
    public setCameraNumber(cameraNumber: number): void
    {
        this.cameraNumber = cameraNumber;
    }
    public setPrice(price: number): void
    {
        this.price = price;
    }

    public printAll(): void
    {
        let atributos: string;
        atributos = "Name: "+ this.name + "\n" +"Model: " + this.model+ "\n"+ "trademark :" + this.trademark + "\n" +"sdSize(GB):" + this.sdSize +"\n"+
        "Color: " + this.color + "\n"+ "Is5G?:"  + this.is5G + "\n"+ "Numbere of Camera: "+ this.cameraNumber+ "\n"+ "price:" + this.price + "\n"

        console.log( "<i> The characteristics of the mobile name</i>" );
        console.log(atributos);
        
    };

};


