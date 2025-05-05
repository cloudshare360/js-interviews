// if one declares a variable with var keyword, the variable is hoisted to the top of the function scope and part of global scope

x = 10
y = 20

function validate() {
    z = 30;
    console.log("x", x);
    console.log("y", y);
    console.log("z", z);
}
validate();
console.log("x", x);
    console.log("y", y);
    console.log("z", z);