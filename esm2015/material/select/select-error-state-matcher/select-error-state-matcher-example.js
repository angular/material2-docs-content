/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectErrorStateMatcherExample_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
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
 * \@title Select with a custom ErrorStateMatcher
 */
export class SelectErrorStateMatcherExample {
    constructor() {
        this.selected = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.selectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.nativeSelectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
SelectErrorStateMatcherExample.decorators = [
    { type: Component, args: [{
                selector: 'select-error-state-matcher-example',
                templateUrl: 'select-error-state-matcher-example.html',
                styleUrls: ['select-error-state-matcher-example.css'],
            },] },
];
/** @nocollapse */ SelectErrorStateMatcherExample.ɵfac = function SelectErrorStateMatcherExample_Factory(t) { return new (t || SelectErrorStateMatcherExample)(); };
/** @nocollapse */ SelectErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectErrorStateMatcherExample, selectors: [["select-error-state-matcher-example"]], decls: 29, vars: 8, consts: [[3, "formControl", "errorStateMatcher"], ["value", "valid"], ["value", "invalid"], [4, "ngIf"], [1, "demo-full-width"], ["matNativeControl", "", 3, "formControl", "errorStateMatcher"], ["value", ""], ["value", "valid", "selected", ""]], template: function SelectErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Choose one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 0);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "Clear");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 1);
        i0.ɵɵtext(9, "Valid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 2);
        i0.ɵɵtext(11, "Invalid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-hint");
        i0.ɵɵtext(13, "Errors appear instantly!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, SelectErrorStateMatcherExample_mat_error_14_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(15, SelectErrorStateMatcherExample_mat_error_15_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "h4");
        i0.ɵɵtext(17, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-form-field", 4);
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Choose one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "select", 5);
        i0.ɵɵelement(22, "option", 6);
        i0.ɵɵelementStart(23, "option", 7);
        i0.ɵɵtext(24, "Valid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "option", 2);
        i0.ɵɵtext(26, "Invalid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, SelectErrorStateMatcherExample_mat_error_27_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(28, SelectErrorStateMatcherExample_mat_error_28_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.selected)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.selected.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selected.hasError("pattern") && !ctx.selected.hasError("required"));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.nativeSelectFormControl)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("pattern") && !ctx.nativeSelectFormControl.hasError("required"));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i1.MatHint, i5.NgIf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1.MatError], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'select-error-state-matcher-example',
                templateUrl: 'select-error-state-matcher-example.html',
                styleUrls: ['select-error-state-matcher-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.selected;
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.selectFormControl;
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.nativeSelectFormControl;
    /** @type {?} */
    SelectErrorStateMatcherExample.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyL3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUE4QixVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDUWpGLGlDQUFpRDtJQUFBLHlDQUF5QjtJQUFBLGlCQUFZOzs7SUFDdEYsaUNBQ0U7SUFBQSwyQ0FDRjtJQUFBLGlCQUFZOzs7SUFXWixpQ0FBZ0U7SUFBQSx5Q0FBeUI7SUFBQSxpQkFBWTs7O0lBQ3JHLGlDQUNFO0lBQUEsMkNBQ0Y7SUFBQSxpQkFBWTs7Ozs7QURyQmQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBQzlCLFlBQVksQ0FBQyxPQUEyQixFQUFFLElBQXdDOztjQUMxRSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0NBQ0Y7Ozs7QUFRRCxNQUFNLE9BQU8sOEJBQThCO0lBTDNDO1FBTUUsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNsQyxVQUFVLENBQUMsUUFBUTtZQUNuQixVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDM0MsVUFBVSxDQUFDLFFBQVE7WUFDbkIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsNEJBQXVCLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2pELFVBQVUsQ0FBQyxRQUFRO1lBQ25CLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILFlBQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7S0FDckM7OztZQXRCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7OzRHQUNZLDhCQUE4QjttRUFBOUIsOEJBQThCO1FDbEIzQywwQkFBSTtRQUFBLDBCQUFVO1FBQUEsaUJBQUs7UUFDbkIsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLDBCQUFVO1FBQUEsaUJBQVk7UUFDakMscUNBQ0U7UUFBQSxrQ0FBWTtRQUFBLHFCQUFLO1FBQUEsaUJBQWE7UUFDOUIscUNBQTBCO1FBQUEsNEJBQVk7UUFBQSxpQkFBYTtRQUNuRCxzQ0FBNEI7UUFBQSwrQkFBYztRQUFBLGlCQUFhO1FBQ3pELGlCQUFhO1FBQ2IsaUNBQVU7UUFBQSx5Q0FBd0I7UUFBQSxpQkFBVztRQUM3Qyw2RkFBaUQ7UUFDakQsNkZBQ0U7UUFFSixpQkFBaUI7UUFFakIsMkJBQUk7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBSztRQUMzQiwwQ0FDRTtRQUFBLGtDQUFXO1FBQUEsMkJBQVU7UUFBQSxpQkFBWTtRQUNqQyxrQ0FDRTtRQUFBLDZCQUEwQjtRQUMxQixrQ0FBK0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQ3BELGtDQUF3QjtRQUFBLCtCQUFjO1FBQUEsaUJBQVM7UUFDakQsaUJBQVM7UUFDVCw2RkFBZ0U7UUFDaEUsNkZBQ0U7UUFFSixpQkFBaUI7O1FBeEJILGVBQXdCO1FBQXhCLDBDQUF3QixrQ0FBQTtRQU16QixlQUFxQztRQUFyQyx3REFBcUM7UUFDckMsZUFBc0U7UUFBdEUsNkZBQXNFO1FBUXhELGVBQXVDO1FBQXZDLHlEQUF1QyxrQ0FBQTtRQUtyRCxlQUFvRDtRQUFwRCx1RUFBb0Q7UUFDcEQsZUFBb0c7UUFBcEcsMkhBQW9HOztrREROcEcsOEJBQThCO2NBTDFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7OztJQUVDLGtEQUdHOztJQUVILDJEQUdHOztJQUVILGlFQUdHOztJQUVILGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIEVycm9yIHdoZW4gaW52YWxpZCBjb250cm9sIGlzIGRpcnR5LCB0b3VjaGVkLCBvciBzdWJtaXR0ZWQuICovXG5leHBvcnQgY2xhc3MgTXlFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcbiAgaXNFcnJvclN0YXRlKGNvbnRyb2w6IEZvcm1Db250cm9sIHwgbnVsbCwgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlIHwgTmdGb3JtIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU3VibWl0dGVkID0gZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZDtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkIHx8IGlzU3VibWl0dGVkKSk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBhIGN1c3RvbSBFcnJvclN0YXRlTWF0Y2hlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSB7XG4gIHNlbGVjdGVkID0gbmV3IEZvcm1Db250cm9sKCd2YWxpZCcsIFtcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgIFZhbGlkYXRvcnMucGF0dGVybigndmFsaWQnKSxcbiAgXSk7XG5cbiAgc2VsZWN0Rm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ZhbGlkJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCd2YWxpZCcpLFxuICBdKTtcblxuICBuYXRpdmVTZWxlY3RGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgndmFsaWQnLCBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLnBhdHRlcm4oJ3ZhbGlkJyksXG4gIF0pO1xuXG4gIG1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkNob29zZSBvbmU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInNlbGVjdGVkXCIgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8bWF0LW9wdGlvbj5DbGVhcjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInZhbGlkXCI+VmFsaWQgb3B0aW9uPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiaW52YWxpZFwiPkludmFsaWQgb3B0aW9uPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG4gIDxtYXQtaGludD5FcnJvcnMgYXBwZWFyIGluc3RhbnRseSE8L21hdC1oaW50PlxuICA8bWF0LWVycm9yICpuZ0lmPVwic2VsZWN0ZWQuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5Zb3UgbXVzdCBtYWtlIGEgc2VsZWN0aW9uPC9tYXQtZXJyb3I+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWxlY3RlZC5oYXNFcnJvcigncGF0dGVybicpICYmICFzZWxlY3RlZC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgIFlvdXIgc2VsZWN0aW9uIGlzIGludmFsaWRcbiAgPC9tYXQtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZnVsbC13aWR0aFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBvbmU8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFtmb3JtQ29udHJvbF09XCJuYXRpdmVTZWxlY3RGb3JtQ29udHJvbFwiIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2YWxpZFwiIHNlbGVjdGVkPlZhbGlkIG9wdGlvbjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJpbnZhbGlkXCI+SW52YWxpZCBvcHRpb248L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJuYXRpdmVTZWxlY3RGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPllvdSBtdXN0IG1ha2UgYSBzZWxlY3Rpb248L21hdC1lcnJvcj5cbiAgPG1hdC1lcnJvciAqbmdJZj1cIm5hdGl2ZVNlbGVjdEZvcm1Db250cm9sLmhhc0Vycm9yKCdwYXR0ZXJuJykgJiYgIW5hdGl2ZVNlbGVjdEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgWW91ciBzZWxlY3Rpb24gaXMgaW52YWxpZFxuICA8L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=