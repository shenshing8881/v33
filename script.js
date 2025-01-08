document.addEventListener('DOMContentLoaded', function() {
    Telegram.WebApp.ready();
    Telegram.WebApp.BackButton.show();

    const startParam = Telegram.WebApp.initData.start_param;
    if (startParam) {
        manageTabVisibility(startParam);
    } else {
        manageTabVisibility('start'); // or default tab
    }
});

function handleClick(event, link, tabId) {
    event.preventDefault();
    Telegram.WebApp.openLink(`t.me/asiaviralsxx_bot/virals?startapp=${tabId}`);
    manageTabVisibility(tabId);
}

function manageTabVisibility(tabId) {
    // Your logic to manage tab visibility based on tabId
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// Other functions...