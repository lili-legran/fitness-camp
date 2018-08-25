menu.onclick = function myFunction() {
    var x = document.getElementById('myRunnav');

    if (x.className === "runNav") {
        x.className += " responsive";
    } else {
        x.className = "runNav";
    }
}