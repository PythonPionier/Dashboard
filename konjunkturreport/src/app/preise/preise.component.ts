import { Component } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-preise',
  templateUrl: './preise.component.html',
  styleUrls: ['./preise.component.scss']
})
export class PreiseComponent {

  chart: any = [];
  constructor() { }

  ngOnInit() {this.chart = new Chart('preise', config)}

}



const data: any = {
  labels: [["Investitions-", "güter"], ["Konsum-", "güter"], ["Baukosten von", "Wohngebäuden"], ["Vorleistungs-", "güter"], "Metalle", ["Roheisen", "& Stahl"], "Energie", "Deutschland", "Sachsen"],
  datasets: [
    {
      label: "\u0394 Erzeugerpreise",
      data: [7.1, 14, 8.3, 25, 38, 52, 87, null, null],
      backgroundColor: "rgba(60, 179, 113, .5)",
      hoverBackgroundColor: "rgba(60, 179, 113, 1)",
      order: 2
    },
    {
      label: "\u0394 Verbraucherpreise",
      data: [null, null, null, null, null, null, null, 7.9, 8],
      backgroundColor: "rgba(0, 0, 255, .5)",
      hoverBackgroundColor: "rgba(0, 0, 255, 1)",
      order: 2
    },
    {
      type: "line",
      label: "Erzeugerpreise",
      data: [34, 34, 34, 34, 34, 34, 34, null, null],
      borderColor: "rgba(0,176,240,1)",
      backgroundColor: "rgba(0, 176, 240, .5)"
    },
    {
      type: "line",
      label: "EZB-Zielwert",
      data: [null, null, null, null, null, null, null, 2, 2],
      borderColor: "rgba(255, 192, 0, 1)",
      backgroundColor: "rgba(255,192,0,.5)"
    }
  ],
}


const options: any = {
  elements: {
    bar: {
      borderColor: "black",
      borderWidth: 2
    },
    line: {
      borderWidth: 4
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "\u0394 ggü. Vorjahresmonat",
        color: "black",
        font: {
          family: "Arial",
          size: 14
        }
      },
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
        callback: function (value: any, index: any, ticks: any) {
          return value + "%"
        }
      },
    },
    x: {
      stacked: true,
      grid: {
        display: false
      },
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        }
      }
    }
  },
  plugins: {
    tooltip: {
      mode: "index",
      callbacks: {
        title: function (context: any) {
          //console.log(context[0].label);
          let lab: string = context[0].label;
          return lab.replaceAll("-,", "").replaceAll(",", " ")
        }
      }
    },
    legend: {
      title: {
        display: true,
        color: "black",
        font: {
          family: "Arial",
          size: 19,
          weight: "bold"
        },
        text: "Mai 2022 ggü. Vorjahresmonat"
      },
      labels: {
        color: "black",
        font: {
          family: "Arial",
          size: 14,
        }
      }
    }
  }
}


const config: any = {
  type: "bar",
  data: data,
  options: options,
}
