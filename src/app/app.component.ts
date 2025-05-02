import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { EchartComponent } from './components/echart/echart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,EchartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EchartApp';

  
}
