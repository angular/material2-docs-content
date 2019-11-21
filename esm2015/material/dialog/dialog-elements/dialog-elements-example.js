/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
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
                templateUrl: 'dialog-elements-example.html',
                styleUrls: ['dialog-elements-example.css'],
            },] },
];
/** @nocollapse */
DialogElementsExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogElementsExample.ɵfac = function DialogElementsExample_Factory(t) { return new (t || DialogElementsExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
/** @nocollapse */ DialogElementsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogElementsExample, selectors: [["dialog-elements-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogElementsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogElementsExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Launch dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogElementsExample, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example',
                templateUrl: 'dialog-elements-example.html',
                styleUrls: ['dialog-elements-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
if (false) {
    /** @type {?} */
    DialogElementsExample.prototype.dialog;
}
export class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example-dialog',
                templateUrl: 'dialog-elements-example-dialog.html',
            },] },
];
/** @nocollapse */ DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
/** @nocollapse */ DialogElementsExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Dialog with elements");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3, "This dialog showcases the title, close, content and actions elements.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵtext(6, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogElementsExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example-dialog',
                templateUrl: 'dialog-elements-example-dialog.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFVbkQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNoQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQzs7OztJQUV4QyxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7WUFUTyxTQUFTOzswRkFVSixxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1hsQyxpQ0FBMEM7UUFBdkIsd0dBQVMsZ0JBQVksSUFBQztRQUFDLDZCQUFhO1FBQUEsaUJBQVM7O2tERFduRCxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBRWEsdUNBQXdCOztBQVl0QyxNQUFNLE9BQU8sMkJBQTJCOzs7WUFKdkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQ7O3NHQUNZLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FFeEJ4Qyw2QkFBcUI7UUFBQSxvQ0FBb0I7UUFBQSxpQkFBSztRQUM5Qyw4QkFBd0I7UUFBQSxxRkFBcUU7UUFBQSxpQkFBTTtRQUNuRyw4QkFDRTtRQUFBLGlDQUFvQztRQUFBLHFCQUFLO1FBQUEsaUJBQVM7UUFDcEQsaUJBQU07O2tERm9CTywyQkFBMkI7Y0FKdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIGVsZW1lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFbGVtZW50c0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyk7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPkxhdW5jaCBkaWFsb2c8L2J1dHRvbj5cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkRpYWxvZyB3aXRoIGVsZW1lbnRzPC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlRoaXMgZGlhbG9nIHNob3djYXNlcyB0aGUgdGl0bGUsIGNsb3NlLCBjb250ZW50IGFuZCBhY3Rpb25zIGVsZW1lbnRzLjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPkNsb3NlPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==