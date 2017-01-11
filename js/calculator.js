var pNumber;
var sNumber;
var addButton = document.getElementById("add");
var subButton = document.getElementById("subtract");
var mulButton = document.getElementById("multiply");
var divButton = document.getElementById("divide");
var result = document.getElementById("result");
var reload = document.getElementById("clear");

function clear () {
  window.location.reload()
};

function getNumbers() {
  pNumber = parseInt(document.getElementById("p_number").value);
  sNumber = parseInt(document.getElementById("s_number").value);
};

//Clear Button
reload.addEventListener("click", clear);



/*
  Create a function that adds two numbers
  passed in as arguments. Return the product.
 */

function addNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(pNumber+sNumber);

};

addButton.addEventListener("click",addNumbers);
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the sum.
 */

function subNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(pNumber-sNumber);

};

subButton.addEventListener("click",subNumbers);

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the difference.
 */

function mulNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(pNumber*sNumber);

};

mulButton.addEventListener("click",mulNumbers);

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */


function divNumbers() {
  getNumbers();
  result.innerHTML = result.innerHTML+(pNumber/sNumber);

};

divButton.addEventListener("click",divNumbers);


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */