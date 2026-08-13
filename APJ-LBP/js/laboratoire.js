const boutons = document.querySelectorAll(".action-card button");

boutons.forEach(function(bouton){

// Le bouton "Créer" navigue désormais vers le Studio IA, pas d'alerte pour lui
if(bouton.closest("a")){
    return;
}

bouton.addEventListener("click",function(){

alert("Cette fonctionnalité sera connectée au moteur IA APJ/LBP.");

});

});
