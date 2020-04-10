import { Component, OnInit } from "@angular/core";
import { ColorPicker } from 'nativescript-color-picker';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private _colorPicker: ColorPicker;
    color:any = "white";

    constructor() {
        // Use the component constructor to inject providers.
        this._colorPicker = new ColorPicker();

    }

    ngOnInit(): void {

        
  
    }
    showColor()
    {
        console.log("showColor");
        // Init your component properties here.
        this._colorPicker
        .show()
        .then(result => {
          console.log("result color", result )
          this.color = result;
        })
        .catch(err => {
          console.log(err);
        });
    }
}
