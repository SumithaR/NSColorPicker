import * as app from 'tns-core-modules/application';
import { Color } from 'tns-core-modules/color';

export class ColorPicker {

    constructor(){}
    selectedColor:Color;

    show()
    {
        return new Promise((resolve, reject) => {

            try {
                let color = 0xffffff00;

                const activity =
                app.android.foregroundActivity || app.android.startActivity ;

                let dialog = new yuku.ambilwarna.AmbilWarnaDialog(activity, color, new yuku.ambilwarna.AmbilWarnaDialog.OnAmbilWarnaListener({
                    
                    onOk:function(dialog, color) {
                        // color is the color selected by the user.
                        console.log("onOk color=", color );
                        //let hexColor = java.lang.String.format("#%06X", (0xFFFFFF & color));
                        
                        let alpha = (color >> 24) & 0xff; // or color >>> 24
                        let red = (color >> 16) & 0xff;
                        let green = (color >>  8) & 0xff;
                        let blue = (color      ) & 0xff;
                        this.selectedColor = new Color(alpha, red, green, blue)

                        resolve(this.selectedColor);
                        //resolve(activity.getContext().getResources().getColor(color));
                    },
                        
                    onCancel:function(dialog) {
                        // cancel was selected by the user
                        console.log("onCancel color=", color );
                        let alpha = (color >> 24) & 0xff; // or color >>> 24
                        let red = (color >> 16) & 0xff;
                        let green = (color >>  8) & 0xff;
                        let blue = (color      ) & 0xff;
                        this.selectedColor = new Color(alpha, red, green, blue)
                        resolve(this.selectedColor);
                    }
                }))
                
                dialog.show();
                
                
                
    
            }
            catch (err) {
                reject(err);
              }
        })
        
    }

    onColorSelected(dialogId, color) 
    {

        console.log("color", color)
    }
    onDialogDismissed(result)
    {

    }
}
