//43.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function createSandwiches(...items: Array<string>) {
    // console.log(items);
    let printStatement: String = ''
    for (let i of items) {
        printStatement += i + ","
    }
    console.log(`Your sandwich will have ${printStatement}`);
}
createSandwiches('Apple', 'Banana', 'Meat', 'Chocolate')
createSandwiches('Jam','Egg')
createSandwiches('Egg')