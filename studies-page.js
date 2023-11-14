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
    ['The pay was appropriate', 'for the time and effort.'], 
    ['The communication with', 'the researcher was effective', 'and transparent.'], 
    ['I experienced no issues', 'or difficulties completing', 'this study']
    ];

var stronglyAgreeValues = [10, 15, 5];
var agreeValues = [10, 15, 5];
var neutralValues = [10, 14, 6];
var disagreeValues = [5, 10, 15];
var stronglyDisagreeValues = [1, 1, 28];

// Calculate the bottom positions for the neutral and disagree bars
var agreeValues = stronglyAgreeValues.map((value, index) => value + agreeValues[index]);
var neutralBottom = agreeValues.map((value, index) => value + neutralValues[index]);
var disagreeBottom = neutralBottom.map((value, index) => value + disagreeValues[index]);
var stronglyDisagreeBottom = disagreeBottom.map((value, index) => value + stronglyDisagreeValues[index]);

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the divergent stacked bar chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categories,
        datasets: [
            {
                label: 'Strongly Agree',
                backgroundColor: '#2d8653',
                data: stronglyAgreeValues,
                stack: 'stack1'
            },
            {
                label: 'Agree',
                backgroundColor: '#53c585',
                data: agreeValues,
                stack: 'stack1'
            },
            {
                label: 'Neutral',
                backgroundColor: '#ffddb3',
                data: neutralValues,
                stack: 'stack1'
            },
            {
                label: 'Disagree',
                backgroundColor: '#ec785f',
                data: disagreeValues,
                stack: 'stack1'
            },
            {
                label: 'Strongly Disagree',
                backgroundColor: '#e54624',
                data: stronglyDisagreeValues,
                stack: 'stack1'
            }
        ]
    },
    options: {
        scales: {
            x: { stacked: true },
            y: { stacked: true }
        },
        indexAxis: 'y'
    }
});

