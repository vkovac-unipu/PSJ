Obrt `rentaBoat` bavi se iznajmljivanjem brodica i brodova za razne prigode. Njihova web stranica https://www.rentaboat.net/ glavni je kanal komunikacije s korisnicima. Na web stranici se nalazi ponuda brodova i brodica, gdje se prikazuje koji brodovi su dostupni za najam, u kojem terminu (datum i vrijeme) te cijena najma. Svaki brod/brodica ima svoje karakteristike: naziv, maksimalni kapacitet, tip, godina proizvodnje, maksimalna brzina, snaga motora u KS, dodatna oprema, dnevna cijena najma.

U dodatnu opremu mogu spadati: tuš, hladnjak, GPS, radio, kuhinja, WC, utičnice za struju, tenda, gumenjak, oprema za ribolov, ekosonder. Tipovi brodica i brodova mogu uključivati: gliser, jahta, brodica za ribolov, gumenjak, jedrilica, brodica s kabinom, mala brodica bez kabine.

Korisnici se moraju registrirati i unijeti osobne podatke, te za registraciju odabrati željeni termin najma (datumi od/do), broj osoba, željenu dodatnu opremu te naravno samu brodicu. Nakon što korisnik unese sve podatke, izračunava se ukupna cijena najma i korisnika se obavještava o uspješnoj rezervaciji.

Na temelju ugrubo danog opisa poslovnog procesa obrta `rentaBoat`, definirajte objekt `rentaBoat` koji će sadržavati sve potrebne podatke za opisani poslovni proces. Za modeliranje ovog objekta koristite ugniježđene strukture objekata i polja.

Prvo definirajte 3 objekta `brod` koristeći sljedeće podatke:

**Brod 1:** "Gliser", 2015. god, 20 čvorova, 150 KS, 6 osoba, "Tuš", "Hladnjak", "GPS", "Radio", "Tenda", "Oprema za ribolov", "Ekosonder", 250 eur/dan
**Brod 2:** "Jahta", 2018. god, 35 čvorova, 300 KS, 8 osoba, "Tuš", "Hladnjak", "GPS", "Radio", "Kuhinja", "WC", "Utičnice za struju", "Tenda", "Gumenjak", 1000 eur/dan
**Brod 3:** "Jedrilica", 2019. god, 12 čvorova, 50 KS, 4 osobe, "Tuš", "Hladnjak", "GPS", "Radio", "Kuhinja", "WC", "Utičnice za struju", "Gumenjak", "Oprema za ribolov", 300 eur/dan

Nakon toga definirajte objekt `rentaBoat` koji će sadržavati sve potrebne podatke za opisani poslovni proces. Potrudite se da objekt bude što precizniji, jedinstvenog rješenja nema, ali pokušajte što bolje modelirati opisani poslovni proces.

Jednom kad napravite objekt `rentaBoat`, definirajte metode `provjeriOpremu()`, `ukupnaCijena()` i `dodajRezervaciju()`. Ideja je da metoda `dodajRezervaciju()` poziva metode `provjeriOpremu()` i `ukupnaCijena()`. Na kraju pozovite metodu `dodajRezervaciju()`.
