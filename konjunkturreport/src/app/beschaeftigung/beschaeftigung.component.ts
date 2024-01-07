import { Component } from '@angular/core';
import { Chart, ChartConfiguration, CoreChartOptions } from "chart.js/auto"


@Component({
  selector: 'app-beschaeftigung',
  templateUrl: './beschaeftigung.component.html',
  styleUrls: ['./beschaeftigung.component.scss']
})
export class BeschaeftigungComponent {
  chart: any = [];
  constructor() { }
  ngOnInit() { this.chart = new Chart('beschaeftigung', config) }
}





const data = {
  labels: ["Logistik", "freiberufl. & techn. DL", "Information & Kommunikation", "Finanzdienste"],
  datasets: [
    {
      label: "SV-Beschäftigung",
      data: [3100, 2900, 2600, -100],
      barPercentage: .67
    }
  ]
}


const options: any = {
  indexAxis: 'y',
  scales: {
    x: {
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
      },
    },
    y: {
      grid: {
        display: false
      },
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
      },
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}



const config: ChartConfiguration = {
  type: "bar",
  data: data,
  options: options
}

