// Sample data

var categories = [
    ['The pay was appropriate', 'for the time and effort.'], 
    ['The communication with', 'the researcher was effective', 'and transparent.'], 
    ['I experienced no issues', 'or difficulties completing', 'this study']
    ];
var agreeValues = [10, 15, 5];
var neutralValues = [8, 12, 6];
var disagreeValues = [5, 10, 2];

// Calculate the bottom positions for the neutral and disagree bars
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
                backgroundColor: 'green',
                data: agreeValues,
                stack: 'stack1'
            },
            {
                label: 'Neutral',
                backgroundColor: 'gray',
                data: neutralValues,
                stack: 'stack1'
            },
            {
                label: 'Disagree',
                backgroundColor: 'red',
                data: disagreeValues,
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
