class Osoba{
    constructor(ime,prezime,brojTelefona, email){
        this.ime=ime;
        this.prezime=prezime;
        this.brojTelefona=brojTelefona;
        this.email=email;
    }
}

var prvaOsoba=new Osoba("Nebojsa", "Kosco", "065731095","nebojsa.kosco@gmail.com")
var drugaOsoba=new Osoba("Nenad", "Nenadic", "065877809","nenad.nenadic@gmail.com")
var osobetabela=[prvaOsoba, drugaOsoba]

var tabel = document.getElementById("content");
var headerRed = tabel.innerHTML;

function ispis(){
    tabel.innerHTML = headerRed;


for (var i=0; i<osobetabela.length; i++){
    tabel.innerHTML+="<tr><td>"+osobetabela[i].ime +"</td>" + "<td>"+osobetabela[i].prezime + "</td>" + "<td>"+osobetabela[i].brojTelefona + "</td>"+ "<td>"+osobetabela[i].email + "</td>"
    + "<td><button class='butn-one butn' onclick='obrisi("+ i +")'>Obrisi</button><button class='butn-two butn'onclick='izmjeni("+ i + ")'>Izmjeni</button></td></tr>";

}
}
ispis();

function dodajOsobu(){
    var novoIme = document.getElementById("ime").value;
    var novoPrezime = document.getElementById("prezime").value;
    var noviEmail = document.getElementById("email").value;
    var noviBroj = document.getElementById("brojTelefona").value;

    osobetabela.push(new Osoba(novoIme, novoPrezime, noviBroj, noviEmail));

    
    ispis();
}

function obrisi(index){
    osobetabela.splice(index, 1);
    ispis();
}


function izmjeni(index) {
    var novoIme = prompt("Unesite novo ime");
    var novoPrezime = prompt("Unesite novo prezime");
    var noviBroj = prompt("Unesite novi broj");
    var noviEmail = prompt("Unesite novi email");
    osobetabela[index].ime = novoIme;
    osobetabela[index].prezime = novoPrezime;
    osobetabela[index].brojTelefona = noviBroj;
    osobetabela[index].email = noviEmail;
    ispis();
}
