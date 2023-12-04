function toggleTheme(theme) {

    var themeLink = document.getElementById('theColour');
    
    themeLink.setAttribute('href', theme + '.css');
}

function toggleView(layout) {

    var layoutLink = document.getElementById('theLayout');
    
    layoutLink.setAttribute('href', layout + '.css');
}

function entryT() {

    window.location.href = "https://www.yorku.ca/";
    
}

