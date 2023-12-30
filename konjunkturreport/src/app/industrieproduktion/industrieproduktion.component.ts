import { Component } from '@angular/core';
import Chart from 'chart.js/auto';



const options = {
  plugins: {
    title: {
      display: true,
      text: 'Industrieproduktion',
      color: "black",
      font: {
        size: 19
      }
    },
    legend: {
      display: true,
      reverse: true,
      labels: {
        color: "black"
      }
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
          display: false
      },
      ticks: {
        color: "black"
      }
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "\u0394 Vorjahr",
        color: "black"
      },
      ticks: {
        color: "black",
        callback: function(value: any, index: any, ticks: any) {
            return value + "%";
        }
      }
    }
  }
}


@Component({
  selector: 'app-industrieproduktion',
  templateUrl: './industrieproduktion.component.html',
  styleUrls: ['./industrieproduktion.component.scss']
})
export class IndustrieproduktionComponent {

  title = 'ng-chart';
  chart: any = [];
  constructor() {}


  ngOnInit() {

    this.chart = new Chart('indprod', {
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            type: 'bar',
            label: 'Eurozone',
            data: [10, 20, 30, 40],
            order: 2,
            borderWidth: 2,
            borderColor: "black",
            backgroundColor: "blue",
            borderSkipped: false,
        },
        {
            type: 'bar',
            label: 'USA',
            data: [-10, -20, 30, 40],
            order: 2,
            borderWidth: 2,
            borderColor: "black",
            backgroundColor: "green",
            borderSkipped: false
        },
        {
            type: 'line',
            label: 'Welt',
            data: [10, 20, 30, 40],
            order: 1,
            borderWidth: 2,
            borderColor: "red",
            backgroundColor: "red",
            pointRadius: 0
        },
        {
            type: 'line',
            label: 'Finanzkrise',
            data: [8, 1, 50, 2],
            order: 1,
            borderWidth: 2,
            borderColor: "yellow",
            backgroundColor: "yellow",
            pointRadius: 0
        }]
    },
    options: options
  });

  }

}
