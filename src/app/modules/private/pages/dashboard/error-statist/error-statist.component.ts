import { Component } from '@angular/core';
import { ErrorElement, ErrorService } from '../../../service/dashboard/error.service';


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

  constructor(private errorService: ErrorService) {
    this.onQueryChange();
  }

  onQueryChange() {
    this.errorService.getError(this.day, this.code).subscribe((data) => {
      console.log(data);
    });
  }

}
