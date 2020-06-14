
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

send_message = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": "start_download"});
    });
}

document.getElementById('downloader').onclick = send_message;
