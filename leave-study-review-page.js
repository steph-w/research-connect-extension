document.addEventListener('DOMContentLoaded', function () {
    var submitStudyReviewButtonBtn = document.getElementById('submitStudyReviewButton');
    submitStudyReviewButtonBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'submit_study_review' });
    });
});