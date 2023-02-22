//45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface CarOptions {
    [key: string]: any;
}

function carMaker(manufacturer: string, model: string, options: CarOptions = {}): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer,
        model
    };

    for (const [option, value] of Object.entries(options)) {
        car[option] = value;
    }

    return car;
}

const myCar = carMaker('lambo', 'F4');
console.log(myCar);

const samCar = carMaker('Kawasaki Motors Limited', 'Ninja', { color: 'blue', tow_package: true });
console.log(samCar);

