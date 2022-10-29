
window.addEventListener('load',handler);

async function handler () {
    const x_tab = await getCurrentTab();
    const size = x_tab.url.length;

    if(x_tab.url == "chrome://newtab/" || size > 150){
        x_tab.url = "https://github.com/daddydemir"
    }

    var qrcode = new QRCode(document.getElementById("qr"), {
        text: x_tab.url,
        width: 150,
        height: 150,
        colorDark : "#5868bf",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
}



async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    
    return tab;
    
  }