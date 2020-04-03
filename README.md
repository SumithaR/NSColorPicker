# nativescript-color-picker

Nativescript plugin to show color picker.

## (Optional) Prerequisites / Requirements

Describe the prerequisites that the user need to have installed before using your plugin. See [nativescript-firebase plugin](https://github.com/eddyverbruggen/nativescript-plugin-firebase) for example.

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
        
        
        
       
