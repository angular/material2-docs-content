/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
/**
 * \@title Dialog elements
 */
export class DialogElementsExample {
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
        this.dialog.open(DialogElementsExampleDialog);
    }
}
DialogElementsExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example',
                template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
DialogElementsExample.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    DialogElementsExample.prototype.dialog;
}
export class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example-dialog',
                template: "<h1 mat-dialog-title>Dialog with elements</h1>\n<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n"
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQVVuRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBQ2hDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7O0lBRXhDLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxnRkFBMkM7O2FBRTVDOzs7O1lBVE8sU0FBUzs7OztJQVdILHVDQUF3Qjs7QUFZdEMsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSnZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyx5UEFBa0Q7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIGVsZW1lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFbGVtZW50c0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyk7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nIHt9XG4iXX0=