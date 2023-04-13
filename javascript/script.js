let firstName = prompt("Inserisci il tuo nome");

let surname = prompt("Inserisci il tuo cognome");

let favoriteColor = prompt("Inserisci il tuo colore preferito");

let newPassword = `${firstName}-${surname}-${favoriteColor}-2023`;

document.getElementById("password").innerHTML = newPassword;