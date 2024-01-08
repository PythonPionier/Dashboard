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



const besch_string = '{"VALS":[4523.25867498268,2705.08807061286,2661.11626936598,2640.15606423429,2565.24023460622,2158.16704227416,1597.11420500162,1273.92813692365,983.611671128639,637.324364867893,461.812423638015,-560.23292395567,-723.989407989897,-772.793731080672,-1025.43188542045],"LABEL":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],"POS":[4523.25867498268,2705.08807061286,2661.11626936598,2640.15606423429,2565.24023460622,2158.16704227416,1597.11420500162,1273.92813692365,983.611671128639,637.324364867893,461.812423638015,"NA","NA","NA","NA"],"NEG":["NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA",-560.23292395567,-723.989407989897,-772.793731080672,-1025.43188542045]}';
let besch = JSON.parse(besch_string);


const data = {
  labels: besch.LABEL,
  datasets: [
    {
      label: "Positives",
      data: besch.POS,
      barPercentage: 1,
      categoryPercentage: 1,
      backgroundColor: "rgba(46,171,93,.5)",
      hoverBackgroundColor: "rgba(46,171,93,1)"
    },
    {
      label: "Negatives",
      data: besch.NEG,
      parPercentage: 1,
      categoryPercentage: 1,
      backgroundColor: "rgba(193,0,0,.5)",
      hoverBackgroundColor: "rgba(193,0,0,1)"
    }
  ]
}


const options: any = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
      borderColor: "black",
    }
  },
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
    title: {
      display: true,
      text: '\u0394 SV-Beschäftigung in Sachsens Wirtschaftszweigen',
      color: "black",
      font: {
        family: "Arial",
        size: 19,
        weight: "bold"
      }
    },
    legend: {
      display: false
    },
    tooltip: {
      mode: "y",
      callbacks: {
        label: function (context: any) {
          //console.log(context.parsed.y);
          let label_number: number = context.parsed.x;
          let label_rounded: number = Math.round(label_number);
          return " " + "\u0394" + " = " + label_rounded + " Beschäftigte";
        }
      }
    }
  }
}



const config: ChartConfiguration = {
  type: "bar",
  data: data,
  options: options
}

