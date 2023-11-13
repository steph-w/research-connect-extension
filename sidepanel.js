document.addEventListener('DOMContentLoaded', function () {
    var researcherBtn = document.getElementById('openStudiesPageButton');
    researcherBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'open_studies_page' });
    });
});