import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Injecting data when opening a dialog
 */
export class DialogDataExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda',
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: DialogDataExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: DialogDataExample, isStandalone: true, selector: "dialog-data-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatDialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: DialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example', standalone: true, imports: [MatButtonModule, MatDialogModule], template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
export class DialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: DialogDataExampleDialog, deps: [{ token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0-rc.2", type: DialogDataExampleDialog, isStandalone: true, selector: "dialog-data-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</div>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: DialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example-dialog', standalone: true, imports: [MatDialogModule], template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</div>\n" }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQU16RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFeEMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ3hDLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7bUhBVFUsaUJBQWlCO3VHQUFqQixpQkFBaUIsK0VDakI5QixvRUFDQSwyQ0RjWSxlQUFlLDJOQUFFLGVBQWU7O2dHQUUvQixpQkFBaUI7a0JBTjdCLFNBQVM7K0JBQ0UscUJBQXFCLGNBRW5CLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7O0FBb0I3QyxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQTRDLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO21IQURyRCx1QkFBdUIsa0JBQ2QsZUFBZTt1R0FEeEIsdUJBQXVCLHNGRW5DcEMsMGJBcUJBLDJDRllZLGVBQWU7O2dHQUVkLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDOzswQkFHYixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6ICdwYW5kYScgfCAndW5pY29ybicgfCAnbGlvbic7XG59XG5cbi8qKlxuICogQHRpdGxlIEluamVjdGluZyBkYXRhIHdoZW4gb3BlbmluZyBhIGRpYWxvZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXREaWFsb2dNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYW5pbWFsOiAncGFuZGEnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXREaWFsb2dNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cbn1cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkZhdm9yaXRlIEFuaW1hbDwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgTXkgZmF2b3JpdGUgYW5pbWFsIGlzOlxuICA8dWw+XG4gICAgPGxpPlxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ3BhbmRhJykge1xuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cbiAgICAgIH0gUGFuZGFcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIEBpZiAoZGF0YS5hbmltYWwgPT09ICd1bmljb3JuJykge1xuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cbiAgICAgIH0gVW5pY29yblxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ2xpb24nKSB7XG4gICAgICAgIDxzcGFuPiYjMTAwMDM7PC9zcGFuPlxuICAgICAgfSBMaW9uXG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuIl19