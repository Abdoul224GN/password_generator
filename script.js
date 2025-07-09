let password = "";
let information = document.querySelector('#information');
document.querySelector("button").addEventListener("click", function () {
    password = "";
    let longueur = document.querySelector('#longueur');
    let p = document.querySelector('p');
    let copie = document.querySelector('#copie');
    const number = "123456789";
    const majuscule = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    const minuscule = "abcdefghijklmnopqrstuvwxyz";
    let character = number + majuscule + minuscule;
    if (character === "") {
        information.innerHTML = "Veuillez selection un type de caractère";
        information.style.color = "red";
    } else {
        information.innerHTML = "";
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.random();
            let generatedNumber = Math.floor(randomNumber * character.length);
            let generatedCharacter = character[generatedNumber];
            password += generatedCharacter;
        }
        p.textContent = password;
    }
});

document.querySelector("#copie").addEventListener("click", function () {
    if (password === "") {
        information.innerHTML = "Veuillez générer un mot de passe d'abord";
        information.style.color = "red";
    } else {
        information.style.color = ""
        navigator.clipboard.writeText(password).then(r => information.innerHTML = "Texte copié");
    }
});