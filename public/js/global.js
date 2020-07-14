/**
 * Get active tab
 */
function getActiveTab() {
    return new Promise((resolve) => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            if (tabs.length > 0) {
                resolve(tabs[0]);
            } else {
                resolve(null);
            }
        });
    });
}

/**
 * Open a URL in a new tab
 */
function openURL(url, tabId) {
    return new Promise((resolve) => {
        if (tabId) {
            chrome.tabs.update(tabId, {url: url}, (tab) => {
                resolve(tab.id);
            });
        } else {
            chrome.tabs.create({url: url}, (tab) => {
                resolve(tab.id);
            });
        }
    });
}