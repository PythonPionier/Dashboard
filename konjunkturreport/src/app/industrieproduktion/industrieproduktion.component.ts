import { Component } from '@angular/core';
import Chart from 'chart.js/auto';



const labels = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul"];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Eurozone',
      data: [1,2,3,4,5,6,7],
      backgroundColor: "blue"
    },
    {
      label: 'USA',
      data: [1,2,3,4,5,6,7],
      backgroundColor: "green",
    }
  ]
};




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
        datasets: [
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
          },
          {
            type: 'bar',
            label: 'Bar Dataset 2',
            data: [10, 20, 30, 40]
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: [10, 20, 30, 40],
            order: 1
          }
        ],
        labels: ['January', 'February', 'March', 'April']
      },
    });

  }

}
