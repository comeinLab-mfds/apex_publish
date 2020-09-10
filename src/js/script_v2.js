google.load('visualization', '1', {packages: ['corechart', 'controls']});
google.setOnLoadCallback(drawDashboard);

var chart_test_data = [
    ["2020-4-20-13", 0.2, 0, 0, 0, null, null, null],
    ["2020-4-20-14", 0.2, 0, 0, 0, null, null, null],
    ["2020-4-20-15", 0.3, 0, 0, 0, null, null, null],
    ["2020-4-20-16", 0.2, 0, 0, 0, null, null, null],
    ["2020-4-20-17", 0.25, 0, 0, 0, null, null, null],
    ["2020-4-20-18", 0.36, 0.846, 0.71, 0.778, null, null, null],
    ["2020-4-20-19", 0.17, 0.796, 0.717, 0.756, null, null, null],
    ["2020-4-20-20", 0.28, 0.868, 0.881, 0.874, null, null, null],
    ["2020-4-20-21", 0.29, 0.56, 0.343, 0.452, null, null, null],
    ["2020-4-20-22", 0.30, -0.377, -0.637, -0.507, 0, .5, "Fluid Infusion"],
    ["2020-4-20-23", 0.2, -0.385, -0.516, -0.45, null, null, null],
    ["2020-4-21-00", 0.2, -0.347, -0.438, -0.392, null, null, null],
    ["2020-4-21-01", 0.3, -0.705, -0.677, -0.691, null, null, null],
    ["2020-4-21-02", 0.3, -0.829, -0.69, -0.76, null, null, null],
    ["2020-4-21-03", 0.25, -0.878, -0.784, -0.831, null, null, null],
    ["2020-4-21-04", 0.36, -0.957, -0.955, -0.956, null, null, null],
    ["2020-4-21-05", 0.17, -0.901, -0.926, -0.914, null, null, null],
    ["2020-4-21-06", 0.28, -0.445, -0.621, -0.533, null, null, null],
    ["2020-4-21-07", 0.29, -0.338, -0.725, -0.532, null, null, null],
    ["2020-4-21-08", 0.30, -0.318, -0.706, -0.512, null, null, null],
    ["2020-4-21-09", 0.2, -0.393, -0.238, -0.316, null, null, null],
    ["2020-4-21-10", 0.2, -0.477, 0.711, 0.117, null, null, null],
    ["2020-4-21-11", 0.3, -0.441, 0.736, 0.148, null, null, null],
    ["2020-4-21-12", 0.3, -0.465, 0.882, 0.208, null, null, null],
    ["2020-4-21-13", 0.25, -0.041, 0.237, 0.098, null, null, null],
    ["2020-4-21-14", 0.36, 0.04, 0.125, 0.082, null, null, null],
    ["2020-4-21-15", 0.17, 0.759, 0.631, 0.695, null, null, null],
    ["2020-4-21-16", 0.28, 0.9, 0.458, 0.679, null, null, null],
    ["2020-4-21-17", 0.29, 0.907, 0.657, 0.782, null, null, null],
    ["2020-4-21-18", 0.30, 0.885, 0.885, 0.885, null, null, null],
    ["2020-4-21-19", 0.2, 0.83, 0.837, 0.833, null, null, null],
    ["2020-4-21-20", 0.2, 0.745, 0.807, 0.776, null, null, null],
    ["2020-4-21-21", 0.3, -0.052, 0.212, 0.08, null, null, null],
    ["2020-4-21-22", 0.3, 0.635, 0.631, 0.633, null, null, null],
    ["2020-4-21-23", 0.25, 0.891, 0.84, 0.865, null, null, null],
    ["2020-4-22-00", 0.36, 0.862, 0.941, 0.902, null, null, null],
    ["2020-4-22-01", 0.17, 0.279, 0.752, 0.516, null, null, null],
    ["2020-4-22-02", 0.28, -0.004, 0.437, 0.216, null, null, null],
    ["2020-4-22-03", 0.29, 0.377, 0.292, 0.334, null, null, null],
    ["2020-4-22-04", 0.30, 0.687, 0.084, 0.386, null, null, null],
];

function drawDashboard() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'chart_COx');
    data.addColumn('number', 'chart_COxMAP Left');
    data.addColumn('number', 'chart_COxMAP Right');
    data.addColumn('number', 'chart_COxMAP average');
    data.addColumn({'type': 'number', 'role': 'interval'});
    data.addColumn({'type': 'number', 'role': 'interval'});
    data.addColumn({'type': 'string', 'role': 'annotation'});

    for (var i = 0; i < chart_test_data.length; i++) {
        var tmpArray = chart_test_data[i][0]
        var yearValue = parseInt(tmpArray[0].date.substr(0,4))
        var monthValue = parseInt(tmpArray[0].date.substr(4,6)) -1
        var dayValue = parseInt(tmpArray[0].date.substr(4,6)) -1

        var date_test = new Date("2011-07-14 11:23:00".replace(/-/g,"/"));
        var date = new Date(yearValue, monthValue, parseInt(tmpArray[2]),  parseInt(tmpArray[3]));
        console.log(date)
        data.addRow([
            parseInt(chart_test_data[i][0]),
            parseInt(chart_test_data[i][1]),
            parseInt(chart_test_data[i][2]),
            parseInt(chart_test_data[i][3]),
            parseInt(chart_test_data[i][4]),
            parseInt(chart_test_data[i][5]),
            parseInt(chart_test_data[i][6]),
            parseInt(chart_test_data[i][7]),
        ]);
    }

    var myDashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
    var myDateSlider = new google.visualization.ControlWrapper({
        'controlType': 'ChartRangeFilter',
        'containerId': 'control_div',
        'options': {
            // Filter by the date axis.
            'filterColumnLabel': 'Date',
            'ui': {
                'chartOptions': {
                    'height': 60,
                },
            }
        },
        'state': {
            'range': {
                'start': new Date(2020, 4, 20, 13),
                'end': new Date(2020, 4, 22, 4)
            }
        }
    });

    var COxChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'COxChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                title: "COx",
                lineWidth: 10,
                ticks: [0, .3, .5],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '93%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 1]
        }

    })

    var COxMAPChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'COxMAPChart',
        options: {
            colors: ['#FAA7B8', '#6096FD', 'darkseagreen'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            lineWidth: 1.5,
            series: {2: {lineWidth: 3}},
            curveType: 'function',
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                title: "COx MAP",
                ticks: [-1, 0, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '93%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 2, 3, 4, 5, 6, 7]
        }
    })

    myDashboard.bind(myDateSlider, [COxChart, COxMAPChart]).draw(data);

}

var data_COx = [
    [0.2],
    [0.2],
    [0.3],
    [0.2],
    [0.25],
    [0.36],
    [0.17],
    [0.28],
    [0.29],
    [0.30],
    [0.2],
    [0.2],
    [0.3],
    [0.3],
    [0.25],
    [0.36],
    [0.17],
    [0.28],
    [0.29],
    [0.30],
    [0.2],
    [0.2],
    [0.3],
    [0.3],
    [0.25],
    [0.36],
    [0.17],
    [0.28],
    [0.29],
    [0.30],
    [0.2],
    [0.2],
    [0.3],
    [0.3],
    [0.25],
    [0.36],
    [0.17],
    [0.28],
    [0.29],
    [0.30],
];

var data_COxMAP = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0.846, 0.71, 0.778],
    [0.796, 0.717, 0.756],
    [0.868, 0.881, 0.874],
    [0.56, 0.343, 0.452],
    [-0.377, -0.637, -0.507],
    [-0.385, -0.516, -0.45],
    [-0.347, -0.438, -0.392],
    [-0.705, -0.677, -0.691],
    [-0.829, -0.69, -0.76],
    [-0.878, -0.784, -0.831],
    [-0.957, -0.955, -0.956],
    [-0.901, -0.926, -0.914],
    [-0.445, -0.621, -0.533],
    [-0.338, -0.725, -0.532],
    [-0.318, -0.706, -0.512],
    [-0.393, -0.238, -0.316],
    [-0.477, 0.711, 0.117],
    [-0.441, 0.736, 0.148],
    [-0.465, 0.882, 0.208],
    [-0.041, 0.237, 0.098],
    [0.04, 0.125, 0.082],
    [0.759, 0.631, 0.695],
    [0.9, 0.458, 0.679],
    [0.907, 0.657, 0.782],
    [0.885, 0.885, 0.885],
    [0.83, 0.837, 0.833],
    [0.745, 0.807, 0.776],
    [-0.052, 0.212, 0.08],
    [0.635, 0.631, 0.633],
    [0.891, 0.84, 0.865],
    [0.862, 0.941, 0.902],
    [0.279, 0.752, 0.516],
    [-0.004, 0.437, 0.216],
    [0.377, 0.292, 0.334],
    [0.687, 0.084, 0.386],
];
