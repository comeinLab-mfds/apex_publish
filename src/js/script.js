var chart_test_data = [
    ["2020-4-20-13", 0.2, 0, 0, 0, 0, 0, 34.0, 38.0, 80, 80, 85, 85, 56.7, null],
    ["2020-4-20-14", 0.2, 0, 0, 0, 0, 0, 34.75, 38.25, 80, 80, 85, 85, 55.72, null],
    ["2020-4-20-15", 0.3, 0, 0, 0, 0, 0, 35.0, 38.5, 80, 80, 85, 85, 56.03, null],
    ["2020-4-20-16", 0.2, 0, 0, 0, 0, 0, 35.0, 38.5, 80, 80, 85, 85, 56.72, null],
    ["2020-4-20-17", 0.25, 0, 0, 0, 0, 0, 35.0, 38.0, 80, 80, 85, 85, 57.46, null],
    ["2020-4-20-18", 0.36, 0.846, 0.71, 0.778, 0.615, 0.433, 35.0, 38.0, 80, 80, 85, 85, 57.7, null],
    ["2020-4-20-19", 0.17, 0.796, 0.717, 0.756, 0.567, 0.581, 35.0, 38.0, 81, 81, 90, 90, 57.91, null],
    ["2020-4-20-20", 0.28, 0.868, 0.881, 0.874, 0.636, 0.657, 35.0, 38.0, 81, 81, 90, 90, 58.05, null],
    ["2020-4-20-21", 0.29, 0.56, 0.343, 0.452, 0.553, 0.554, 35.0, 38.0, 81, 81, 90, 90, 58.34, null],
    ["2020-4-20-22", 0.30, -0.377, -0.637, -0.507, 0.533, 0.334, 35.0, 38.0, 81, 81, 90, 90, 59.95, "Fluid Infusion"],
    ["2020-4-20-23", 0.2, -0.385, -0.516, -0.45, 0.375, 0.136, 35.5, 37.75, 81, 81, 90, 90, 86.67, null],
    ["2020-4-21-00", 0.2, -0.347, -0.438, -0.392, 0.052, -0.114, 36.0, 38.25, 81, 81, 90, 90, 89.41, null],
    ["2020-4-21-01", 0.3, -0.705, -0.677, -0.691, 0.203, 0.137, 36.0, 38.5, 75, 75, 80, 80, 90.2, null],
    ["2020-4-21-02", 0.3, -0.829, -0.69, -0.76, 0.426, 0.514, 36.0, 38.5, 75, 75, 80, 80, 90.6, null],
    ["2020-4-21-03", 0.25, -0.878, -0.784, -0.831, 0.642, 0.644, 36.0, 38.5, 75, 75, 80, 80, 90.94, null],
    ["2020-4-21-04", 0.36, -0.957, -0.955, -0.956, 0.685, 0.636, 36.0, 38.5, 75, 75, 80, 80, 92.27, null],
    ["2020-4-21-05", 0.17, -0.901, -0.926, -0.914, 0.663, 0.573, 36.0, 38.5, 75, 75, 80, 80, 93.99, null],
    ["2020-4-21-06", 0.28, -0.445, -0.621, -0.533, -0.635, -0.511, 36.0, 38.5, 75, 75, 80, 80, 94.72, null],
    ["2020-4-21-07", 0.29, -0.338, -0.725, -0.532, -0.617, -0.371, 36.0, 38.5, 75, 75, 80, 80, 95.18, null],
    ["2020-4-21-08", 0.30, -0.318, -0.706, -0.512, -0.431, -0.245, 36.0, 38.5, 75, 75, 80, 80, 96.02, null],
    ["2020-4-21-09", 0.2, -0.393, -0.238, -0.316, -0.502, -0.172, 37.75, 40.0, 75, 75, 80, 80, 96.86, null],
    ["2020-4-21-10", 0.2, -0.477, 0.711, 0.117, -0.246, -0.172, 37.5, 40.0, 78, 78, 83, 83, 97.02, null],
    ["2020-4-21-11", 0.3, -0.441, 0.736, 0.148, -0.254, -0.172, 38.0, 40.0, 78, 78, 83, 83, 98.35, null],
    ["2020-4-21-12", 0.3, -0.465, 0.882, 0.208, -0.05, 0.279, 38.0, 40.0, 78, 78, 83, 83, 99.17, null],
    ["2020-4-21-13", 0.25, -0.041, 0.237, 0.098, 0.057, -0.13, 38.0, 40.0, 78, 78, 83, 83, 99.11, null],
    ["2020-4-21-14", 0.36, 0.04, 0.125, 0.082, -0.014, -0.087, 38.0, 40.0, 78, 78, 83, 83, 98.54, null],
    ["2020-4-21-15", 0.17, 0.759, 0.631, 0.695, 0.385, -0.087, 38.0, 40.0, 78, 78, 83, 83, 98.38, null],
    ["2020-4-21-16", 0.28, 0.9, 0.458, 0.679, 0.453, -0.044, 38.0, 40.0, 78, 78, 83, 83, 99.08, null],
    ["2020-4-21-17", 0.29, 0.907, 0.657, 0.782, 0.355, 0.292, 38.0, 40.0, 78, 78, 83, 83, 99.08, null],
    ["2020-4-21-18", 0.30, 0.885, 0.885, 0.885, 0.541, 0.429, 38.0, 40.0, 78, 78, 83, 83, 99.11, null],
    ["2020-4-21-19", 0.2, 0.83, 0.837, 0.833, 0.353, 0.445, 38.25, 40.75, 78, 78, 83, 83, 102.45, null],
    ["2020-4-21-20", 0.2, 0.745, 0.807, 0.776, 0, 0.206, 38.5, 40.5, 78, 78, 83, 83, 102.28, null],
    ["2020-4-21-21", 0.3, -0.052, 0.212, 0.08, 0, 0.138, 38.5, 40.75, 78, 78, 83, 83, 101.22, null],
    ["2020-4-21-22", 0.3, 0.635, 0.631, 0.633, 0, 0, 38.5, 41.0, 78, 78, 83, 83, 99.86, null],
    ["2020-4-21-23", 0.25, 0.891, 0.84, 0.865, 0, 0, 39.0, 41.0, 78, 78, 83, 83, 99.05, null],
    ["2020-4-22-00", 0.36, 0.862, 0.941, 0.902, 0, 0, 39.0, 41.0, 78, 78, 83, 83, 99.35, null],
    ["2020-4-22-01", 0.17, 0.279, 0.752, 0.516, -0.195, 0, 39.0, 41.0, 80, 80, 85, 85, 99.26, null],
    ["2020-4-22-02", 0.28, -0.004, 0.437, 0.216, -0.481, 0, 39.0, 41.0, 80, 80, 85, 85, 98.99, null],
    ["2020-4-22-03", 0.29, 0.377, 0.292, 0.334, -0.559, -0.037, 39.0, 41.0, 80, 80, 85, 85, 99.1, null],
    ["2020-4-22-03", 0.29, 0.377, 0.292, 0.334, -0.559, -0.037, 39.0, 41.0, 80, 80, 85, 85, 99.25, null],
    ["2020-4-22-04", 0.30, 0.687, 0.084, 0.386, -0.623, -0.081, 39.0, 41.0, 80, 80, 85, 85, 99.5, null],
];

function drawDashboard() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'COx');
    data.addColumn('number', 'COxMAP Left');
    data.addColumn('number', 'COxMAP Right');
    data.addColumn('number', 'COxMAP average');
    data.addColumn('number', 'COxETCO2 Left');
    data.addColumn('number', 'COxETCO2 Right');
    data.addColumn('number', 'RSO2 Left');
    data.addColumn('number', 'RSO2 Right');
    data.addColumn('number', 'MAP OP_BP_min1');
    data.addColumn('number', 'MAP OP_BP_min2');
    data.addColumn('number', 'MAP OP_BP_max1');
    data.addColumn('number', 'MAP OP_BP_max2');
    data.addColumn('number', 'MAP');

    for (var i = 0; i < chart_test_data.length; i++) {
        var tmpArray = chart_test_data[i][0].split("-");
        var date = new Date(parseInt(tmpArray[0]), parseInt(tmpArray[1]), parseInt(tmpArray[2]), parseInt(tmpArray[3]));


        data.addRow([
            date,
            parseFloat(chart_test_data[i][1]),
            parseFloat(chart_test_data[i][2]),
            parseFloat(chart_test_data[i][3]),
            parseFloat(chart_test_data[i][4]),
            parseFloat(chart_test_data[i][5]),
            parseFloat(chart_test_data[i][6]),
            parseFloat(chart_test_data[i][7]),
            parseFloat(chart_test_data[i][8]),
            parseFloat(chart_test_data[i][9]),
            parseFloat(chart_test_data[i][10]),
            parseFloat(chart_test_data[i][11]),
            parseFloat(chart_test_data[i][12]),
            parseFloat(chart_test_data[i][13])
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
                    'height': 40,
                    'width': '100%'
                },
            }
        },
        'state': {
            'range': {
                'start': new Date(2020, 4, 20),
                'end': new Date(2020, 4, 22)
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
            columns: [0, 2, 3, 4]
        }
    })


    var COxETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'COxETCO2Chart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
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
                title: "COx ETCO2",
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
            columns: [0, 5, 6]
        }
    })


    var RSO2Chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'RSO2Chart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
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
                title: "RSO2",
                baselineColor: '#777',
                gridlineColor: '#777',
                ticks: [20, 30, 40, 50, 60],
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
            columns: [0, 7, 8]
        }
    })


    var MAPChart = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'MAPChart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
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
                title: "MAP",
                ticks: [0, 50, 100, 150],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '93%',
                height: '73%'
            },
            seriesType: 'candlesticks',
            series: {
                1: {
                    type: 'line',
                    color: 'darkseagreen'
                },
            },
            bar: {groupWidth: '20%'},
            candlestick: {
                fallingColor: {strokeWidth: 0, fill: '#FAA7B8'},
                risingColor: {strokeWidth: 0, fill: '#FAA7B8'}
            }
        },
        view: {
            columns: [0, 9, 10, 11, 12, 13]
        }
    })


    var ETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'ETCO2Chart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
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
                title: "ETCO2",
                ticks: [0, 10, 20, 30, 40, 50, 60],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '93%',
                height: '73%'
            },
            seriesType: 'candlesticks',
            series: {
                18: {
                    type: 'line',
                    color: 'darkseagreen'
                },
            },
            bar: {groupWidth: '20%'},
            candlestick: {
                fallingColor: {strokeWidth: 0, fill: '#FAA7B8'},
                risingColor: {strokeWidth: 0, fill: '#FAA7B8'}
            }
        },
        view: {
            columns: [0, 14, 15, 16, 17, 18]
        }
    })


    var SJVO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'SJVO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
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
                title: "SJVO2",
                ticks: [20, 40, 60, 80, 100],
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
            columns: [0, 19]
        }
    })


    var ADJLChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'ADJLChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
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
                title: "ADJL",
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
            columns: [0, 20]
        }
    })


    var LOIChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'LOIChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
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
                title: "LOI",
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
            columns: [0, 21]
        }
    })


    var AVDO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'AVDO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
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
                title: "AVDO2",
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
            columns: [0, 22]
        }
    })


    var CEO2Chart = new google.visualization.ChartWrapper({
        chartType: 'AreaChart',
        containerId: 'CEO2Chart',
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
                color: 'yellow'
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
                title: "CEO2",
                ticks: [0, 10, 20, 30, 40, 50, 60],
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
            columns: [0, 23]
        }
    })


    var AJglcChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'AJglcChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
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
                title: "AJglc",
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
            columns: [0, 24]
        }
    })


    var AJCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'AreaChart',
        containerId: 'AJCO2Chart',
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
                color: 'yellow'
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
                title: "AJCO2",
                ticks: [0, 10, 20, 30, 40, 50, 60],
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
            columns: [0, 25]
        }
    })


    var RQChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'RQChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
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
                title: "RQ",
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
            columns: [0, 26]
        }
    })


    var NPIChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'NPIChart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: 'yellow'
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
                title: "NPI",
                ticks: [0, 1, 2, 3, 4, 5],
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
            columns: [0, 27, 28]
        }
    })


    var PupilChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'PupilChart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
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
                title: "Pupil Size",
                ticks: [0, 1, 2, 3, 4, 5],
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
            columns: [0, 29, 30]
        }
    })


    var modalCOxMAPChart = new google.visualization.ChartWrapper({
        chartType: 'ColumnChart',
        containerId: 'modalCOxMAPChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            fontSize: 15,
            title: "Time under MAPopt : --hr--min",
            legend: "none",
            curveType: 'function',
            hAxis: {
                title: "MAP",
                gridlines: {
                    color: '#777',
                },
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "COx",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        },
        view: {
            columns: [31, 32]
        }
    })


    var modalRSO2MAPChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'modalRSO2MAPChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            pointSize: 7,
            fontSize: 15,
            curveType: 'function',
            hAxis: {
                title: "MAP",
                gridlines: {
                    color: '#777',
                },
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "RSO2",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '93%',
                height: '73%'
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        },
        view: {
            columns: [33, 34]
        }
    })


    var modalCO2xETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ColumnChart',
        containerId: 'modalCO2xETCO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            title: "Time under ETCO2opt : --hr--min",
            legend: "none",
            fontSize: 15,
            curveType: 'function',
            hAxis: {
                title: "ETCO2",
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "CO2x",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        },
        view: {
            columns: [35, 36]
        }
    })


    var modalRSO2ETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'modalRSO2ETCO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            pointSize: 7,
            fontSize: 15,
            curveType: 'function',
            hAxis: {
                title: "ETCO2",
                gridlines: {
                    color: '#777',
                },
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "RSO2",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        },
        view: {
            columns: [37, 38]
        }
    })

    myDashboard.bind(myDateSlider, [COxChart, COxMAPChart, COxETCO2Chart, RSO2Chart, MAPChart, ETCO2Chart, SJVO2Chart, ADJLChart, LOIChart, AVDO2Chart, CEO2Chart, AJglcChart, AJCO2Chart, RQChart, NPIChart, PupilChart, modalCO2xETCO2Chart, modalCOxMAPChart, modalRSO2ETCO2Chart, modalRSO2MAPChart]).draw(data);

}


google.load('visualization', '1', {packages: ['controls'], callback: drawDashboard});
