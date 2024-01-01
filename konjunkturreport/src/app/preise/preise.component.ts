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
  labels: ["Investitionsgüter", "Konsumgüter", "Baukosten Wohngebäude", "Vorleistungsgüter", "Metalle", "Roheisen & Stahl", "Energie", "Deutschland", "Sachsen"],
  datasets: [
    {
      label: "\u0394 Erzeugerpreise",
      data: [7.1, 14, 8.3, 25, 38, 52, 87, undefined, undefined],
      order: 2,
      backgroundColor: [
        "rgba(60, 179, 113, 1)",
        "rgba(60, 179, 113, .9)",
        "rgba(60, 179, 113, .8)",
        "rgba(60, 179, 113, .7)",
        "rgba(60, 179, 113, .6)",
        "rgba(60, 179, 113, .5)",
        "rgba(60, 179, 113, .4)"
      ]
    },
    {
      label: "\u0394 Verbraucherpreise",
      data: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, 7.9, 8],
      order: 2,
      backgroundColor: [
        "rgba(0, 0, 255, .5)",
        "rgba(0, 0, 255, .8)",
      ]
    },
    {
      label: "\u2300 Erzeugerpreise",
      type: "line",
      data: [{ x: -.5, y: 34 }, { x: 6.5, y: 34 }],
      order: 1,
      borderColor: "black",
      backgroundColor: "rgba(0, 0, 0, .5)",
      pointRadius: 0,
      xAxisID: "lineAxis"
    },
    {
      label: "EZB-Zielwert",
      type: "line",
      data: [{ x: 6.5, y: 2 }, { x: 8.5, y: 2 }],
      order: 1,
      borderColor: "rgba(255, 165, 0, 1)",
      backgroundColor: "rgba(255, 165, 0, .5)",
      pointRadius: 0,
      xAxisID: "lineAxis"
    }
  ],
}


const options: any = {
  locale: "de-DE",
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
          size: 16
        }
      },
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 16
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
          size: 16
        }
      }
    },
    lineAxis: {
      position: "top",
      type: "linear",
      min: 0,
      max: 8,
      axis: "x",
      display: false,
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 10,
          weight: "bold"
        },
        maxRotation: 0,
        minRotation: 0
      }
    }
  },
  plugins: {
    legend: {
      reverse: true,
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
          size: 16,
        }
      }
    },
    tooltip: {
      mode: "index",
      callbacks: {
        label: function (plot: any) {
          return plot.dataset.label + ": +" + plot.parsed.y + "%";
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