//TASK #1

//a) (5 pts) Add code to the app to ask the user for a number via 
//a prompt call. The number should be displayed on a tag on the 
//corresponding web page with a prefix of Quantity. For example, if 
//80 is entered, then you should see this on the web page 
//Quantity: 80

numEntered = prompt("Please enter a number.");
if (!(isNaN(numEntered))){
    numEntered = parseInt(numEntered);
    let displayedNum = document.querySelector(".numDisplay");
    displayedNum.textContent = `Quantity: ${numEntered}`;
} else{
    alert("That is not a valid number. Please try again.")
    let displayedNum = document.querySelector(".numDisplay");
    displayedNum.textContent = `Quantity: INVALID`;
};


//b) (15 pts ) Extend the app to ask the user to enter a percentage 
//amount. The app should compute this percentage of the number entered, 
//and output the result to the web page using a formatted string - with 
//the percentage figure, the quantity and the result. For example, if 
//50 is entered as the percentage amount, then you should see this on 
//the web page,
//Quantity: 80
//50% of Quantity, 80, is 40

//You should use a template literal to format the output string.

numEntered = prompt("Please enter another number.");
if (!(isNaN(numEntered))){
    numEntered = parseInt(numEntered);
    let displayedNum = document.querySelector(".numDisplay2");
    displayedNum.textContent = `Quantity 2: ${numEntered}`;
    percentEntered = prompt("Please enter a percentage.");
    if (!(isNaN(percentEntered))){
        percentEntered = parseInt(percentEntered);
        percentDecimal = percentEntered/100; 
        total = numEntered * percentDecimal;
        let displayedPercent = document.querySelector(".percentDisplay2");
        displayedPercent.textContent = `${percentEntered}% of Quantity, ${numEntered}, is ${total}`;
    }else{
        alert("That is not a valid number. Please try again.")
        let displayedNum = document.querySelector(".numDisplay2");
        displayedNum.textContent = `Quantity: ${numEntered}`;
        let displayedPercent = document.querySelector(".percentDisplay2");
        displayedPercent.textContent = `${percentEntered}% of Quantity, ${numEntered}, is ${total}`;
    }
} else{
    alert("That is not a valid number. Please try again.")
    let displayedNum = document.querySelector(".numDisplay");
    displayedNum.textContent = `Quantity: INVALID`;
};


//TASK #2

//Repeat the input/output techniques in the code from Task#1. This time 
//turn it into a grade converter app.

// Ask the user for a grade between 1 and 100, via prompt. Make sure to 
// consider the data type of the variable that received the input.

// Convert the points to a letter grade, using

//(a) (10 pts) an if with branches,

gradeEntered = prompt("Please enter a grade between 1 and 100."); 
let displayGrade = document.querySelector(".displayGrade"); 

let displayStr ="";
let gradeStr = "";

if(!(isNaN(gradeEntered))){
    gradeEntered = parseInt(gradeEntered); 
    if(gradeEntered > 100 ){
        let displayGrade = document.querySelector(".displayGrade"); 
        displayGrade.textContent = `That is not a valid grade.`;
    } else if (gradeEntered >= 91){
        gradeStr = "A";
    } else if (gradeEntered >=81){
        gradeStr = "B";
    }else if (gradeEntered >= 71){
        gradeStr = "C"; 
    }else if (gradeEntered >= 61){
        gradeStr = "D";
    }else if (gradeEntered <= 60){
        gradeStr = "F"
    }else if(gradeEntered > 101) {
    gradeStr = "Invalid"
    }else {
    gradeStr ="Invalid"}
};

displayGrade.textContent = `The grade is A: ${gradeStr} `;


//(b) (10 pts) a switch statement (you are comparing values in a range).

//Display the grade on the corresponding web page. Use "(a)" as text in 
//your output to denote the if computation, and "(b)" to denote the switch 
//computation.

//Use this scale => A : 91 - 100, B: 81 - 90, C: 71 - 80, D: 61-70, 
//F: 0 - 60

gradeEntered2 = prompt("Please enter a grade between 1 and 100."); 
let displayGrade2 = document.querySelector(".displayGrade2"); 

let displayStr2 ="";
let swtichStr = "";

switch(true) { 
    case (gradeEntered2 > 100):
        swtichStr ="Switch: Invalid";
        break;
    case (gradeEntered2 > 90):
        swtichStr = "Switch: A";
        break;
    case (gradeEntered2 > 80):
        swtichStr = "Switch: B";
        break;
    case (gradeEntered2 > 70):
        swtichStr = "Switch: C";
        break;
    case (gradeEntered2 > 60):
        swtichStr = "Switch: D";
        break;
    case (gradeEntered2 < 61):
        swtichStr = "Switch: F"; 
        break;
    default:
        swtichStr = "INVALID";
}

let refToTask2b = document.querySelector(".displayGrade2");
refToTask2b.innerHTML = swtichStr;



//Task #3

//Harry Potter mode. If you didn't see the movie, there is a part in which 
//Professor Umbridge(a truly horrible character in the movie) punishes Harry 
//Potter with some lines. We're going to help him out.

// - ask the user for the punishing professor name (like Umbridge)

// - ask the user for the line to write, like 'I must not tell lies'

// - ask for the number of times the lines are to be written

// - use a for loop to write the lines, each preceded with the line number 
//(like 1: I must not tell lies, 2: I must not tell lies ... 100: I must not 
//tell lies) to the console.

let profName = prompt("Name of professor:"); 
let line = prompt("What to write for line?"); 
let numLines = prompt("How many lines?"); 
numLines = parseInt(numLines); 
for (let lineNum = 1; lineNum <= numLines; lineNum++) {
    console.log(lineNum + " : " + line);
}

//Task #4

//Change task #3 to write to an element on the web page instead of the console, 
//and to use a while loop. Make sure to use a new line for each line.

let profName2 = prompt("Name of professor:"); 
let line2 = prompt("What to write for line?"); 
let numLines2 = prompt("How many lines?"); 
let displayLines = "";
numLines2 = parseInt(numLines2); 
for (let lineNum2 = 1; lineNum2 <= numLines2; lineNum2++) {
    displayLines += `${lineNum2}: ${line2} <br>`;
}
let taskFour = document.querySelector(".lines");
taskFour.innerHTML = displayLines;




// Task #5: Variables, Loops, DOM, Function (10 pts)
// Change task #4 to use an arrow function. Make sure to call the function.

const lines = ()=> {
    let pofName3 = prompt("Name of professor:");
    let line3 = prompt("What to write for lines?");
    let numLines3 = prompt("How many lines?");
    numLines3 = parseInt(numLines3);
    let displayLines3 = "";
    for (let lineNum3 = 1; lineNum3 <= numLines3; lineNum3++) {
        displayLines3 += `${lineNum3}: ${line3} <br>`;
    }
    let taskFour = document.querySelector(".lines2");
    taskFour.innerHTML = displayLines3;
}

lines();


//Task #6 

//Create a code snippet that prints the times tables from 1 to 12, to the 
//associated web page, in 3 different ways.
// First Strategy (5 pts)

// Your code should use a nested loop, for example
// for (let factor1 = 1; .....) {
//     for (let factor2 = 1; ...) {...
//     }
//      .....
//   }


let firstFactor = 1; 
let secondFactor = 1;
let displayTable = "";

for (firstFactor =1; firstFactor <=12; firstFactor++){
    for(secondFactor = 1; secondFactor <=12; secondFactor++){
        let product = firstFactor * secondFactor;
        displayTable += `${firstFactor} x ${secondFactor} = ${product}<br>`;

    }
    displayTable += "<br> ---------------<br>"

}

let refToDisplay = document.querySelector(".tables1");
refToDisplay.innerHTML = displayTable;



// Second Strategy (5 pts)
// Your code should call a function from within a loop, for example

// for (let factor1 = 1; ....) {
//      createTables(factor1);
//    }
// If factor 1 is 3, output by function createTables should be '3 x 1 = 3 ..... 3 x 12 = 36'


// let firstFactor = 1; 
// let secondFactor = 1;
let displayTable2 = "";

const timesTable = (firstFactor)=>{
    for(secondFactor = 1; secondFactor <=12; secondFactor++){
        let product2 = firstFactor * secondFactor;
        displayTable2 += `${firstFactor} x ${secondFactor} = ${product2}<br>`;

    }
    displayTable2 += "<br> ---------------<br>"
    return displayTable2;
}
let fullDisplayTable = "";
for (firstFactor =1; firstFactor <=12; firstFactor++){
    fullDisplayTable += timesTable(firstFactor);
};

let refToDisplay2 = document.querySelector(".tables2");
refToDisplay2.innerHTML = displayTable2;

timesTable(firstFactor);

// Third Strategy (10 Pts)

// Create a function to display all of the times tables from 1 to 12, in the web page. Your code should
// call a function, that calls another function
// make use of parameters to establish a delimiter for the times tables ( a delimiter is a stopping point, like if you wanted the times tables to go from 1 to 10, or from 1 to 12, for each number 1 to 12)
// Here is a potential structure,

// const allTables = ()=> (delimiter) {
//     for ( let factor = 1; ....
//          createtables(factor, delimiter);
// }

// If delimiter is 10, then we stop at 10. For instance, for the 3 times tables, we see
// 3 x 1 = 3
// ...
// 3 x 10 = 10



let displayTable3 = "";
let delimiter = 12;


const allTables = ()=>(delimiter)
    for(secondFactor = 1; secondFactor <=12; secondFactor++){
        const createTables = (firstFactor)=> (delimiter)
        let product3 = firstFactor * secondFactor;
        displayTable3 += `${firstFactor} x ${secondFactor} = ${product3}<br>`;
        createTables(firstFactor, delimiter);

        
    };

    // displayTable3 += "<br> ---------------<br>"
    // return displayTable3;

let refToDisplay3 = document.querySelector(".tables3");
refToDisplay3.innerHTML = displayTable3;

allTables(firstFactor);


// (10 pts) In a multi-line comment in your code, explain what hoisting is, in the context of
// a) a function
    // When hosting a function, you call the function before it was declared. This will only work 
    // with certain functions as some functions CANNOT be hoisted. 

// b) a variable
    // When hoisting a variable, you call it befefore it is defined. This can lead to undefined 
    // outputs.

// Give a coded example of hoisting, using  
// a) a function

//     print();

//     function print() {
//         console.log("Function hoisting example.");
//     }
    
    
// // b) a variable

//     console.log(printVar);

//     let printVar = "Variable hoisting example."


// In a multiline comment in your code, after the coded example of hoisting (above), explain how the
// ECMA standards resolved the issue of hoisting.

//  The ECMA introduced block level scoping in order to help resolve some of the issues that can occur
// with hoisting. 