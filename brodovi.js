
// naziv max apacitet, tip, godina proizvodnje, maksimalna brzina, snaga motora u KS, dodatna operma ,devna cijena namjma 
let brod1 = {

    naziv: "Gliser",
    godina_proizvodnje: 2015,
    maksimalna_brzina: 20,
    snaga_motora: 150,
    kapacitet: 6,
    dodatna_oprema: ["Tuš", "Hladnjak", "GPS", "Radio", "Tenda", "Oprema za ribolov", "Ekosonder"],
    najam: 250
};

let brod2 = {

    naziv: "Jahta",
    godina_proizvodnje: 2018,
    maksimalna_brzina: 35,
    snaga_motora: 300,
    kapacitet: 8,
    dodatna_oprema: ["Tuš", "Hladnjak", "GPS", "Radio", "Kuhinja", "WC", "Uticnice za struju", "Tenda", "Gumenjak"],
    najam: 1000
};

let brod3 = {

    naziv: "Jedrilica",
    godina_proizvodnje: 2019,
    maksimalna_brzina: 12,
    snaga_motora: 50,
    kapacitet: 4,
    dodatna_oprema: ["Tuš", "Hladnjak", "GPS", "Radio", "Kuhinja", "WC", "Uticnice za struju", "Gumenjak", "Oprema za ribolov"],
    najam: 300
};


let korisnik1 = {
    korisnik_id: 1,
    ime: "Registar",
    prezime: "Registrovic",
    adresa: {
        ulica: "Ulica Registra",
        grad: "Pula"
    },
    kontakt: "097654878"
};

let korisnik2 = {
    korisnik_id: 2,
    ime: "Matija",
    prezime: "Matic",
    adresa: {
        ulica: "Ulica123",
        grad: "Osijek"
    },
    kontakt: "09998878"
}


let rentaBoat = {

    web: "https://www.rentaboat.net/",

    brodovi: [brod1, brod2, brod3],

    registar_korisnika: [korisnik1, korisnik2],

    rezervacija: [

        {
            korisnik: korisnik1,
            brodica: brod1,
            start_date: new Date("2026-06-15"),
            end_date: new Date("2026-06-25"),
            broj_osoba: 6,
            odabrana_oprema: ["Tuš", "Hladnjak", "GPS", "Tenda", "Oprema za ribolov"],
            cijena: 2500
        }
    ],


    // provjeri opremu

    provjeriOpremu: function (brodObjekt, odabranaOprema) {

        // vraca objekt brod ako ga nadje ako ne nadje vraca undefined


        if (!this.brodovi.includes(brodObjekt)) {
            console.log("Brod pod ovim imenom ne postoji u bazi");
            return false;
        }

        // probat implementairati callback funkciju 
        // every provjerava da je sastav objekta nad kojim je pozivamo unutar neceg

        return odabranaOprema.every(stavka => brodObjekt.dodatna_oprema.includes(stavka));

    },

    ukupnaCijena: function (brodObjekt, brojDana) {

        if (!this.brodovi.includes(brodObjekt)) {
            console.log("Brod pod ovim imenom ne postoji u bazi");
            return false;
        }

        return brodObjekt.najam * brojDana;

    },

    dodajRezervaciju: function (korisnikRez, brodRez, startRez, daniRez, osobeRez, opremaRez) {


        // STVARANJE DATUMA 
        // nemoj zaboraviti new 
        let datum_od = new Date(startRez)
        // datum ce se prebaciti na sljedeci mjesec 
        let datum_do = new Date(datum_od) // ne mogu samo datum_od = datum_do jer tako referenciram, a ne stvaram novi objekt

        // moram koristiti setDate jer on je "pametan" i zbraja
        datum_do.setDate(datum_od.getDate() + daniRez);

        // PROVJERA TERMINA 
        // some vraca true za bar jedan pa je logicnije traziti zauzetost termina
        let zauzetostTermina = this.rezervacija.some(rez => {

            // ne moramo koristiti this jer arrow referencira unutar ove funkcije?
            let brodUvjet = rez.brodica == brodRez

            // ako je termin unutar granica vrati true jer to znaci da je termin zauzet 
            let unutarTermina = (datum_do > rez.start_date && datum_od < rez.end_date)


            return brodUvjet && unutarTermina
        });

        if (zauzetostTermina) {
            console.log("Termin je zuzet!")
            return false;
        }

        // PROVJERA KAPACITETA 
        if (brodRez.kapacitet < osobeRez) {
            console.log(`Ovaj brod moze primiti samo ${brodRez.kapacitet} osoba.`)
        }

        // PROVJERA OPREME

        let dozvoljenaOprema = this.provjeriOpremu(brodRez, opremaRez);

        if (!dozvoljenaOprema) {
            console.log("Nije moguce izabrati navedenu opremu.")
            return false;
        }


        let cijenaRez = this.ukupnaCijena(brodRez, daniRez);


        let novi_termin = {

            korisnik: korisnikRez,
            brodica: brodRez,
            start_date: datum_od,
            end_date: datum_do,
            broj_osoba: osobeRez,
            odabrana_oprema: opremaRez,
            cijena: cijenaRez
        }

        this.rezervacija.push(novi_termin);

        console.log("Rezervacija uspjesno dodana!");
    }
}



rentaBoat.dodajRezervaciju(korisnik2, brod2, "2026-7-14", 20, 5, ["Tuš", "Hladnjak", "GPS", "Radio", "Kuhinja"])

console.log(rentaBoat.rezervacija)

// dodajRezervaciju: function (korisnik, brod, datum_od, datum_do, broj_osoba, odabrana_oprema){};

rentaBoat.dodajRezervaciju(korisnik2, brod1, "2026-06-20", 5, 4, ["Tuš", "Hladnjak", "GPS"]);



// --
//  provjeriOpremu()
//  ukupnaCijena() 
//  dodajRezervaciju()
//  metoda dodajRezervaciju() poziva metode provjeriOpremu() i ukupnaCijena().
//  Na kraju pozovite metodu dodajRezervaciju().