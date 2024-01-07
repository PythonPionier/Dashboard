import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-industrieproduktion',
  templateUrl: './industrieproduktion.component.html',
  styleUrls: ['./industrieproduktion.component.scss']
})
export class IndustrieproduktionComponent {
  chart: any = [];
  constructor() { }
  ngOnInit() { this.chart = new Chart('indprod', config) }
}


const jsonstring = '{"LABEL":["2024-01-01","2024-02-01","2024-03-01","2024-04-01","2024-05-01","2024-06-01","2024-07-01","2024-08-01","2024-09-01","2024-10-01","2024-11-01","2024-12-01","2025-01-01","2025-02-01","2025-03-01","2025-04-01","2025-05-01","2025-06-01","2025-07-01","2025-08-01","2025-09-01","2025-10-01","2025-11-01","2025-12-01"],"EUROPA":[-3.24312456231416,4.97359417072926,4.40935135004208,4.19791202239336,2.63065295767642,1.22472375453529,14.12533534393,3.74353299622703,3.81447270736132,0.0307996021465069,-7.8895236052983,0.618495822980583,12.2233950438578,-0.522149453460934,-5.76820553776654,-2.88184467740947,3.73136621709352,4.29240989890208,3.11867900606638,1.51775782512088,6.62152619648623,4.93740282799041,4.98890006410931,0.517021541678129],"USA":[-0.758841357834218,1.92686899473505,-3.4979216122006,0.78481087617778,0.586542844138644,9.47069335777518,-2.00262943024745,-2.35394024988851,7.73454620821659,0.154064717637294,2.87563370122802,2.41233603315393,0.94952432352787,-7.44467618166547,-0.121929796942531,1.96882134442362,-1.31641891869972,-0.80643645781517,0.779732485264426,-1.79771764067179,2.77500628940292,1.83449105006342,11.458384382026,3.27821003386254],"CHINA":[-1.77807782566728,2.58487671926698,9.72222527713551,-0.405136951607612,5.76639174612172,-3.52607850928623,6.68320354928108,-0.141789749673752,-2.29310688222279,-4.79943712660314,-0.690280510159351,2.18043239239438,0.992830508409291,2.54426178345964,0.39109195656109,-1.31743219380087,-0.857789602261052,-6.63273410569211,3.4761640436105,4.85550798932426,6.20986359117294,1.12491472805382,-3.87394060881932,-4.73854589943752],"INDUSTRIE":[-1.58415631732416,1.51118238562112,0.351757156298274,-2.74157861445775,2.74416610803004,2.91222448587788,-4.46827796873682,6.60244935243894,5.45630732968291,-5.8893607451101,-7.57719343910809,8.25223804253345,6.67175294815626,0.732893979545968,2.43491662583089,8.11874057944758,3.14481098056561,-0.138464851481517,11.3783128171575,6.89548400489587,9.31154353061273,-8.12943195884549,-2.62338628814262,0.176838978449835],"SCHWELLE":[-8.41447414874156,9.88568581740679,-3.97237555179686,-3.55721374567766,1.48796131356672,-3.55712049347012,4.64003479339321,-0.896342128593571,-7.06723834682577,12.3253678859147,5.23743556960028,-0.547711393618883,11.9750702394611,3.05909788961298,10.8083507527768,-4.57530376679398,-3.41541154506793,1.69180492245316,8.91481842887989,5.58348888105659,9.8193296197518,5.63223263952049,4.09393060334355,-4.0204669419462],"FINANZKRISE":[-5.44180132962752,0.890386771415278,-3.45356747761355,0.270093240477183,-0.792798430106509,-11.55275647417,-24.9627132337645,-24.9911740278119,-32.1397859268304,-32.2641491669364,-29.1968042014414,-34.2205232391732,-38.9468092053499,-46.3693735667314,-53.927220572843,-52.3303618476028,-65.1728820996788,-65.7897129789636,-86.6007623074187,-82.5452818525838,-92.9408977472746,-93.7218765850943,-90.343515471183,-79.6882888934193],"WELT":[-0.615322051042834,-1.53690450380893,-8.75962916418529,-7.85864662690311,-12.7021941566415,-22.997860641441,-21.5340190063386,-38.0546004217852,-48.9426299996499,-41.0776055047977,-50.7882318186416,-49.0835559519655,-54.0986402731132,-54.3260501691812,-48.8364734364402,-45.0747401306613,-34.0295580382317,-38.9657134390751,-44.1975777587271,-36.1002575649198,-37.4887061178032,-28.7273439404655,-23.4458702715759,-29.7856662479409]}';
let jsondata = JSON.parse(jsonstring);
//console.log(jsondata.LABEL)


const data: any = {
  labels: jsondata.LABEL,
  datasets: [
    {
      type: 'bar',
      label: 'Eurozone',
      data: jsondata.EUROPA,
      order: 2,
      borderWidth: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'USA',
      data: jsondata.USA,
      order: 2,
      borderWidth: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'China',
      data: jsondata.CHINA,
      order: 2,
      borderWidth: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'Sonstige Industrieländer',
      data: jsondata.INDUSTRIE,
      order: 2,
      borderWidth: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'Sonstige Schwellenländer',
      data: jsondata.SCHWELLE,
      order: 2,
      borderWidth: 2,
      barPercentage: .67
    },
    {
      type: 'line',
      label: 'Welt',
      data: jsondata.WELT,
      order: 1,
      borderWidth: 2,
      pointRadius: 0,
      //cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      type: 'line',
      label: 'Finanzkrise',
      data: jsondata.FINANZKRISE,
      order: 1,
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4
    }
  ]
}


const options = {
  plugins: {
    title: {
      display: true,
      text: 'Industrieproduktion',
      color: "black",
      font: {
        family: "Arial",
        size: 19,
        weight: "bold"
      }
    },
    legend: {
      reverse: true,
      labels: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        }
      }
    },
    tooltip: {
      mode: "index",
      callbacks: {
        label: function (context: any) {
          //console.log(context.parsed.y);
          let label_number: number = context.parsed.y;
          let label_rounded: number = Math.round(label_number * 100) / 100;
          let label_string: string = label_rounded.toString().replaceAll(".", ",");
          return " " + context.dataset.label + ": " + label_string + "%";

        }
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
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
      },
      afterTickToLabelConversion: function (context: any) {
        //console.log(context.ticks);
        context.ticks = [];
        context.ticks.push({ value: 6, label: "2024" });
        context.ticks.push({ value: 18, label: "2025" });
      }
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "\u0394 Vorjahr",
        color: "black",
        font: {
          family: "Arial",
          size: 19,
          weight: "bold"
        }
      },
      ticks: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
        callback: function (value: number, index: any, ticks: any) {
          let value_string: string = value.toString();
          return value_string.replaceAll(".", ",") + "%";
        }
      }
    }
  }
}


const config: any = {
  data: data,
  options: options
}
