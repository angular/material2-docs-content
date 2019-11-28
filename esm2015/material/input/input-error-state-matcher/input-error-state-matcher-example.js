/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-error-state-matcher/input-error-state-matcher-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
function InputErrorStateMatcherExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorStateMatcherExample_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
export class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/**
 * \@title Input with a custom ErrorStateMatcher
 */
export class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
InputErrorStateMatcherExample.decorators = [
    { type: Component, args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            },] },
];
/** @nocollapse */ InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
/** @nocollapse */ InputErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 7, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementStart(3, "mat-hint");
        i0.ɵɵtext(4, "Errors appear instantly!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, InputErrorStateMatcherExample_mat_error_5_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(6, InputErrorStateMatcherExample_mat_error_6_Template, 4, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.MatHint, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    InputErrorStateMatcherExample.prototype.emailFormControl;
    /** @type {?} */
    InputErrorStateMatcherExample.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUE4QixVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0kvRSxpQ0FDRTtJQUFBLG9EQUNGO0lBQUEsaUJBQVk7OztJQUNaLGlDQUNFO0lBQUEsMEJBQVM7SUFBQSw4QkFBUTtJQUFBLHdCQUFRO0lBQUEsaUJBQVM7SUFDcEMsaUJBQVk7Ozs7O0FETGhCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUM5QixZQUFZLENBQUMsT0FBMkIsRUFBRSxJQUF3Qzs7Y0FDMUUsV0FBVyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUztRQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNGOzs7O0FBUUQsTUFBTSxPQUFPLDZCQUE2QjtJQUwxQztRQU1FLHFCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxVQUFVLENBQUMsUUFBUTtZQUNuQixVQUFVLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7UUFFSCxZQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0tBQ3JDOzs7WUFaQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7YUFDdkQ7OzBHQUNZLDZCQUE2QjtrRUFBN0IsNkJBQTZCO1FDbEIxQywrQkFDRTtRQUFBLHlDQUNFO1FBQUEsMkJBRUE7UUFBQSxnQ0FBVTtRQUFBLHdDQUF3QjtRQUFBLGlCQUFXO1FBQzdDLDBGQUNFO1FBRUYsMEZBQ0U7UUFFSixpQkFBaUI7UUFDbkIsaUJBQU87O1FBVmlDLGVBQWdDO1FBQWhDLGtEQUFnQyxrQ0FBQTtRQUd6RCxlQUFvRjtRQUFwRiwyR0FBb0Y7UUFHcEYsZUFBNkM7UUFBN0MsZ0VBQTZDOztrRERVL0MsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsMENBQTBDO2dCQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQzthQUN2RDs7OztJQUVDLHlEQUdHOztJQUVILGdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIEVycm9yIHdoZW4gaW52YWxpZCBjb250cm9sIGlzIGRpcnR5LCB0b3VjaGVkLCBvciBzdWJtaXR0ZWQuICovXG5leHBvcnQgY2xhc3MgTXlFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcbiAgaXNFcnJvclN0YXRlKGNvbnRyb2w6IEZvcm1Db250cm9sIHwgbnVsbCwgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlIHwgTmdGb3JtIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU3VibWl0dGVkID0gZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZDtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkIHx8IGlzU3VibWl0dGVkKSk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBJbnB1dCB3aXRoIGEgY3VzdG9tIEVycm9yU3RhdGVNYXRjaGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlIHtcbiAgZW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5lbWFpbCxcbiAgXSk7XG5cbiAgbWF0Y2hlciA9IG5ldyBNeUVycm9yU3RhdGVNYXRjaGVyKCk7XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIFtmb3JtQ29udHJvbF09XCJlbWFpbEZvcm1Db250cm9sXCJcbiAgICAgICAgICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8bWF0LWhpbnQ+RXJyb3JzIGFwcGVhciBpbnN0YW50bHkhPC9tYXQtaGludD5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwiZW1haWxGb3JtQ29udHJvbC5oYXNFcnJvcignZW1haWwnKSAmJiAhZW1haWxGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1xuICAgIDwvbWF0LWVycm9yPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJlbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICBFbWFpbCBpcyA8c3Ryb25nPnJlcXVpcmVkPC9zdHJvbmc+XG4gICAgPC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=