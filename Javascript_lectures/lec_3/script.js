//when a function is returned in a function then it returns it's lexical scope(parent's environment)
function fun1(){
    let a = 10;
    let b = 20;

    function fun2(){
        return a+b;
    }

    return fun2;
}
console.log(fun1()); //[Function: fun2]
let num = fun1();
console.log(num()); //30
//logical error can be that a and b values may be undefined for fun2 as they are not in it's scope
//but when we are calling it through returned value then it provides the lexical env on fun2 with it where a and b are defined
//this is the closure of function

function fun3(){
    let a = 10;
    let b = 20;

    function fun4(){
        let c = 40;

        function fun5(){
            return a + b + c;
        }
        return fun5;
    }

    return fun4;
}

console.log(fun3()()); //[Function: fun3]
num = fun3()();
console.log(num()); //70
//console.log(fun5());// not defined
//Lexical env are inheritable

//writing as arrow function
function fun6(){
    let a = 10;
    let b = 20;

    return () => {
        let c = 40;

        return () => {
            return a + b + c;
        }
    }
}
console.log(fun6()()); //[Function: anonymous]
num = fun6()();
console.log(num()); //70


//ARRAY METHODS
// -> map()
// -> filter()
// -> reduce()
// -> forEach()