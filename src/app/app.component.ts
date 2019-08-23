import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  response;
  database
  loading = true;
  constructor (private dataService : DataService, private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
   }
   ngOnInit(){
    this.loading = true;
    this.dataService.getData().subscribe(res => {

      this.response = res;
      this.database = this.response.data
      this.spinnerService.hide();
      console.log(this.database,"Response Received");

    });
  }
}
