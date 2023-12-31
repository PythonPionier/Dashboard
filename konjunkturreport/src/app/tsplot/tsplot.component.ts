import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';


@Component({
  selector: 'app-tsplot',
  templateUrl: './tsplot.component.html',
  styleUrls: ['./tsplot.component.scss']
})
export class TsplotComponent {

  chart: any = [];
  constructor() {}

  ngOnInit() {
  
    this.chart = new Chart("myChart", {
        type: 'line',
        data: {
          datasets: [{
            label: '# of Votes',
            data: [
              {x: "2023-01", y: 12},
              {x: "2023-02", y: 19},
              {x: "2023-03", y: 3},
              {x: "2023-04", y: 5},
              {x: "2023-05", y: 2},
              {x: "2023-06", y: 3},
              {x: "2023-07", y: 12},
              {x: "2023-08", y: 19},
              {x: "2023-09", y: 3},
              {x: "2023-10", y: 5},
              {x: "2023-11", y: 2},
              {x: "2023-12", y: 3},
              {x: "2023-12", y: 3},
              {x: "2024-01", y: 12},
              {x: "2024-02", y: 19},
              {x: "2024-03", y: 3},
              {x: "2024-04", y: 5},
              {x: "2024-05", y: 2},
              {x: "2024-06", y: 3},
              {x: "2024-07", y: 12},
              {x: "2024-08", y: 19},
              {x: "2024-09", y: 3},
              {x: "2024-10", y: 5},
              {x: "2024-11", y: 2},
              {x: "2024-12", y: 3},
              {x: "2024-12", y: 3},

            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "year",
              }
            },
            y: {
              beginAtZero: true
            }
          }
        }
     });
  }

}
