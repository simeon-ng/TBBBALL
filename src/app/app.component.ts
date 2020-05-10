import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TBBBALL (Text Based Basketball)';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(WelcomeDialog, {
      width: '25vw'
    });
  }

}

@Component({
  selector: 'welcome-dialog',
  templateUrl: 'welcome-dialog.html'
})
export class WelcomeDialog {
  
  constructor(public dialogRef: MatDialogRef<WelcomeDialog>) {}

  onClick() :void {
    this.dialogRef.close();
  }
}
