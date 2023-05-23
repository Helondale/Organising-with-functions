let thisText = "This text";
function logIntoTerminal(toLog, secondToLog) {
    let localText = "Apple";
    console.log(thisText);
    console.log(localText);
    function fourthFunction()  {;
        console.log("Pear")
    };
    fourthFunction();
    console.log(toLog, secondToLog)
};
let a = 3;
logIntoTerminal("Purple", a);

function anotherFunction() {
    let b = 2;
    logIntoTerminal("Blue", b);
};
anotherFunction();

let thirdFunction = function () {
    let c = 4;
    logIntoTerminal("Red", c);
};
thirdFunction();

function greetings(firstName){
    return "Greetings, " + firstName;

};
console.log(greetings("Anne"));
console.log(greetings("Adaline"));
console.log(greetings("John"));
console.log(greetings("George"));
console.log(greetings("Ursula"));












// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        { name: "thisText", content: thisText, type: "string" },
        { name: "logIntoTerminal", content: logIntoTerminal, type: "function" },
        { name: "anotherFunction", content: anotherFunction, type: "function" },
        { name: "thirdFunction", content: thirdFunction, type: "function" },
        { name: "greetings", content: greetings, type: "function" },

    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };
