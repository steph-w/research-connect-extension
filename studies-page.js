document.addEventListener('DOMContentLoaded', function () {
    var researcherBtn = document.getElementById('openResearcherPageButton');
    researcherBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'open_researcher_page' });
    });
});

