import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { DashboardService } from '../../../service/dashboard.service';
import { JsonResult } from '../../../service/type';
import { Label } from 'ng2-charts';
import * as moment from 'moment';


const pv: ChartDataSets = { label: 'pv', data: [] };
const uv: ChartDataSets = { label: 'uv', data: [] };

@Component({
  selector: 'app-access-record',
  templateUrl: './access-record.component.html',
  styleUrls: ['./access-record.component.css']
})
export class AccessRecordComponent implements OnInit {

  public chartOptions: ChartOptions = {
    responsive: true,
  };

  chartData: ChartDataSets[] = [pv, uv];
  chartLabels: Label[] = [];
  day = '30';

  constructor(private service: DashboardService) {
  }

  ngOnInit() {
    this.onQueryChange();
  }

  onQueryChange() {
    this.service.getAccess(this.day).subscribe((data: JsonResult<{ pv: number; uv: number; time: string }[]>) => {
      console.log(data);
      if (data.success && data.data.length > 0) {
        data.data.map(day => {
          pv.data.push(day.pv);
          uv.data.push(day.uv);
          this.chartLabels.push(moment(day.time).format('M月D日'));
        });
        this.chartData = [pv, uv];
      }
    });
  }

}
