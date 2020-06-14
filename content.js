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


exportToCsv = function() {
    var CsvString = "";
    listOfUrls.forEach(function(RowItem, RowIndex) {
        CsvString += RowItem + ',';
        CsvString += "\r\n";
    });
    CsvString = "data:application/csv," + encodeURIComponent(CsvString);

    var x = document.createElement("A");
    x.setAttribute("href", CsvString );
    x.setAttribute("download", "urls.csv");
    document.body.appendChild(x);
    x.click();
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
        console.log(listOfUrls);
    }
    else if ( request.message === "start_download") {
        console.log(request.message);
        exportToCsv();
    }
  }
);
