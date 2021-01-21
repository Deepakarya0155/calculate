import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from './Services/CommonService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculationProject';


  cbox=new FormControl("A");
  digits=1;

  ansFlag:boolean=false;

  firstNumber:number;
  SecondNumber:number;

  constructor(public cm:CommonService){
    cm.setScreenWidth();
    this.getNumbers();
  }

  getNumbers(){
    this.firstNumber=parseInt(this.cm.getRandomNumber(Math.pow(10,this.digits))+"");
    this.SecondNumber=parseInt(this.cm.getRandomNumber(Math.pow(10,this.digits))+"");
  }

  showAns(){
    this.ansFlag=true;
  }

  nextQuestion(){
    this.ansFlag=false;
    this.getNumbers();
  }
 


  @HostListener("window:resize") onwindowresize(){
    this.cm.setScreenWidth();
  }
}
