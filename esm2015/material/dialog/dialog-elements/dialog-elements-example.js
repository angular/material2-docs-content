/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/dialog/dialog-elements/dialog-elements-example.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBVW5ELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFDaEMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7SUFFeEMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O1lBVE8sU0FBUzs7MEZBVUoscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNYbEMsaUNBQTBDO1FBQXZCLHdHQUFTLGdCQUFZLElBQUM7UUFBQyw2QkFBYTtRQUFBLGlCQUFTOztrRERXbkQscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUVhLHVDQUF3Qjs7QUFZdEMsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSnZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2FBQ25EOztzR0FDWSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjtRRXhCeEMsNkJBQXFCO1FBQUEsb0NBQW9CO1FBQUEsaUJBQUs7UUFDOUMsOEJBQXdCO1FBQUEscUZBQXFFO1FBQUEsaUJBQU07UUFDbkcsOEJBQ0U7UUFBQSxpQ0FBb0M7UUFBQSxxQkFBSztRQUFBLGlCQUFTO1FBQ3BELGlCQUFNOztrREZvQk8sMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbi8qKlxuICogQHRpdGxlIERpYWxvZyBlbGVtZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRWxlbWVudHNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2cpO1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5MYXVuY2ggZGlhbG9nPC9idXR0b24+XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZT5EaWFsb2cgd2l0aCBlbGVtZW50czwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5UaGlzIGRpYWxvZyBzaG93Y2FzZXMgdGhlIHRpdGxlLCBjbG9zZSwgY29udGVudCBhbmQgYWN0aW9ucyBlbGVtZW50cy48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5DbG9zZTwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=