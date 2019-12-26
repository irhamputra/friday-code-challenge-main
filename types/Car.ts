export type Make = String;

export type Model = String;

export interface Car {
    make: Make;
    model: Model;
}

export interface Vehicle extends Car {
    enginePowerPS: Number;
    enginePowerKW: Number;
    fuelType: String;
    bodyType: String;
    engineCapacity: Number;
}
