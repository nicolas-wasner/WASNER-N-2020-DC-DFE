window.onload = function f() {
    var accueil = document.getElementById("accueil");
    var campus = document.getElementById("campus");
    var urlcourante = document.location.href;
    console.log(urlcourante);
    var index = urlcourante.indexOf("index");
    if (index !== -1){
        accueil.classList.add("active");
        campus.classList.remove("active");
    }
    else {
        campus.classList.add("active");
        accueil.classList.remove("active");
    }
};
