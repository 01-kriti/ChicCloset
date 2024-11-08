window.onload = function () {
    // Simulate a click on the Polo tab on page load
    document.querySelector(".tablinks.active").click();
};


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;


    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    // Show the selected tab and add the "active" class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}