/*
Tâches JavaScript
Test technique pour CHECK
Réalisé par Youssef HARZELLI - Août 2024
*/

/*
Tâche 1 : Retourne un nouveau tableau contenant uniquement les nombres impairs
Entrée : Tableau de nombre
Sortie : Tableau de nombre impair
*/ 

function getEvenNumbers(tab){
    return tab.filter(
        (number) => (number % 2) === 0
    ); 
}

/*Test
let tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let tabPair = getEvenNumbers(tab);

console.log(tabPair);

*/

/*
Tâche 2 : Modifier le texte HTML lors du clique sur le bouton approprié
*/

let btn = document.getElementById('btnText');
let text = document.getElementById('myText');
btn.addEventListener("click", ()=> {
    text.textContent = "Hello, Check !";
});

/*
Tâche 3 : Récupérer des données via l'API et les afficher dans le HTML
*/ 

let list = document.getElementById('listeApi');

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(resp => resp.json())
    .then(data => {
        data.slice(0,5).forEach(tache => {
            let li = document.createElement('li');
            li.textContent = tache.title;
            list.appendChild(li);
        })
    })
    .catch(err => console.log(err))
    .finally(console.log("Tâche 3 - les données ont bien été récupérées"));