function createCar(Manufacturer, Model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = {
        Manufacturer: Manufacturer,
        Model: Model,
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar('Honda', 'Civic', ['Color', 'Black'], ['OptionalFeature', 'Sunroof'], ['Speed', '300 km/h']);
console.log(myCar);
