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
        type: 'bar',
        data: {
          datasets: [{
            label: '# of Votes',
            data: [
              {x: "2023-10-8", y: 12},
              {x: "2023-10-9", y: 19},
              {x: "2023-10-10", y: 3},
              {x: "2023-10-11", y: 5},
              {x: "2023-10-12", y: 2},
              {x: "2023-10-13", y: 3}
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
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
