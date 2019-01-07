window.addEventListener("load", sidenVises);

//BURGERMENU

function sidenVises() {
    console.log("siden vises");
    // registrer klik på menuknap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden")

    if (erSkjult == true) {
        //menuen er skjult - ændr menuknap til lll
        document.querySelector("#menuknap img").src = "UI/menu.png";
    } else {
        //menuen er nu vist - ændr menuknap til X
        document.querySelector("#menuknap img").src = "UI/cancel2.png";
    }
}

//BURGERMENU SLUT
