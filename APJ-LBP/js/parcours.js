const bouton = document.getElementById("generate");

const jeux = [
{
nom:"🔤 Mots mêlés",
difficulte:"Facile",
temps:"10 min",
competence:"Identifier les mots-clés"
},
{
nom:"✏️ Mots croisés",
difficulte:"Moyen",
temps:"15 min",
competence:"Mobiliser le vocabulaire"
},
{
nom:"🧠 Quiz",
difficulte:"Facile",
temps:"8 min",
competence:"Vérifier les connaissances"
},
{
nom:"🚗 Course éducative",
difficulte:"Moyen",
temps:"12 min",
competence:"Réagir rapidement"
},
{
nom:"🌸 Jeu des fleurs",
difficulte:"Facile",
temps:"10 min",
competence:"Faire des associations"
},
{
nom:"🎲 Dominos didactiques",
difficulte:"Moyen",
temps:"15 min",
competence:"Associer les concepts"
},
{
nom:"🧩 Puzzle",
difficulte:"Facile",
temps:"8 min",
competence:"Structurer les connaissances"
},
{
nom:"🔊 Jeu de sons",
difficulte:"Difficile",
temps:"12 min",
competence:"Reconnaissance auditive"
}
];

bouton.onclick = function(){

const notion = document.querySelector("input").value;
const niveau = document.querySelectorAll("select")[0].value;
const discipline = document.querySelectorAll("select")[1].value;

const zone = document.getElementById("games");

zone.innerHTML = `
<h2 style="grid-column:1/-1;color:#4B3BFF;">
📖 ${notion}
</h2>

<p style="grid-column:1/-1;">
<b>Niveau :</b> ${niveau}<br>
<b>Discipline :</b> ${discipline}<br><br>

🤖 L'IA propose plusieurs jeux didactiques pour cette notion.
</p>
`;

jeux.forEach(function(jeu){

zone.innerHTML += `

<div class="game">

<h2>${jeu.nom}</h2>

<p><b>Compétence :</b><br>${jeu.competence}</p>

<p>⏱ ${jeu.temps}</p>

<p>⭐ ${jeu.difficulte}</p>

<button>▶ Jouer</button>

</div>

`;

});

}
