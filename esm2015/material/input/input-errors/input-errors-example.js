/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
function InputErrorsExample_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorsExample_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * \@title Input with error messages
 */
export class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
}
InputErrorsExample.decorators = [
    { type: Component, args: [{
                selector: 'input-errors-example',
                templateUrl: 'input-errors-example.html',
                styleUrls: ['input-errors-example.css'],
            },] },
];
/** @nocollapse */ InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
/** @nocollapse */ InputErrorsExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 5, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵtemplate(3, InputErrorsExample_mat_error_3_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(4, InputErrorsExample_mat_error_4_Template, 4, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.emailFormControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputErrorsExample, [{
        type: Component,
        args: [{
                selector: 'input-errors-example',
                templateUrl: 'input-errors-example.html',
                styleUrls: ['input-errors-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    InputErrorsExample.prototype.emailFormControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3JzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvcnMvaW5wdXQtZXJyb3JzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvcnMvaW5wdXQtZXJyb3JzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0lDRW5ELGlDQUNFO0lBQUEsb0RBQ0Y7SUFBQSxpQkFBWTs7O0lBQ1osaUNBQ0U7SUFBQSwwQkFBUztJQUFBLDhCQUFRO0lBQUEsd0JBQVE7SUFBQSxpQkFBUztJQUNwQyxpQkFBWTs7Ozs7QURHaEIsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU1FLHFCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxVQUFVLENBQUMsUUFBUTtZQUNuQixVQUFVLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7S0FDSjs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDOztvRkFDWSxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQ1gvQiwrQkFDRTtRQUFBLHlDQUNFO1FBQUEsMkJBQ0E7UUFBQSwrRUFDRTtRQUVGLCtFQUNFO1FBRUosaUJBQWlCO1FBQ25CLGlCQUFPOztRQVJpQyxlQUFnQztRQUFoQyxrREFBZ0M7UUFDekQsZUFBb0Y7UUFBcEYsMkdBQW9GO1FBR3BGLGVBQTZDO1FBQTdDLGdFQUE2Qzs7a0RESy9DLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEM7Ozs7SUFFQyw4Q0FHRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXQgd2l0aCBlcnJvciBtZXNzYWdlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1lcnJvcnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZXJyb3JzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1lcnJvcnMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFcnJvcnNFeGFtcGxlIHtcbiAgZW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5lbWFpbCxcbiAgXSk7XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIFtmb3JtQ29udHJvbF09XCJlbWFpbEZvcm1Db250cm9sXCI+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ2VtYWlsJykgJiYgIWVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcbiAgICA8L21hdC1lcnJvcj5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwiZW1haWxGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgRW1haWwgaXMgPHN0cm9uZz5yZXF1aXJlZDwvc3Ryb25nPlxuICAgIDwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19