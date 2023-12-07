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

// Results chart

var categories = [
    ['Pay was appropriate'],
    ['Communication was effective'],
    ['Experienced no issues'],
];

var agreeValues = [10, 15, 5];
var neutralValues = [10, 14, 6];
var disagreeValues = [5, 10, 15];

// Calculate the bottom positions for the neutral and disagree bars
var agreeValues = agreeValues.map((value, index) => value + agreeValues[index]);
var neutralBottom = agreeValues.map((value, index) => value + neutralValues[index]);
var disagreeBottom = neutralBottom.map((value, index) => value + disagreeValues[index]);

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the divergent stacked bar chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categories,
        datasets: [
            {
                label: 'Agree',
                backgroundColor: '#2d8653',
                data: agreeValues,
            },
            {
                label: 'Neutral',
                backgroundColor: '#ffddb3',
                data: neutralValues,
            },
            {
                label: 'Disagree',
                backgroundColor: '#e54624',
                data: disagreeValues,
            },
        ]
    },
    options: {
    }
});

