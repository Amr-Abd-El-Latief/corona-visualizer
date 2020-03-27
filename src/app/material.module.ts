import { NgModule } from "@angular/core";

import {
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule

} from "@angular/material";
 
@NgModule({
  exports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule {}