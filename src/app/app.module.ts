import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppNavigationComponent } from './component/app-navigation/app-navigation.component';
import { AppDetailsComponent } from './component/app-right-side-details/app-right-side-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppLeftSideDataComponent } from './component/app-left-side-data/app-left-side-data.component';
import { AppLeftSideHeaderComponent } from './component/app-left-side-header/app-left-side-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RightSideHeaderComponent } from './component/app-right-side-header/right-side-header.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    AppDetailsComponent,
    AppLeftSideDataComponent,
    AppLeftSideHeaderComponent,
    RightSideHeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularSplitModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
