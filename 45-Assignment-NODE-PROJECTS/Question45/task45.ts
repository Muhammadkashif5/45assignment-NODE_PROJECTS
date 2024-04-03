function createCar(Manufacturer: string, Model: string, ...properties: [string, any][]): any {
    const car: any = {
        Manufacturer,
        Model,
    };

    for (const [key, value] of properties) {
        car[key] = value;
    }

    return car;
}

const myCar: string = createCar('Honda', 'Civic', ['Color', 'Black'], ['OptionalFeature', 'Sunroof'], ['Speed', '300 km/h']);

console.log(myCar);