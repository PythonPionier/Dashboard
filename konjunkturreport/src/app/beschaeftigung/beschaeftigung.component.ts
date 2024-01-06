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
    data: [3100, 2900, 2600, -100]
  }
  ]
}


const options: any = {
  indexAxis: 'y',
}



const config: ChartConfiguration = {
  type: "bar",
  data: data,
  options: options
}

