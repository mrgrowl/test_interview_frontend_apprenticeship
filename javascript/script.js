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

