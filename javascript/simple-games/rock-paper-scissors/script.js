let more = "true";
while (more) {
    // menangkap pilihan user
    let user = prompt("silakan pilih gunting, batu, atau kertas");

    // menangkap pilihan komputer dengan math.random
    let comp = Math.random();
    if (comp <= 0.34) {
        comp = "batu";
    } else if (comp > 0.34 && comp <= 0.67) {
        comp = "kertas";
    } else {
        comp = "gunting";
    }
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
