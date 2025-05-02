import { Injectable } from '@angular/core';
import { ChartData } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class ChartServicesService {

  

  getChartData() : ChartData []
  {
    return [
      { name: 'Thanzia', attendance: 90 },
      { name: 'Ayesha', attendance: 85 },
      { name: 'Sree', attendance: 78 },
      { name: 'Shwetha', attendance: 92 },
      { name: 'Visnu', attendance: 88 },
      { name: 'Sid', attendance: 80 },
      { name: 'Hari', attendance: 95 },
      { name: 'Ibrahim', attendance: 67 },
      { name: 'Varun', attendance: 40 },
      { name: 'Bala', attendance: 83 },
      { name: 'Rajesh', attendance: 76 },
      { name: 'Anika', attendance: 50 },
      { name: 'Rida', attendance: 87 },
      { name: 'Sameer', attendance: 69 },
      { name: 'Riya', attendance: 82 },
      { name: 'Neha', attendance: 33 },
      { name: 'Maria', attendance: 89 },
      { name: 'Priya', attendance: 93 },
      { name: 'Raj', attendance: 81 },
      { name: 'Ram', attendance: 70 }
    ];
  }



}
