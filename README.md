# nativescript-color-picker

Nativescript plugin to show color picker.

# ScreenShots 

![Screenshot_1585648654](https://user-images.githubusercontent.com/62943678/78359670-248d2300-75d3-11ea-9840-f3c060c9ea78.png)

![Simulator Screen Shot - iPhone 11 Pro Max - 2020-04-02 at 18 02 21](https://user-images.githubusercontent.com/62943678/78359682-2b1b9a80-75d3-11ea-926e-6d694b0f4fcb.png)

## Installation

tns plugin add nativescript-color-picker

## Usage 

import { ColorPicker } from 'nativescript-color-picker';

private _colorPicker: ColorPicker;
this._colorPicker = new ColorPicker();
this._colorPicker.show()
        .then(result => {
       })
        .catch(err => {
        });
        
        
        
       
