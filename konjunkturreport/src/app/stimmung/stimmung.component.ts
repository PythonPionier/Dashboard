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


const jsonstring = '{"LABEL":["Jan 2024","Feb 2024","Mrz 2024","Apr 2024","Mai 2024","Jun 2024","Jul 2024","Aug 2024","Sep 2024","Okt 2024","Nov 2024","Dez 2024","Jan 2025","Feb 2025","Mrz 2025","Apr 2025","Mai 2025","Jun 2025","Jul 2025","Aug 2025","Sep 2025","Okt 2025","Nov 2025","Dez 2025"],"INDUSTRIE":[-7.20007296739725,-2.82774079675033,12.1256351552011,6.49975186211023,18.8454458562838,11.552849862229,13.2512080718465,31.4160153735596,25.8439778590844,35.3653744754638,44.6561065215409,41.8841229047668,43.6290049331629,46.3734249058754,45.3623982557642,37.8900136381122,46.3077283532354,59.4562851114967,51.7463188503462,50.6489338112471,49.8872610080319,55.7495504586372,57.0390317753576,64.2652557828384],"BAUHAUPTGEWERBE":[6.30710739511155,13.6337876483644,18.9476245572454,10.4259263496695,25.4101807692831,29.6512759055774,33.1277986562683,32.5408162599549,34.8690930735784,51.4558319165801,54.6497655767883,54.905987212619,51.8162458269908,47.4659788383088,34.8276053879638,33.8866562494436,32.2185230200411,30.905961651949,25.6214388293856,-4.88934251975758,-3.99658350883715,-3.75921420579748,3.00854066520041,6.99096334330619],"GROSSHANDEL":[-3.58416301801002,-10.7639271570036,2.08590952709838,-3.80209183591529,-6.92092972997062,-13.9919165890325,-21.495950468645,-35.029388696686,-38.7222718636415,-32.3148183418289,-57.6436745328568,-45.5234022860631,-41.9525030827175,-35.5178846419131,-27.9945491278332,-21.3088441236239,-8.34497386228449,-12.8324040851602,8.38940804361566,11.0823563315197,10.5461532850594,4.7775994481189,-7.10584418030837,-2.24224876793952],"EINZELHANDEL":[-2.43153408802971,10.4864214569057,12.0774218699686,0.197191622995899,-4.63161240148211,-21.7775155092931,-14.5198955936611,-17.880933879634,-28.3637814842056,-26.6966317624808,-44.159035530216,-50.0308198023902,-61.40320333406,-75.2214745354021,-92.5357237909918,-97.170737576845,-120.811374875605,-126.437874339986,-138.91740221014,-147.729796816825,-146.20288523021,-143.350563921421,-143.153412521375,-153.343606791378]}';
let jsondata = JSON.parse(jsonstring);
//console.log(jsondata.LABEL)


const data: any = {
  labels: jsondata.LABEL, 
  datasets: [
    {
      label: "Industrie",
      data: jsondata.INDUSTRIE,
      backgroundColor: "rgba(0, 144, 33, .5)",
      borderColor: "rgba(0, 144, 33, 1)"
    },
    {
      label: "Bauhauptgewerbe",
      data: jsondata.BAUHAUPTGEWERBE,
      backgroundColor: "rgba(0, 0, 0, .5)",
      borderColor: "rgba(0, 0, 0, 1)"
    },
    {
      label: "Großhandel",
      data: jsondata.GROSSHANDEL,
      backgroundColor: "rgba(102, 188, 122, .5)",
      borderColor: "rgba(102, 188, 122, 1)"
    },
    {
      label: "Einzelhandel",
      data: jsondata.EINZELHANDEL,
      backgroundColor: "rgba(150, 150, 150, .5)",
      borderColor: "rgba(150, 150, 150, 1)"
    }
  ]
}


const options: any = {
  scales: {
    y: {
      title: {
        display: true,
        text: "Mittelwert der Salden zu Lage und Erwartung",
        color: "black",
        font: {
          family: "Arial",
          size: 14,
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
      grid: {
        display: false
      },
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
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label_number: number = context.parsed.y;
          let label_rounded: number = Math.round(label_number);
          return " " + context.dataset.label + ": " + label_rounded.toString();
        }
      }
    }
  },
  interaction: {
    mode: "index",
    intersect: false,
    axis: "x"
  },
  elements: {
    line: {
      tension: .4,
      stepped: true
    }
  }
}


const config: any = {
  type: "line",
  data: data,
  options: options
}
