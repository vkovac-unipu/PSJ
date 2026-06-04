// Početni kȏd ovdje


function azurirajSadrzaj(klasa, noviSimbol) {


    const query = document.querySelectorAll('.' + klasa);


    for (let element of query) {

        element.innerHTML = noviSimbol;
    }

}


function azurirajCijenu(tag) {

    const query = document.querySelectorAll(tag);


    for (let iznos of query) {


        iznos.innerHTML = (Number.parseFloat(iznos.innerHTML) * 1.16547).toFixed(2);

    }

}

azurirajSadrzaj("symbol", "€"); // Promjena simbola svugdje gdje imamo klasu "symbol"
azurirajCijenu("u"); // Ažuriraj cijenu svugdje gdje imamo tag "u"