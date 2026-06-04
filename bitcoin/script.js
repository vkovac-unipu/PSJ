

// cini se da je https://api.coindesk.com/v1/bpi/currentprice.json" dolje, nije mi htjelo raditi 
async function dohvatiPodatke() {

    let link = "https://api.blockchain.info/ticker";

    try {
        let odgovor = await fetch(link);
        let podaci = await odgovor.json();

        // console.log(podaci);

        let usdCijena = podaci.USD.last;
        let eurCijena = podaci.EUR.last;
        let gbpCijena = podaci.GBP.last;


        let vrijemeAzuriranja = new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

        // html 
        document.getElementById("usd").innerHTML = `USD: <b>${usdCijena}</b>`;
        document.getElementById("eur").innerHTML = `EUR: <b>${eurCijena}</b>`;
        document.getElementById("gbp").innerHTML = `GBP: <b>${gbpCijena}</b>`;
        document.getElementById("vrijeme").innerHTML = vrijemeAzuriranja;

    } catch (greska) {

        console.log("Greska pri dohvacanju: ", greska);
    }


}

document.getElementById("azuriraj").addEventListener("click", dohvatiPodatke);
