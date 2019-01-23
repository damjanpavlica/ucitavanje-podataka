fetch('https://randomuser.me/api/?results=10')
    .then(function(odgovor) {
        return odgovor.json();
    })
    .then(function(podatak) {
        const email = podatak.results[0].email;
        const gender = podatak.results[0].gender;
        document.body.innerHTML += "<h3>Emajl korisnika je: " + email + "</h3>"
        document.body.innerHTML += "Pol korisnika je: " + gender
    })
    .catch(function(greska) {
        console.log(greska);
    })
