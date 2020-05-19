import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../heroes/heroes.component';

@Component({
  selector: 'app-add-hero-dialog',
  templateUrl: './add-hero-dialog.component.html',
  styleUrls: ['./add-hero-dialog.component.scss']
})
export class AddHeroDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
