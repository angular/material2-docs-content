/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
function DialogDataExampleDialog_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
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
                templateUrl: 'dialog-data-example.html',
                styleUrls: ['dialog-data-example.css'],
            },] },
];
/** @nocollapse */
DialogDataExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogDataExample.ɵfac = function DialogDataExample_Factory(t) { return new (t || DialogDataExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
/** @nocollapse */ DialogDataExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogDataExample, selectors: [["dialog-data-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogDataExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogDataExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogDataExample, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example',
                templateUrl: 'dialog-data-example.html',
                styleUrls: ['dialog-data-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
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
                templateUrl: 'dialog-data-example-dialog.html',
            },] },
];
/** @nocollapse */
DialogDataExampleDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/** @nocollapse */ DialogDataExampleDialog.ɵfac = function DialogDataExampleDialog_Factory(t) { return new (t || DialogDataExampleDialog)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ DialogDataExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogDataExampleDialog, selectors: [["dialog-data-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"]], template: function DialogDataExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Favorite Animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3, " My favorite animal is: ");
        i0.ɵɵelementStart(4, "ul");
        i0.ɵɵelementStart(5, "li");
        i0.ɵɵtemplate(6, DialogDataExampleDialog_span_6_Template, 2, 0, "span", 2);
        i0.ɵɵtext(7, " Panda ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "li");
        i0.ɵɵtemplate(9, DialogDataExampleDialog_span_9_Template, 2, 0, "span", 2);
        i0.ɵɵtext(10, " Unicorn ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "li");
        i0.ɵɵtemplate(12, DialogDataExampleDialog_span_12_Template, 2, 0, "span", 2);
        i0.ɵɵtext(13, " Lion ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "panda");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "unicorn");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "lion");
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i3.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogDataExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example-dialog',
                templateUrl: 'dialog-data-example-dialog.html',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    DialogDataExampleDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWRhdGEvZGlhbG9nLWRhdGEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUNJOUQsNEJBQXNDO0lBQUEsc0JBQVE7SUFBQSxpQkFBTzs7O0lBR3JELDRCQUF3QztJQUFBLHNCQUFRO0lBQUEsaUJBQU87OztJQUd2RCw0QkFBcUM7SUFBQSxzQkFBUTtJQUFBLGlCQUFPOzs7OztBRFIxRCxnQ0FFQzs7O0lBREMsNEJBQXFDOzs7OztBQVd2QyxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7O0lBRXhDLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLE9BQU87YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7Ozs7WUFiTyxTQUFTOztrRkFjSixpQkFBaUI7c0RBQWpCLGlCQUFpQjtRRWY5QixpQ0FBMEM7UUFBdkIsb0dBQVMsZ0JBQVksSUFBQztRQUFDLDJCQUFXO1FBQUEsaUJBQVM7O2tERmVqRCxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOzs7O0lBRWEsbUNBQXdCOztBQWV0QyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBQ2xDLFlBQTRDLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7WUFMakUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7YUFDL0M7Ozs7NENBRWMsTUFBTSxTQUFDLGVBQWU7OzhGQUR4Qix1QkFBdUIsdUJBQ2QsZUFBZTs0REFEeEIsdUJBQXVCO1FDL0JwQyw2QkFBcUI7UUFBQSwrQkFBZTtRQUFBLGlCQUFLO1FBQ3pDLDhCQUNFO1FBQUEsd0NBQ0E7UUFBQSwwQkFDRTtRQUFBLDBCQUNFO1FBQUEsMEVBQXNDO1FBQWdCLHVCQUN4RDtRQUFBLGlCQUFLO1FBQ0wsMEJBQ0U7UUFBQSwwRUFBd0M7UUFBZ0IsMEJBQzFEO1FBQUEsaUJBQUs7UUFDTCwyQkFDRTtRQUFBLDRFQUFxQztRQUFnQix1QkFDdkQ7UUFBQSxpQkFBSztRQUNQLGlCQUFLO1FBQ1AsaUJBQU07O1FBVE0sZUFBK0I7UUFBL0Isa0RBQStCO1FBRy9CLGVBQWlDO1FBQWpDLG9EQUFpQztRQUdqQyxlQUE4QjtRQUE5QixpREFBOEI7O2tERG9CN0IsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2FBQy9DOztzQkFFYyxNQUFNO3VCQUFDLGVBQWU7Ozs7SUFBdkIsdUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTUFUX0RJQUxPR19EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6ICdwYW5kYScgfCAndW5pY29ybicgfCAnbGlvbic7XG59XG5cbi8qKlxuICogQHRpdGxlIEluamVjdGluZyBkYXRhIHdoZW4gb3BlbmluZyBhIGRpYWxvZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLWRhdGEtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YUV4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFuaW1hbDogJ3BhbmRhJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XG59XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZT5GYXZvcml0ZSBBbmltYWw8L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIE15IGZhdm9yaXRlIGFuaW1hbCBpczpcbiAgPHVsPlxuICAgIDxsaT5cbiAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YS5hbmltYWwgPT09ICdwYW5kYSdcIj4mIzEwMDAzOzwvc3Bhbj4gUGFuZGFcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YS5hbmltYWwgPT09ICd1bmljb3JuJ1wiPiYjMTAwMDM7PC9zcGFuPiBVbmljb3JuXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8c3BhbiAqbmdJZj1cImRhdGEuYW5pbWFsID09PSAnbGlvbidcIj4mIzEwMDAzOzwvc3Bhbj4gTGlvblxuICAgIDwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cbiJdfQ==