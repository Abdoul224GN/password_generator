document.querySelector("button").addEventListener("click", function () {
    let majusculeCheck = document.querySelector('#majuscule');
    let minisculeCheck = document.querySelector('#minuscule');
    let numberCheck = document.querySelector('#number');
    let longueur = document.querySelector('#longueur');
    let p = document.querySelector('p');
    let passwordLongueur = parseInt(longueur.value);
    const number = "123456789";
    const majuscule = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    const miniscule = "abcdefghijklmnopqrstuvwxyz";
    let character = "";
    let password = "";
    if (majusculeCheck.checked) {
        character += majuscule;
    }
    if (minisculeCheck.checked) {
        character += miniscule;
    }
    if (numberCheck.checked) {
        character += number;
    }
    let erreur = document.querySelector('#erreur');
    if (character === "") {
        erreur.innerHTML = "Veuillez selection un type de caractère";
        erreur.style.color = "red";
    } else {
        erreur.innerHTML = "";
        for (let i = 0; i < passwordLongueur; i++) {
            const randomNumber = Math.random();
            let generatedNumber = Math.floor(randomNumber * character.length);
            let generatedCharacter = character[generatedNumber];
            password += generatedCharacter;
        }
        p.textContent = password;
    }
});