var numbersDictionary = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0", 
    divide: "/",
    multiply: "*",
    subs: "-",
    plus: "+"
};

var numbers = "";

$(".button").on("click", function (e) {
    var id = e.target.id;
    if (id === "equal"){
        numbers = eval(numbers);
        console.log(numbers);
    } else if ( id === "ac") {
        numbers = " ";
    }else if ( id === "de") {
        numbers = numbers.slice(0, -1); 
    }
    else {
        numbers = numbers + numbersDictionary[id];
        console.log(numbers);
    }

 });