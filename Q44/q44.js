//43.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function createSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // console.log(items);
    var printStatement = '';
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var i = items_1[_a];
        printStatement += i + ",";
    }
    console.log("Your sandwich will have ".concat(printStatement));
}
createSandwiches('Apple', 'Banana', 'Meat', 'Chocolate');
createSandwiches('Jam', 'Egg');
createSandwiches('Egg');
