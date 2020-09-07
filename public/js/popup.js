window.onload = () => {
    init();
}

async function init() {
    await initPopupUI();

    $('.btn-start').click(startButtonClicked);
    $('.btn-download').click(downloadButtonClicked);
}

async function startButtonClicked() {
    await startScraping();
    await initPopupUI();
}

function downloadButtonClicked() {
    openURL(`${URL_API}/get_output`);
}

async function initPopupUI() {
    const status = await getScraperStatus();
    
    if (status === PROGRESS) {
        $('.lbl-running').show();
        $('.lbl-finished').hide();
        $('.btn-start').hide();
        $('.btn-download').hide();
    } else if (status === FINISHED) {
        $('.lbl-running').hide();
        $('.lbl-finished').show();
        $('.btn-start').show();
        $('.btn-download').show();
    } else {
        $('.lbl-running').hide();
        $('.lbl-finished').hide();
        $('.btn-start').show();
        $('.btn-download').hide();
    }
}
