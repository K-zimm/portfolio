function menuOpen() {
    var x = document.getElementsByTagName("body");
    if (x.className === "home") {
        x.className += " menu-active";
    } else {
        x.className = "home";
    }
}