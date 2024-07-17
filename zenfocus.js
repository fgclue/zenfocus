const docLocation = document.location

function blockSite() {
    const url = browser.runtime.getURL('focus/index.html')
    window.location = url + "?url=" + docLocation
}

if (docLocation == "https://blog.biitle.nl/404.html") {
    blockSite();
}