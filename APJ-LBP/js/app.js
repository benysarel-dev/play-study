async function charger(id,fichier){

const contenu=await fetch(fichier);

document.getElementById(id).innerHTML=await contenu.text();

}

async function chargerSidebar(){

await charger("sidebar","components/sidebar.html");

const page = window.location.pathname.split("/").pop() || "dashboard.html";

document.querySelectorAll(".sidebar a").forEach(function(lien){

if(lien.getAttribute("href") === page){

lien.classList.add("active");

}

});

}

charger("header","components/header.html");

chargerSidebar();

charger("footer","components/footer.html");
