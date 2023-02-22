function carMaker(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _i = 0, _a = Object.entries(options); _i < _a.length; _i++) {
        var _b = _a[_i], option = _b[0], value = _b[1];
        car[option] = value;
    }
    return car;
}
var myCar = carMaker('lambo', 'F4');
console.log(myCar);
var samCar = carMaker('Kawasaki Motors Limited', 'Ninja', { color: 'blue', tow_package: true });
console.log(samCar);
