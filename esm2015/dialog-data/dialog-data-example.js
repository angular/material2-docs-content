/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.animal;
}
/**
 * \@title Injecting data when opening a dialog
 */
export class DialogDataExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    }
}
DialogDataExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-data-example',
                template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
DialogDataExample.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    DialogDataExample.prototype.dialog;
}
export class DialogDataExampleDialog {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
}
DialogDataExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-data-example-dialog',
                template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n"
            }] }
];
/** @nocollapse */
DialogDataExampleDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    DialogDataExampleDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXBFLGdDQUVDOzs7SUFEQyw0QkFBcUM7Ozs7O0FBV3ZDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7SUFFeEMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ3hDLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw4RUFBdUM7O2FBRXhDOzs7O1lBYk8sU0FBUzs7OztJQWVILG1DQUF3Qjs7QUFldEMsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUNsQyxZQUE0QyxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs7O1lBTGpFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxvWkFBOEM7YUFDL0M7Ozs7NENBRWMsTUFBTSxTQUFDLGVBQWU7Ozs7SUFBdkIsdUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTUFUX0RJQUxPR19EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6ICdwYW5kYScgfCAndW5pY29ybicgfCAnbGlvbic7XG59XG5cbi8qKlxuICogQHRpdGxlIEluamVjdGluZyBkYXRhIHdoZW4gb3BlbmluZyBhIGRpYWxvZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLWRhdGEtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YUV4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFuaW1hbDogJ3BhbmRhJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XG59XG4iXX0=