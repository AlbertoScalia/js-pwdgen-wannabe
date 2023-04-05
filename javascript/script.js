const firstName = prompt("Inserisci il tuo nome");

const surname = prompt("Inserisci il tuo cognome");

const favoriteColor = prompt("Inserisci il tuo colore preferito");

const newPassword = firstName + surname + favoriteColor + 2023;

document.getElementById("password").innerHTML = newPassword;