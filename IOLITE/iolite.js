// INDEX
function validate() {
    var u = document.getElementById("user").value;
    var p = document.getElementById("password").value;

    if (u == "iolite" && p == "iolite") {
        return true;
    }
    if (u == "" && p == "") {
        alert("username and password fields can not be empty")
        return false;
    }
    if (u == "") {
        alert("username field can not be empty");
        return false;
    }
    if (p == "") {
        alert("password field can not be empty");
        return false;
    }
    alert("username or password is wrong");
    return false;
}


// PROFILE
var ctx1 = document.getElementsByClassName('chart-1');
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'chart-1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx2 = document.getElementsByClassName('chart-2');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'chat-2',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx3 = document.getElementsByClassName('chart-3');
var myChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'chart-3',
            data: [2, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            borderAlign: 'inner'
        }]
    }
});
