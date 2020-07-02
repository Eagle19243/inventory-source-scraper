let svListings = null;
window.onload = async function() {
    chrome.runtime.onMessage.addListener(handleMessage);
}

/**
 * Event listener to handle message
 */
async function handleMessage(message, sender, sendResponse) {
    if (message.action === 'GET_LISTINGS') {
        sendResponse(svListings);
    }
}