import { Component } from '@angular/core';

export interface ErrorElement {
  path: string;
  method: string;
  count: number;
}

const ELEMENT_DATA: ErrorElement[] = [
  { path: '/', method: 'GET', count: 123 },
  { path: '/public', method: 'GET', count: 123 },
  { path: '/xyz.html', method: 'POST', count: 123 },
];

@Component({
  selector: 'app-error-statist',
  templateUrl: './error-statist.component.html',
  styleUrls: ['./error-statist.component.css']
})
export class ErrorStatistComponent {

  displayedColumns: string[] = ['path', 'method', 'count'];
  dataSource = ELEMENT_DATA;

}
