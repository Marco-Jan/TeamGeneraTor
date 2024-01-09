


document.getElementById('coinToss').addEventListener('click', Münzwurf);


function Münzwurf() {
    let x = "Kopf";
    let y = "Zahl";
    document.getElementById('preTeamTable', 'team1Container', 'team2Container').innerHTML = "";


    setTimeout(() => {
        document.getElementById('parentContainer').innerHTML = ".";
    }, 200)
    setTimeout(() => {
        document.getElementById('parentContainer').innerHTML = "..";
    }, 500)
    setTimeout(() => {
        document.getElementById('parentContainer').innerHTML = "...";
    }, 800)


    setTimeout(() => {
        const münzwurf = Math.random() <= 0.5 ? x : y;

        if (münzwurf == x) {
            document.getElementById('parentContainer').innerHTML = "Kopf";
            console.log("kopf1");

        } else {
            document.getElementById('parentContainer').innerHTML = "Zahl";
            console.log("zahl1");
        }
    }
        , 1500);
};


let spielerListe = [];

document.getElementById('spielerHinzufuegen').addEventListener('click', spielerHinzufuegen);
document.getElementById('teamErstellen').addEventListener('click', erstelleTeams);

function spielerHinzufuegen() {
    const eingabe = document.getElementById('spielerEingabe');
    const spielerName = eingabe.value;
    if (spielerName) {
        spielerListe.push(spielerName);
        eingabe.value = '';
        document.getElementById('parentContainer').innerHTML = "";
        document.getElementById('preTeamTable').innerHTML = spielerListe;
        console.log(spielerListe);
    }
}

function mischeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function erstelleTeams() {

    const gemischteSpieler = mischeArray([...spielerListe]);

    const team1 = gemischteSpieler.slice(0, gemischteSpieler.length / 2);
    const team2 = gemischteSpieler.slice(gemischteSpieler.length / 2);

    document.getElementById('team1Container').innerHTML = "Team 1: " + team1.join(', ');
    document.getElementById('team2Container').innerHTML = "Team 2: " + team2.join(', ');



    console.log(team1, team2);
}

document.getElementById('listeLeeren').addEventListener('click', listeLeeren);

function listeLeeren() {
    spielerListe = [];
    document.getElementById('preTeamTable', 'parentContainer', 'team1Container', 'team2Container').innerHTML = "";
    console.log('Spielerliste geleert:', spielerListe);
}





