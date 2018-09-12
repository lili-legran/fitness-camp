menu.onclick = function myFunction() {
    var x = document.querySelector(".menu");

    if (x.className === "menu") {
    x.className += " open";
    } else {
    x.className ="menu";
    }
}