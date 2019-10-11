import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { DashboardService } from '../../../service/dashboard.service';
import { JsonResult } from '../../../service/type';
import { Label, SingleDataSet } from 'ng2-charts';

interface AppUse {
  app: string;
  use: number;
}

@Component({
  selector: 'app-app-use',
  templateUrl: './app-use.component.html',
  styleUrls: ['./app-use.component.css']
})
export class AppUseComponent implements OnInit {

  public chartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'right' }
  };

  chartData: SingleDataSet = [1, 1, 1, 1, 1, 1];
  chartLabels: Label[] = [];
  day = '30';

  constructor(private service: DashboardService) {
  }

  ngOnInit() {
    this.onQueryChange();
  }

  onQueryChange() {
    this.service.getAppUse(this.day).subscribe((data: JsonResult<AppUse[]>) => {
      console.log(data);
      if (data.success && data.data.length > 0) {
        const use: number[] = [];
        const app: string[] = [];
        data.data.forEach(item => {
          use.push(item.use);
          app.push(item.app);
        });
        this.chartData = use;
        this.chartLabels = app;
      }
    });
  }

}
