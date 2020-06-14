listOfUrls = [];

getLink = function() {
    console.log(this.href); // `this` being the element triggering the event.
    listOfUrls.push(this.href);
//    this.style.color = "pink";
    this.style.background = "pink";
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
cleanList = function(urls) {
    listOfUrls = [...new Set(urls)];
}

document.onkeydown = function (event) {
  if (event.key == "C") {
    console.log("keydown");
    startLinkCollection();
  }

  if (event.key == "P") {
    console.log("keydown");
    console.log("listOfUrls now is: ");
    console.log(listOfUrls);
  }
};

document.onkeyup = function (event) {
  if (event.key == "C") {
    console.log("keyup");

    console.log(listOfUrls.length);
    cleanList(listOfUrls);
    console.log(listOfUrls.length);

    endLinkCollection();
  }
};


window.onkeypress = function(event) {
    //    if (event.key == "S") {
    //        console.log("Start copying links");
    //        startLinkCollection();
    //    }
    //    if (event.key == "E") {
    //        console.log("Stop copying links");
    //        console.log(listOfUrls.length);
    //        cleanList(listOfUrls);
    //        console.log(listOfUrls.length);
    //        endLinkCollection();
    //    }
}

