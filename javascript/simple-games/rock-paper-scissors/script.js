
// get computer option with function
function getComputerOptionIdn() {
    // menangkap pilihan komputer dengan math.random
    let comp = Math.random();
    if (comp <= 0.34) {
        comp = "batu";
    } else if (comp > 0.34 && comp <= 0.67) {
        comp = "kertas";
    } else {
        comp = "gunting";
    }
    return comp;
};
function getComputerOptionEng() {
    // get computer choise with math.random
    let comp = Math.random();
    if (comp <= 0.34) {
        comp = "rock";
    } else if (comp > 0.34 && comp <= 0.67) {
        comp = "paper";
    } else {
        comp = "scissors";
    }
    return comp;
};

// let wantToPlay = confirm(`hei mau bermain?`);
// if (wantToPlay == true) {
//     let more = "true";
//     while (more) {
//     // menangkap pilihan user
//     let user = prompt("silakan pilih gunting, batu, atau kertas");
//     // memanggil function pilihan komputer dengan math.random
//     let comp = getComputerOptionIdn();
//     // menentukan rules
//     let hasil = "";
//     if (user === comp) {
//         hasil = "Seri!";
//     } else if (user == "gunting") {
//         hasil = (comp == "kertas")?"menang":"kalah";
//     } else if (user == "batu") {
//         hasil = (comp == "gunting")?"menang":"kalah";
//     } else if (user == "kertas") {
//         hasil = (comp == "batu")?"menang":"kalah";
//     } else {
//         hasil = alert("Pilihan tidak valid");
//     }
//     // menampilkan hasil nya
//     alert("anda memilih :" + user + "\nkomputer memilih : " + comp + "\nmaka hasil nya : " + hasil);

//     more = confirm("ingin memainkan lagi?");
//     } 
// } else {
//     alert("ok, sampai jumpa lagi!");
// };

// english version 
let wantToPlay = confirm(`hey wanna play?`);
if (wantToPlay == true) {
    let more = "true";
    while (more) {
        // get user choice
        let user = prompt("please choose rock, paper, or scissors");
        // get computer choice
        let comp = getComputerOptionEng();
        // determine the rules
        let result = "";
        if (user === comp) {
            result = "Draw!";
        } else if (user == "scissors") {
            result = (comp == "paper")?"win":"lose";
        } else if (user == "rock") {
            result = (comp == "scissors")?"win":"lose";
        } else if (user == "paper") {
            result = (comp == "rock")?"win":"lose";
        } else if (user == false) {
            result = alert("invalid choice");
        }
        // show the result
        alert(`you chose : ${user}\ncomputer chose : ${comp}\nresult : ${result}`);
        more = confirm("do you want to play again?");
    }
} else {
    alert(`ok, see you later!`);
}

alert('Terimakasih!')
