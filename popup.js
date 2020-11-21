// this funct can be deleted from here
// exportToCsv = function() {
//     var CsvString = "";
//     listOfUrls.forEach(function(RowItem, RowIndex) {
//         CsvString += RowItem + ',';
//         CsvString += "\r\n";
//     });
//     CsvString = "data:application/csv," + encodeURIComponent(CsvString);

//     var x = document.createElement("A");
//     x.setAttribute("href", CsvString );
//     x.setAttribute("download", "urls.csv");
//     document.body.appendChild(x);
//     x.click();
// }


// openHelp = function() {
//     var help_window = document.createElement("A");
//     help_window.setAttribute("href", 'https://github.com/agnesk92/URLScraper/blob/master/README.md');
//     help_window.setAttribute("target", "_blank");

//     console.log('HELPING1');
//     // document.body.appendChild(help_window);
//     // help_window.click();
// }


send_msg_download = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": "start_download"});
    });
}


send_msg_help = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": "help"});
    });
}

document.getElementById('downloader').onclick = send_msg_download;
document.getElementById('help').onclick = send_msg_help;
