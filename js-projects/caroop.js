class Vehicle{
    constructor(make,model,year){
        if(typeof make !== 'string'){
            throw new Error("Make must be a string, please try again.");
        }
        else if(typeof model !== "string"){
            throw new Error("Model must be a string, please try again.");
        }
        else if(typeof year !== 'number'){
            throw new Error("Year must be a number, please try again.");
        };
        // threw in some error handling cuz why not?
        this.make = make;
        this.model = model;
        this.year = year;
        this.honk = function(){
            return "beep";
};
        this.toString = function(){
            return `This vehicle is a ${this.year} ${this.make} ${this.model}.`;
        };
    };

};

class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);

        this.numWheels = 4;
    };
};

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);

        this.numWheels = 2;
        this.revEngine = function(){
            return 'VROOOOM!!'
        };
    };
};

class Garage{
    constructor(capacity){
        if (typeof capacity !== "number" || capacity < 0){
            throw new Error ('Capacity must be a number greater than 0.');
        };
        this.vehicles = [];
        this.capacity = capacity;
        this.add = function(TBA){
            if (this.vehicles.length >= capacity){
                return `Sorry we have reached our maximum capacity of ${this.capacity}, please try again later.`
            }
            else if(!(TBA instanceof Vehicle)){
                return `We only store Vehicles here, not ${TBA}.`
            }
            else {
                this.vehicles.push(TBA);
                return "Vehicle has been added!"
            };
        };
    };
};


const c1 = new Vehicle('Honda', 'Accord', 2006);

const c2 = new Car("Toyota", 'Camry', 1987);

const m1 = new Motorcycle('Kawasaki', 'Ninja H2', 2013); 

const g1 = new Garage(2);
