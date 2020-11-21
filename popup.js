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


send_msg_change_theme = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": "change_theme"});
    });
}


document.getElementById('downloader').onclick = send_msg_download;
document.getElementById('help').onclick = send_msg_help;
document.getElementById('about').onclick = send_msg_help;
document.getElementById('themes').onclick = send_msg_change_theme;
