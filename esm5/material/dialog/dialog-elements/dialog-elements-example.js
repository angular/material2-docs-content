import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog elements
 */
var DialogElementsExample = /** @class */ (function () {
    function DialogElementsExample(dialog) {
        this.dialog = dialog;
    }
    DialogElementsExample.prototype.openDialog = function () {
        this.dialog.open(DialogElementsExampleDialog);
    };
    DialogElementsExample.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-elements-example',
                    templateUrl: 'dialog-elements-example.html',
                    styleUrls: ['dialog-elements-example.css'],
                },] },
    ];
    /** @nocollapse */
    DialogElementsExample.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    DialogElementsExample.ɵfac = function DialogElementsExample_Factory(t) { return new (t || DialogElementsExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
    DialogElementsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogElementsExample, selectors: [["dialog-elements-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogElementsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DialogElementsExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
            i0.ɵɵtext(1, "Launch dialog");
            i0.ɵɵelementEnd();
        } }, directives: [i2.MatButton], styles: [""] });
    return DialogElementsExample;
}());
export { DialogElementsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogElementsExample, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example',
                templateUrl: 'dialog-elements-example.html',
                styleUrls: ['dialog-elements-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
var DialogElementsExampleDialog = /** @class */ (function () {
    function DialogElementsExampleDialog() {
    }
    DialogElementsExampleDialog.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-elements-example-dialog',
                    templateUrl: 'dialog-elements-example-dialog.html',
                },] },
    ];
    DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
    DialogElementsExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) { if (rf & 1) {
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
    return DialogElementsExampleDialog;
}());
export { DialogElementsExampleDialog };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogElementsExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example-dialog',
                templateUrl: 'dialog-elements-example-dialog.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVuRDs7R0FFRztBQUNIO0lBTUUsK0JBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7Ozs7Z0JBVE8sU0FBUzs7OEZBVUoscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNYbEMsaUNBQTBDO1lBQXZCLHdHQUFTLGdCQUFZLElBQUM7WUFBQyw2QkFBYTtZQUFBLGlCQUFTOztnQ0RBaEU7Q0FpQkMsQUFYRCxJQVdDO1NBTlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztBQVVEO0lBQUE7S0FJMkM7O2dCQUoxQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7OzBHQUNZLDJCQUEyQjtvRUFBM0IsMkJBQTJCO1lFeEJ4Qyw2QkFBcUI7WUFBQSxvQ0FBb0I7WUFBQSxpQkFBSztZQUM5Qyw4QkFBd0I7WUFBQSxxRkFBcUU7WUFBQSxpQkFBTTtZQUNuRyw4QkFDRTtZQUFBLGlDQUFvQztZQUFBLHFCQUFLO1lBQUEsaUJBQVM7WUFDcEQsaUJBQU07O3NDRkpOO0NBd0IyQyxBQUozQyxJQUkyQztTQUE5QiwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgZWxlbWVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nKTtcbiAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2cge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+TGF1bmNoIGRpYWxvZzwvYnV0dG9uPlxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+RGlhbG9nIHdpdGggZWxlbWVudHM8L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+VGhpcyBkaWFsb2cgc2hvd2Nhc2VzIHRoZSB0aXRsZSwgY2xvc2UsIGNvbnRlbnQgYW5kIGFjdGlvbnMgZWxlbWVudHMuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U+Q2xvc2U8L2J1dHRvbj5cbjwvZGl2PlxuIl19