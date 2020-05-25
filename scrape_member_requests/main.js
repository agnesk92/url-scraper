listOfUrls = [];

getLink = function() {
    console.log(this.href); // `this` being the element triggering the event.
    listOfUrls.push(this.href);
    this.style.color = "pink";
    this.style.background = "yellow";
}

getLinkTracker = function(link) {
    link.addEventListener('mouseover', getLink);
}

removeLinkTracker = function(link) {
    link.removeEventListener('mouseover', getLink);
}

// Add event listener
startLinkCollection = function() {
    [].forEach.call(document.querySelectorAll('a'), getLinkTracker);
}

// Remove event listener
endLinkCollection = function() {
    [].forEach.call(document.querySelectorAll('a'), removeLinkTracker);
}

// Clean list
cleanList = function() {
    const unique = [...new Set(listOfUrls)];
}

window.onkeypress = function(event) {
    if (event.key == "S") {
        console.log("Start copying links");
        startLinkCollection();
    }
    if (event.key == "E") {
        console.log("Stop copying links");
        endLinkCollection();
    }
}
