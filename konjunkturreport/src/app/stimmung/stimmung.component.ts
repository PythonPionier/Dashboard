import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-stimmung',
  templateUrl: './stimmung.component.html',
  styleUrls: ['./stimmung.component.scss']
})
export class StimmungComponent {
  chart: any = [];
  constructor() { }
  ngOnInit() { this.chart = new Chart('stimmung', config) }
}


const jsonstring = '{"LABEL":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"INDUSTRIE":[-17.7760148766673,-16.3643382303258,-13.8755479719896,-9.57224028520001,10.5231115294427,2.06585441847682,16.1762624767012,23.3313877199312,5.35561584219701,-4.03952287172637,-3.74596141340912,3.45811883394233,-0.851473031617986,21.3322802022228,28.0345668361325,34.345701722708,24.0877962006524,31.7662545016946,31.1326993524325,34.3643400194483,49.542471270828,34.1466142452507,20.8817295607442,4.17462848303988],"BAUHAUPTGEWERBE":[-0.29690692765473,6.48967787024717,7.47501793024931,0.16399682023357,-6.61346941857275,0.731996881081198,-19.4761413757968,-21.7145019480818,-20.8516536037533,-2.86709662205721,3.19811797804111,-17.1346414126484,-23.6438750353415,-26.0111666066244,-30.1300432266193,-27.3346298634715,-29.6069270872904,-33.5335811995844,-31.0477877600419,-21.65059853406,-23.4421033207332,-9.56133527581386,5.22272122429154,4.63510777418672],"GROSSHANDEL":[3.78368446973819,27.9891952907363,26.5048946468617,27.7488742690437,15.4500563235644,25.328305312846,17.057690376629,22.7258202777669,19.9510087719718,20.0368474061216,21.2999529430966,4.48433084208938,4.09684507920675,-8.8461958831083,-3.22900842057321,-7.22234776060254,6.05950350403659,12.8393081688408,18.1979436442222,9.91243444157227,11.7141795182169,4.17280456840871,6.61288383742457,13.7774313928606],"EINZELHANDEL":[11.1004755613772,10.207917227619,21.4934437261643,31.9770831678005,41.8154881957568,54.7229477859935,50.469566600685,56.0412978350965,54.1376254407921,52.8864651003494,72.980269186825,76.2918304621991,84.0720003792085,76.5354156633564,72.4381640115113,53.8506380500295,54.3322494509224,72.4925015657674,72.035268480653,64.1646209956371,72.1260171463662,70.7190813055877,59.2851273324775,58.4262207042842]}';
let jsondata = JSON.parse(jsonstring);
//console.log(jsondata.LABEL)


const data: any = {
  labels: jsondata.LABEL, 
  datasets: [
    {
      label: "Industrie",
      data: jsondata.INDUSTRIE,
      tension: .2
    },
    {
      label: "Bauhauptgewerbe",
      data: jsondata.BAUHAUPTGEWERBE,
      tension: .2
    },
    {
      label: "Großhandel",
      data: jsondata.GROSSHANDEL,
      tension: .2
    },
    {
      label: "Einzelhandel",
      data: jsondata.EINZELHANDEL,
      tension: .2
    }
  ]
}


const options: any = {
  scales: {
    y: {
      grid: {
        display: false
      },
      title: {
        display: true,
        text: "Mittelwert der Salden zu Lage und Erwartung",
        color: "black",
        font: {
          family: "Arial",
          size: 14,
          weight: "bold"
        },
      },
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
      }
    },
    x: {
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        }
      }
    }
  },
  interaction: {
    mode: "index",
    intersect: false,
    axis: "x"
  }
}


const config: any = {
  type: "line",
  data: data,
  options: options
}
