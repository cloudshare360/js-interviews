function a() {
 // var b = 10;
    //console.log("in side a()", b);
 c();
 function c() {
  // var b = 20;//
   console.log("inside c()", b); // 10
 }
}


//console.log("global before execution function a()", b); // 10
var b = 10;

a();

//console.log("global after execution function a()" , b); // 10
// In this example, the function `a` defines a variable `b` and a nested function `c`.

// Lexical means 
//Current scope of the function plus scope of the parent
// in the above code line no 13, b is declared and assigned 
/* the value 10; but when it called with in c which is part of A;

it initially searches in b function scope and since it is not there, it checkes in lexical scope, which its parent scope and it is not part of a scope and then it searches in a lexical scope which is global scope and finds the value of b as 10 and prints it.
*/