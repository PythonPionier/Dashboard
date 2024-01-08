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


const jsonstring = '{"LABEL":["Jan 2024","Feb 2024","Mrz 2024","Apr 2024","Mai 2024","Jun 2024","Jul 2024","Aug 2024","Sep 2024","Okt 2024","Nov 2024","Dez 2024","Jan 2025","Feb 2025","Mrz 2025","Apr 2025","Mai 2025","Jun 2025","Jul 2025","Aug 2025","Sep 2025","Okt 2025","Nov 2025","Dez 2025"],"EUROPA":[-1.48208590691956,9.18656708227256,-3.1839676370735,2.9236984127329,3.46704585036397,-2.59733653068693,0.384465589748968,5.37284276223576,4.70780726499103,4.1332977970899,-3.20988311042897,-0.454179320134052,-5.31688215667931,4.93701841913857,-1.89038644016733,-1.63983025764819,4.54056709821235,-0.301131239017306,3.33045791659457,1.27636507719527,-0.559331720329899,2.67510384132066,-0.556694468887366,0.523777608299277],"USA":[5.29962197923676,-1.00030616916749,0.603986705416323,2.09974532807882,0.851075868727535,1.90259608140321,3.75627372490543,2.41008945492191,5.79067542743198,2.86367656240169,-0.962566891902111,8.11278465427771,4.79067667710115,-1.62385762323269,0.56117332162288,-2.71973738354747,4.63019687808637,0.830591779009227,-0.391936531033338,2.7846016123366,2.35978671130785,-0.560127627009178,0.327857498133174,-0.792251349261482],"CHINA":[-3.39117031052752,1.78293396251775,-1.64504446364554,2.59770321521756,4.83007530132522,-0.647499344167181,-1.16908129788152,1.37003420096049,4.12429083263896,1.8698924928734,10.2632292046997,4.99888174729148,2.90764357734596,-3.1350607163412,8.42484975644397,-3.08006439211257,3.73842342936861,-2.15459890041465,2.01774913435129,14.0558442735884,5.39528548999202,-6.01341184122112,1.58536409692458,-4.13843234303683],"INDUSTRIE":[1.46927238177237,0.653769324630356,-4.13617499695377,7.41890694268012,14.1467255093332,0.370046287340998,-2.34995739146877,14.2983253165236,5.11827392381858,7.02518633739593,3.81091347905643,5.10651427979598,9.75926039735147,5.20766134424976,14.8264230330416,2.19692347250963,0.946730087968785,6.13282516864963,8.77785696763352,-6.0899336641343,3.33292953045919,-8.11343004450799,3.98275961599386,0.419944804145203],"SCHWELLE":[-9.25372734426356,-2.31006680758546,15.0538169577154,1.07327925439071,-3.92088665709857,0.393243569008882,-13.8799507545502,-5.6513787273687,-7.78226804021903,5.82069449045929,7.57348376219949,-21.7405384448619,-5.20239826138054,1.67919234060753,-12.8448620170398,4.80908717014677,16.6319689698702,3.64115788633527,0.193240812832311,-5.87444185799815,5.45858127838823,3.78398852490246,-3.407240737622,6.67458585162734],"WELT":[-7.35808920070151,8.31289739266771,6.69261656545895,16.1133331531001,19.3740358726513,-0.578949937101028,-13.258250129246,17.7999130072731,11.9587794086615,21.7127476802202,17.4751764436245,-3.97653708363083,6.93830023373872,7.06495376442197,9.07719765390131,-0.433621390651835,30.4878864635063,8.14884469456217,13.9273683003784,6.15243544098777,15.9872512898174,-8.22787714651517,1.93204600454225,2.68762457177351],"FINANZKRISE":[-15.2856001096577,16.4279455375225,-0.568525456887523,5.16293390241287,8.46970049831405,8.02815092626289,-14.1230323284621,28.3351596460551,15.4345093773552,30.1057620849538,31.3397038043353,-10.1000871797666,-1.59504288256932,14.027619434318,2.84114543320775,-5.04893630968279,34.5160517976631,21.6929420088712,-7.82212716982234,7.08744790220868,22.1104704291575,-10.6618023185688,-15.4444198856241,-16.5583670308389]}';
let jsondata = JSON.parse(jsonstring);
//console.log(jsondata.LABEL)


const data: any = {
  labels: jsondata.LABEL,
  datasets: [
    {
      type: 'bar',
      label: 'Eurozone',
      data: jsondata.EUROPA,
      backgroundColor: "rgba(39,89,165, 1)",
      order: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'USA',
      data: jsondata.USA,
      backgroundColor: "rgba(0, 144, 33, 1)",
      order: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'China',
      data: jsondata.CHINA,
      backgroundColor: "rgba(192, 0, 0, 1)",
      order: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'Sonstige Industrieländer',
      data: jsondata.INDUSTRIE,
      backgroundColor: "rgba(127, 127, 127, 1)",
      order: 2,
      barPercentage: .67
    },
    {
      type: 'bar',
      label: 'Sonstige Schwellenländer',
      data: jsondata.SCHWELLE,
      backgroundColor: "rgba(217, 217, 217, 1)",
      order: 2,
      barPercentage: .67
    },
    {
      type: 'line',
      label: 'Welt',
      data: jsondata.WELT,
      backgroundColor: "rgba(0,176,240,.5)",
      borderColor: "rgba(0,176,240,1)",
      pointRadius: 0,
      order: 1
    },
    {
      type: 'line',
      label: 'Finanzkrise',
      data: jsondata.FINANZKRISE,
      backgroundColor: "rgba(255,192,0,.5)",
      borderColor: "rgba(255,192,0,1)",
      pointRadius: 0,
      borderDash: [10],
      order: 1
    }
  ]
}


const options = {
  elements: {
    bar: {
      borderWidth: .5,
      borderColor: "black",
      borderSkipped: false
    },
    line: {
      borderWidth: 3,
      tension: 0.4
    }
  },
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
      labels: {
        color: "black",
        font: {
          family: "Arial",
          size: 14
        },
        padding: 30
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
          size: 14,
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
  },
  interaction: {
    mode: "index",
    intersect: false,
    axis: "x"
  }
}


const config: any = {
  data: data,
  options: options
}
