document.addEventListener('DOMContentLoaded', function () {
    var researcherBtn = document.getElementById('openResearcherPageButton');
    researcherBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'open_researcher_page' });
    });

    var studyReviewPageBtn = document.getElementById('studyReviewPageButton');
    studyReviewPageBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'open_study_review_page' });
    });
});

