document.addEventListener('DOMContentLoaded', function () {
    var submitStudyReviewBtn = document.getElementById('submitStudyReviewButton');
    submitStudyReviewBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'open_studies_page' });
    });
    var backToStudiesBtn = document.getElementById('backToStudiesButton');
    backToStudiesBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'open_studies_page' });
    });
});