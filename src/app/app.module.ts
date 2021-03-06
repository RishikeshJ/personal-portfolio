import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogContentExampleDialogComponent, DialogContentAboutPage } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,
        MatCardModule, MatDialogModule, MatChipsModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleAnalyticsService } from './google-analytics.service';

@NgModule({
  entryComponents:[
    DialogContentExampleDialogComponent,
    DialogContentAboutPage
  ],
  declarations: [
    AppComponent,
    DialogContentExampleDialogComponent,
    DialogContentAboutPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatChipsModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    NgImageSliderModule,
    MatExpansionModule
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
