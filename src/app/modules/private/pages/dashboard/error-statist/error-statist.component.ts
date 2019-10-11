import { Component } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { JsonResult } from '../../../service/type';

export interface ErrorElement {
  path: string;
  method: string;
  count: number;
}

@Component({
  selector: 'app-error-statist',
  templateUrl: './error-statist.component.html',
  styleUrls: ['./error-statist.component.css']
})
export class ErrorStatistComponent {

  displayedColumns: string[] = ['path', 'method', 'count'];
  dataSource: ErrorElement[];
  day = '30';
  code = '500';

  constructor(private service: DashboardService) {
    this.onQueryChange();
  }

  onQueryChange() {
    this.service.getError(this.day, this.code).subscribe((data: JsonResult<ErrorElement[]>) => {
      this.dataSource = data.data;
    });
  }

}
