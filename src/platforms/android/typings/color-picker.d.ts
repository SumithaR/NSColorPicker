/// <reference path="android-declarations.d.ts"/>

declare module yuku {
	export module ambilwarna {
		export class AmbilWarnaDialog {
			public static class: java.lang.Class<yuku.ambilwarna.AmbilWarnaDialog>;
			public show(): void;
			public constructor(param0: globalAndroid.content.Context, param1: number, param2: yuku.ambilwarna.AmbilWarnaDialog.OnAmbilWarnaListener);
			public moveTarget(): void;
			public moveAlphaCursor(): void;
			public constructor(param0: globalAndroid.content.Context, param1: number, param2: boolean, param3: yuku.ambilwarna.AmbilWarnaDialog.OnAmbilWarnaListener);
			public moveCursor(): void;
			public getDialog(): globalAndroid.app.AlertDialog;
		}
		export module AmbilWarnaDialog {
			export class OnAmbilWarnaListener {
				public static class: java.lang.Class<yuku.ambilwarna.AmbilWarnaDialog.OnAmbilWarnaListener>;
				/**
				 * Constructs a new instance of the yuku.ambilwarna.AmbilWarnaDialog$OnAmbilWarnaListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCancel(param0: yuku.ambilwarna.AmbilWarnaDialog): void;
					onOk(param0: yuku.ambilwarna.AmbilWarnaDialog, param1: number): void;
				});
				public constructor();
				public onOk(param0: yuku.ambilwarna.AmbilWarnaDialog, param1: number): void;
				public onCancel(param0: yuku.ambilwarna.AmbilWarnaDialog): void;
			}
		}
	}
}

declare module yuku {
	export module ambilwarna {
		export class AmbilWarnaSquare {
			public static class: java.lang.Class<yuku.ambilwarna.AmbilWarnaSquare>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public onDraw(param0: globalAndroid.graphics.Canvas): void;
		}
	}
}

declare module yuku {
	export module ambilwarna {
		export class BuildConfig {
			public static class: java.lang.Class<yuku.ambilwarna.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module yuku {
	export module ambilwarna {
		export module widget {
			export class AmbilWarnaPrefWidgetView {
				public static class: java.lang.Class<yuku.ambilwarna.widget.AmbilWarnaPrefWidgetView>;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			}
		}
	}
}

declare module yuku {
	export module ambilwarna {
		export module widget {
			export class AmbilWarnaPreference {
				public static class: java.lang.Class<yuku.ambilwarna.widget.AmbilWarnaPreference>;
				public onClick(): void;
				public onSetInitialValue(param0: boolean, param1: any): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public onGetDefaultValue(param0: globalAndroid.content.res.TypedArray, param1: number): any;
				public onBindView(param0: globalAndroid.view.View): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public forceSetValue(param0: number): void;
			}
			export module AmbilWarnaPreference {
				export class SavedState {
					public static class: java.lang.Class<yuku.ambilwarna.widget.AmbilWarnaPreference.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<yuku.ambilwarna.widget.AmbilWarnaPreference.SavedState>;
					public constructor(param0: globalAndroid.os.Parcel);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: globalAndroid.os.Parcelable);
				}
			}
		}
	}
}

//Generics information:

