# nativescript-color-picker

Nativescript plugin to show color picker.

# ScreenShots 
![android](https://user-images.githubusercontent.com/62943678/78359944-9f563e00-75d3-11ea-8042-229e347ad84f.png)
![ios](https://user-images.githubusercontent.com/62943678/78359952-a41af200-75d3-11ea-9b80-7177a7ba139d.png)

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
        
        
        
       
