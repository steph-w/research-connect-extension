document.addEventListener('DOMContentLoaded', function () {
    var researcherBtn = document.getElementById('openStudiesPageButton');
    researcherBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'open_studies_page' });
    });
});

// Sample time series data
var timeLabels = ['01/01/23', '02/01/23', '03/10/23', '08/01/23', '09/20/23'];
var data = [30, 45, 99, 66, 75];

// Convert time labels to JavaScript Date objects
var timeLabelsAsDates = timeLabels.map(label => new Date(label));

// Get the canvas element
var ctx = document.getElementById('myTimeSeriesChart').getContext('2d');

// Create the time series line chart
var myTimeSeriesChart = new Chart(ctx, {
    data: {
        labels: timeLabels,
        datasets: [
            {
            type: 'line',
            label: 'Recommendation Rating',
            data: data,
            // borderColor: 'black',
            borderWidth: 2,
            pointRadius: 3,
            tension: 0.1,
            fill: false
        }]
    },
    options: {
        scaleShowValues: true, 
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: "black",
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: "black",
                },
            }
        }
    }
});