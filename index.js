// * `leastFavoriteCustomer` and `changeLeastFavoriteCustomer()`: Now declare a constant in global scope called `leastFavoriteCustomer`, be sure to assign it some initial value. Ok, now write a function called `changeLeastFavoriteCustomer()` that attempts to change that constant - notice what JavaScript does when you try to change the constant.

var customerName = 'bob';
function upperCaseCustomerName(name){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some customer';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'new customer';
}