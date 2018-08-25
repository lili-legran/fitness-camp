menu.onclick = function myFunction() {
    var x = document.querySelector(".menu");

    console.log("21");

    if (x.className === "menu") {
    x.className += " open";
    } else {
    x.className ="menu";
    }
}