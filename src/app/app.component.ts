import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [MatDialogModule, MatDialog]
})



export class AppComponent {
  title = 'personal-porfolio';
  constructor(public dialog: MatDialog) { }


  openDialog(e: string) {
    console.log(e, 'this is the log');
    if (e === 'About') {
      const dialogRef = this.dialog.open(DialogContentAboutPage);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (e === 'Android') {
      const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './app-dialog-content-example-dialog.html',
})


export class DialogContentExampleDialogComponent {

  imageObject: Array<object> = [{
    image: './assets/angular.png',
    thumbImage: './assets/angular.png',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: './assets/angular.png',
    thumbImage: './assets/angular.png',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];
}

@Component({
  selector: 'About',
  templateUrl: './About.html',
})

export class DialogContentAboutPage {

  imageObject: Array<object> = [{
    image: './assets/angular.png',
    thumbImage: './assets/angular.png',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: './assets/angular.png',
    thumbImage: './assets/angular.png',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];
}
