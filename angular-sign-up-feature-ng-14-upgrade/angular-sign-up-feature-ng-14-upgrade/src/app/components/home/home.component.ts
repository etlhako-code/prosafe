import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

 


  
  interval :any;
  user$ = this.usersService.currentUserProfile$;
  gaugeValues:any={}
  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    const updatesValues = () : void =>{
      this.gaugeValues ={1:34, 2:50, 3:60 };
    };
    const Interval : number = 5000;
    this.interval = setInterval(updatesValues,Interval);
    updatesValues();
  }
  ngOnDestroy() {
   clearInterval(this.interval);
  }
}
