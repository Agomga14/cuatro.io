function ready() {
var popup = document.getElementById("myPopup");
if (popup.classList.contains("show")) {
popup.classList.remove("show");
} else {
popup.classList.add("show");
}
}

document.addEventListener("click", function(event) {
var dropdowns = document.getElementsByClassName("dropdown4-content");
for (var i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show') && !event.target.matches('#dropdown4id')) {
openDropdown.classList.remove('show');
}
}
});
