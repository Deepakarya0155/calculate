import {Injectable} from '@angular/core'

@Injectable()
export class CommonService{
    isMobileDevice:boolean=false;
    screenWidth:number;


    setScreenWidth(){
        this.screenWidth=window.screen.width;
        if(this.screenWidth<540){
            this.isMobileDevice=true;
        }else{
            this.isMobileDevice=false;
        }
    }

    public getRandomNumber(a:number):number{
        return Math.random()*a+1;
    }
}