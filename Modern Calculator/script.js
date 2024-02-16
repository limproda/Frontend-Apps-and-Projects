var numbersDictionary = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
};

var numbers = [];

$(".button").on("click", function (e) {
    var id = e.target.id;
    console.log(id);
    if ($(e.target).hasClass("numbers")){
        numbers = numbers + id;
        console.log(numbers);
    }

 });