// * `overwriteBestCustomer()`: See the consequences of declaring a variable in global scope, by writing a new function called `overwriteBestCustomer()` that changes that `bestCustomer` variable.
// * `leastFavoriteCustomer` and `changeLeastFavoriteCustomer()`: Now declare a constant in global scope called `leastFavoriteCustomer`, be sure to assign it some initial value. Ok, now write a function called `changeLeastFavoriteCustomer()` that attempts to change that constant - notice what JavaScript does when you try to change the constant.

var customerName = 'bob';
function upperCaseCustomerName(name){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer = 'something else'
}