import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRippleModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatProgressBarModule,
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
  ]
})
export class MaterialModule {
}
