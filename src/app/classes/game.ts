export class game{
    id:number
    name:string
    price:number
    number_participants:number;
    constructor(name:string,price:number,number_participants:number){
        this.name=name;
        this.price=price;
        this.number_participants=number_participants;
    }
}