import { Component, ElementRef, NgModule, ViewChild } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
@NgModule({
  imports: [MatDialogModule, MatDialog],
})

export class AppComponent {
  @ViewChild('work', {static: false})
  work: ElementRef;
  @ViewChild('contact', {static: false})
  contact: ElementRef;
  
  title = "personal-porfolio";
  frontEndSkills = ["Angular", "HTML5", "Bootstrap", "CSS"];
  BackEndSkills = ['.NET Core', 'PHP', 'Laravel','Flask'];
  LanguageSkills = ['C#', 'SQL', 'Typescript','Node.Js'];
  ToolSkills = ['Git','Jira','Selenium','Figma','Postman']
  constructor(public dialog: MatDialog) {}
  

  openDialog(e: string) {
    console.log(e, "this is the log");
    if (e === "About") {
      const dialogRef = this.dialog.open(DialogContentAboutPage);
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (e === "Android") {
      const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }



  onWorkClick() {
    this.work.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  onContactClick() {
    this.contact.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  onResumeClick() {
    window.location.href = '../assets/Rishikesh Joshi Resume.pdf';
  }
}

@Component({
  selector: "app-dialog-content-example-dialog",
  templateUrl: "./app-dialog-content-example-dialog.html",
})
export class DialogContentExampleDialogComponent {
  imageObject: Array<object> = [
    {
      image: "./assets/angular.png",
      thumbImage: "./assets/angular.png",
      alt: "alt of image",
      title: "title of image",
    },
    {
      image: "./assets/angular.png",
      thumbImage: "./assets/angular.png",
      title: "Image title",
      alt: "Image alt",
    },
  ];
}

@Component({
  selector: "About",
  templateUrl: "./About.html",
})
export class DialogContentAboutPage {
  imageObject: Array<object> = [
    {
      image: "./assets/angular.png",
      thumbImage: "./assets/angular.png",
      alt: "alt of image",
      title: "title of image",
    },
    {
      image: "./assets/angular.png",
      thumbImage: "./assets/angular.png",
      title: "Image title",
      alt: "Image alt",
    },
  ];
}
