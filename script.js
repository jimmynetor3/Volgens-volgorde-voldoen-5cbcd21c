const toetsVragen = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel poten heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Noem een duits automerk",
    "Noem een waddeneiland",
];
const correcteAntwoorden = [
    "Parijs",
    "8",
    "Ijsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

document.getElementById("question1").innerHTML = toetsVragen[0];
document.getElementById("question2").innerHTML = toetsVragen[1];
document.getElementById("question3").innerHTML = toetsVragen[2];
document.getElementById("question4").innerHTML = toetsVragen[3];
document.getElementById("question5").innerHTML = toetsVragen[4];


function checkQuestions() {
    let correct = 0;
    let input1 = document.getElementById("input1").value;
    if (input1 === correcteAntwoorden[0]) {
        document.getElementById("input1").style.backgroundColor = "#90EE90";
        correct += 1;
    } else {
        document.getElementById("input1").style.backgroundColor = "#f8878a";
    }

    let input2 = document.getElementById("input2").value;
    if (input2 === correcteAntwoorden[1]) {
        document.getElementById("input2").style.backgroundColor = "#90EE90";
        correct += 1;
    } else {
        document.getElementById("input2").style.backgroundColor = "#f8878a";
    }

    let input3 = document.getElementById("input3").value;
    if (input3 === correcteAntwoorden[2]) {
        document.getElementById("input3").style.backgroundColor = "#90EE90";
        correct += 1;
    } else {
        document.getElementById("input3").style.backgroundColor = "#f8878a";
    }
    let input4 = document.getElementById("input4").value;
    if (correcteAntwoorden[3].includes(input4)) {
        document.getElementById("input4").style.backgroundColor = "#90EE90";
        correct += 1;
    } else {
        document.getElementById("input4").style.backgroundColor = "#f8878a";
    }
    let input5 = document.getElementById("input5").value;
    if (correcteAntwoorden[4].includes(input5)) {
        document.getElementById("input5").style.backgroundColor = "#90EE90";
        correct += 1;
    } else {
        document.getElementById("input5").style.backgroundColor = "#f8878a";
    }
    if (correct === 5) {
        document.getElementById("aantalGoed").innerHTML = "Alle antwoorden zijn correct!";
    } else {
        document.getElementById("aantalGoed").innerHTML = correct + " van de 5 antwoorden zijn correct!";
    }
}