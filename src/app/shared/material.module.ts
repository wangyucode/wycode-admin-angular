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
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatSelectModule,
  MatExpansionModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,
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
    MatListModule,
    MatProgressBarModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,
  ]
})
export class MaterialModule {
}
