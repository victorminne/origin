// ce fichier va servir pour les différentes fonction, 
//cela permettra de d'avoir des pages interactives et un plus petit nombre de fichier au sein du projet

function link() {
    // fonction permettant de filtrer la recherche en fonction du lien cliqué
}

var d = document.getElementById("d");
var d_s = document.getElementById("d_s");
var d_f = document.getElementById("d_f");
var d_g = document.getElementById("d_g");
var d_m = document.getElementById("d_m");

d.onclick = link(d);
d_s.onclick = link(d_s);
d_f.onclick = link(d_f);
d_g.onclick = link(d_g);
d_m.onclick = link(d_g);