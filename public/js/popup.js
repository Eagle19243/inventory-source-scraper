window.onload = () => {
    init();
}

async function init() {
    await initPopupUI();

    $('.btn-start').click(startButtonClicked);
    $('.btn-download').click(downloadButtonClicked);
}

async function startButtonClicked() {
    const taskId = await startScraping();
    await setValueToStorage({task_id: taskId});
    await initPopupUI();
}

function downloadButtonClicked() {
    openURL(`${URL_API}/get_output`);
}

async function initPopupUI() {
    let status   = FINISHED;
    const taskId = await getValueFromStorage('task_id');
    
    if (taskId) {
        status = await getScraperStatus(taskId);
    }
    
    if (status === RUNNING) {
        $('.lbl-running').show();
        $('.lbl-finished').hide();
        $('.btn-start').hide();
        $('.btn-download').hide();
    } else if (status === FINISHED) {
        $('.lbl-running').hide();
        $('.lbl-finished').show();
        $('.btn-start').show();
        $('.btn-download').show();
        await setValueToStorage({task_id: null});
    } else {
        $('.lbl-running').hide();
        $('.lbl-finished').hide();
        $('.btn-start').show();
        $('.btn-download').hide();
    }
}
