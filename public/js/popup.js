window.onload = () => {
    init();
}

async function init() {
    await initPopupUI();

    $('.btn-start').click(startButtonClicked);
    $('.btn-download').click(downloadButtonClicked);
}

function startButtonClicked() {
    
}

function downloadButtonClicked() {

}

async function initPopupUI() {
    const status = await getScraperStatus();

    if (status === RUNNING) {
        $('.lbl-running').show();
    } else if (status === FINISHED) {
        $('.lbl-finished').show();
        $('.btn-start').show();
        $('.btn-download').show();
    } else {
        $('.btn-start').show();
    }
}
