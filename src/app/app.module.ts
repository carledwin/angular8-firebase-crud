import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyService } from './policy.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    PolicyService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
