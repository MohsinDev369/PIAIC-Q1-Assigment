//34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let favPizza: Array<string> = ['Chiken Tekka', 'Tandori Pizza', 'Mali Boti Pizza']

for (let i = 0; i < favPizza.length; i++){
    console.log(favPizza[i]);
}

//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i = 0; i < favPizza.length; i++) {
    console.log(`I like ${favPizza[i]}`);
}

console.log('I really like tandori pizza \n And chicken Tekka ');