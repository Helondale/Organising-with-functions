//Your code comes here
let thisText = "Picur es Mano";
function logIntoTerminal(toLog, secondToLog) {
    let localText = "Niwin";
    console.log(thisText);
    console.log(localText);
    function fourthFunction()  {;
        console.log("Csipet")
    };
    fourthFunction();
    console.log(toLog, secondToLog)
};
let a = 3;
logIntoTerminal("Purple", a);

function anotherFunction() {
    let b = 2;
    logIntoTerminal("Chameleon", b);
};
anotherFunction();

let thirdFunction = function () {
    let c = 4;
    logIntoTerminal("Blue", c);
};
thirdFunction();

function greetings(firstName){
    return "Greetings, " + firstName;

};
console.log(greetings("Galiah"));
console.log(greetings("Adaline"));
console.log(greetings("Galleybrid"));
console.log(greetings("Assiera"));
console.log(greetings("Ganjolock"));












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
