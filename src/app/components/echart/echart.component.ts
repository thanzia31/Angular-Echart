import { Component,inject, OnInit,signal } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartServicesService } from '../../services/chart-services.service';
import { ChartData } from '../../model/data.model';
import { color, EChartsOption } from 'echarts';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-echart',
  standalone : true,
  imports: [NgxEchartsModule,CommonModule],
  templateUrl: './echart.component.html',
  styleUrl: './echart.component.css'
})
export class EchartComponent implements OnInit {

  selectedChart: any;  
  onChartTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newType = target.value;
  
    if (this.selectedChart && this.selectedChart.series) {
      const updatedChart = JSON.parse(JSON.stringify(this.selectedChart));
      updatedChart.series.forEach((s: any) => {
        s.type = newType;
      });
      this.selectedChart = updatedChart;
    }
  }
  
  DataService = inject(ChartServicesService);
 //chartData = signal<Array<Data>>([]);
 //chartOptions !: EChartsOption
 chartOptions : any;
 stackedChart : any;
 doughnutChart : any ;
 ngOnInit() : void{
    
  //this.chartData.set(this.DataService.getChartData());
  //console.log(this.chartData()[0]);
  const totalDays = 200;
  const allData = this.DataService.getChartData();
  const names : string [] = allData.map((d) => d.name);
  const attendancePercent : number [] = allData.map((d) =>d.attendance);
  const present : number [] = attendancePercent.map((d) => (d/100) * totalDays);
  const absent : number [] = present.map((p) => totalDays - p);
  
  

  this.chartOptions = {
    title: {
      text: 'Overall Attendance Percentage'
    },
    tooltip: {},
    legend: {
      data: ['Attendance'],
      top: 'bottom'
    },
    xAxis: {
      data: names,
      axisLabel: {
        interval: 0, 
        rotate: 30   
      }
    },
    yAxis: {},
    series: [
      {
        name: 'Attendance',
        type: 'line',
        data: attendancePercent
      },   
    ]
  }; 

  this.stackedChart =
  {
    title : {
      text : 'Number of days attended in a Year'
    },
    tooltip : {},
    xAxis :
    {
      data : names,
      axisLabel :
      {
        interval : 0,
        rotate : 30
      }
    },
    yAxis :
    {},
    series : [
    {
      name : 'Present',
      type : 'bar',
      data : present,
      color :'lightgreen'
    },
    {
      name : 'Absent',
      type:'bar',
      data : absent,
      color : 'red'
    }
    ]

  };
  const categories = {
    excellent: 0,
    good: 0,
    average: 0,
    poor: 0
  };

  allData.forEach(d => {
    const att = d.attendance;
    if (att >= 90) categories.excellent++;
    else if (att >= 75) categories.good++;
    else if (att >= 50) categories.average++;
    else categories.poor++;
  });

  const pieData = [
    { value: categories.excellent, name: 'Excellent' },
    { value: categories.good, name: 'Good' },
    { value: categories.average, name: 'Average' },
    { value: categories.poor, name: 'Poor' }
  ];

  this.doughnutChart = {
    title: {
      text: 'Class Attendance Summary',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} students ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Excellent ', 'Good ', 'Average ', 'Poor ']
    },
    series: [
      {
        name: 'Attendance Summary',
        type: 'pie',
        radius: ['40%', '70%'], 
        
        label: {
          show: true,
          position: 'outside',
        },
        labelLine: {
          show: true,
        },
        data: pieData,
      },
    ],
  };

  this.selectedChart = this.chartOptions;
}



}
