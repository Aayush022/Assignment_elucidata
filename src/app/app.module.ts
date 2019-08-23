import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
