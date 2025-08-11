
// get computer option with function
function getComputerOption() {
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

let more = "true";
while (more) {
    // menangkap pilihan user
    let user = prompt("silakan pilih gunting, batu, atau kertas");
    // memanggil function pilihan komputer dengan math.random
    let comp = getComputerOption();
    // menentukan rules
    let hasil = "";
    if (user === comp) {
        hasil = "Seri!";
    } else if (user == "gunting") {
        hasil = (comp == "kertas")?"menang":"kalah";
    } else if (user == "batu") {
        hasil = (comp == "gunting")?"menang":"kalah";
    } else if (user == "kertas") {
        hasil = (comp == "batu")?"menang":"kalah";
    } else {
        hasil = alert("Pilihan tidak valid");
    }
    // menampilkan hasil nya
    alert("anda memilih :" + user + "\nkomputer memilih : " + comp + "\nmaka hasil nya : " + hasil);

    more = confirm("ingin memainkan lagi?");
}

alert('Terimakasih!')
