interface Car {
    type: string;
    model: string;
    year: number;
    greet(): void;
}


const car: Car = {
    type: "Sedan",
    model: "Toyota Camry", 
    year: 2020,
    greet(){
        console.log(`Hello`);
    }
}

console.log(car)