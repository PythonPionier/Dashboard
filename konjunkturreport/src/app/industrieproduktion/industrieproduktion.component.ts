import { Component } from '@angular/core';
import Chart from 'chart.js/auto';



const data =  {
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            order: 2
        },
        {
            type: 'bar',
            label: 'Bar Dataset 2',
            data: [10, 20, 30, 40],
            order: 2
        },
        {
            type: 'line',
            label: 'Line Dataset',
            data: [10, 20, 30, 40],
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    };


const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked'
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true
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
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            order: 2
        },
        {
            type: 'bar',
            label: 'Bar Dataset 2',
            data: [-10, -20, 30, 40],
            order: 2
        },
        {
            type: 'line',
            label: 'Line Dataset',
            data: [10, 20, 30, 40],
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: options
  });

  }

}
