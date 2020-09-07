function getScraperStatus() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${URL_API}/get_status`,
            type: 'POST',
            success: response => {
                resolve(response.status);
            },
            error: err => {
                reject(err);
            }
        });
    });
}

function startScraping() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${URL_API}/start`,
            type: 'POST',
            success: response => {
                resolve(response);
            },
            error: err => {
                reject(err);
            }
        });
    });
}