

export class Menu{
    name: string;
    description : string;
    path:string;
    rate:number;

    constructor(name :string, description:string, path:string, rate:number){
        this.name = name;
        this.description = description;
        this.path = path;
        this.rate = rate;
    }
}