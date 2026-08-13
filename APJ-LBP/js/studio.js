function choisirMoteur(message){

const texte = message.toLowerCase();

if(
texte.includes("code") ||
texte.includes("html") ||
texte.includes("css") ||
texte.includes("javascript")
){

document.getElementById("engine").textContent = "ChatGPT";

}else{

document.getElementById("engine").textContent = "Claude";

}

}

const envoyer=document.getElementById("send");

envoyer.onclick=function(){

const texte=document.getElementById("message").value;

if(texte==="") return;

choisirMoteur(texte);

const chat=document.getElementById("chat");

chat.innerHTML+=`

<div class="user-message">

${texte}

</div>

`;

chat.innerHTML+=`

<div class="ia-message">

Très bonne idée.

Je vais analyser votre demande.

Je vais proposer un premier prototype de jeu.

</div>

`;

document.getElementById("message").value="";

chat.scrollTop=chat.scrollHeight;

}
