import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
  MatDialogModule
} from "@angular/material";

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  MatDialogModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule {}
