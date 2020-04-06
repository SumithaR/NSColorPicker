import * as app from 'tns-core-modules/application';

export class ColorPicker {

    constructor(){}

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
                        resolve(color);
                    },
                        
                    onCancel:function(dialog) {
                        // cancel was selected by the user
                        console.log("onCancel color=", color );
                        resolve(color);
                    }
                }))
                
                dialog.show();
                
                /*
                const activity =
                app.android.foregroundActivity || app.android.startActivity ;
                let dialog = com.jaredrummler.android.colorpicker.ColorPickerDialog.newBuilder();
                dialog.setDialogType(com.jaredrummler.android.colorpicker.ColorPickerDialog.TYPE_CUSTOM);
                dialog.setAllowPresets(true)
                dialog.setDialogId(0)
                dialog.setColor(android.graphics.Color.BLACK)
                dialog.setShowAlphaSlider(true)
                dialog.show(activity);
                */
                
                //dialog.show(app.android.foregroundActivity.getSupportFragmentManager(), "ChromaDialog");
                //dialog.onStart();
                //dialog.show(null,n)
                
                /*
                dialog.create().setColorPickerDialogListener(new com.jaredrummler.android.colorpicker.ColorPickerDialogListener({

                    onColorSelected:function(dialogId, color) {
                        console.log("color", color)
                        resolve(true)
                      },
                      onDialogDismissed:function(result){

                      }
                }))*/
                
    
            }
            catch (err) {
                reject(err);
              }
        })
        .then(result=>{
            console.log("result=", result );
        })
        .catch(res=>{
            console.log("res=", res );

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
