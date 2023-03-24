import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { SentComponent } from './sent/sent.component';
import { CreateComponent } from './create/create.component';
import { InboxComponent } from './inbox/inbox.component';
import { DraftComponent } from './draft/draft.component';
//mat
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button'
import { DialogModule } from "primeng/dialog";
import {ButtonModule} from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SentComponent,
    CreateComponent,
    InboxComponent,
    DraftComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
    MatTabsModule,
    RouterLink,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatButtonModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatIconModule,MatDividerModule,MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
